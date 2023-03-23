import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

import RecenterMap from './RecenterMap';
import RepCard from './RepCard';
import SenatorCard from './SenatorCard';
import PercentageBar from './PercentageGraph';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Map = () => {
  var maxBounds = [
    [25.82, -124.39], //Southwest
    [49.38, -66.94], //Northeast
  ];

  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [congressMembers, setCongressMembers] = useState(null);
  const [USState, setUSState] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setUserLatitude(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
        });
      }
    };
    getLocation();
  }, []);

  useEffect(() => {
    const fetchCongressMembers = async () => {
      const response = await axios.get('/api/congressmembers');
      setCongressMembers(response.data);
    };
    fetchCongressMembers();
  }, []);

  useEffect(() => {
    function getUSState(latitude, longitude) {
      const apiKey = 'AIzaSyAy4C9YFvTsAKiC7Yl0_DyAfwph0aUgxyQ'; // replace with your own Google Maps Geocoding API key
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

      axios
        .get(url)
        .then(response => {
          const state = response.data.results[0].address_components.find(
            component => {
              return component.types.includes('administrative_area_level_1');
            }
          ).short_name;
          setUSState(state);
        })
        .catch(error => console.error(error));
    }
    getUSState(userLatitude, userLongitude);
  }, [userLatitude, userLongitude]);

  return (
    <div>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Typography variant='body2' color='text.secondary' align='center'>
          <p> Please select a location </p>
        </Typography>
        <MapContainer
          id='map'
          center={[39.5, -98.35]}
          zoom={4}
          minZoom={4}
          scrollWheelZoom={false}
          maxBounds={maxBounds}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {userLatitude && userLongitude && (
            <>
              <Marker position={[userLatitude, userLongitude]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <RecenterMap lat={userLatitude} long={userLongitude} />
            </>
          )}
        </MapContainer>
      </Container>

      <PercentageBar />

      <h2>These are your State's Representatives</h2>
      {congressMembers &&
        USState &&
        congressMembers
          .filter(member => {
            return (
              member.position === 'Representative' && member.state === USState
            );
          })
          .map((member, idx) => {
            return <RepCard key={idx} member={member} />;
          })}
      <hr />
      <hr />
      <hr />

      <h2>These are your Senators</h2>
      {congressMembers &&
        USState &&
        congressMembers
          .filter(member => {
            return (
              member.position !== 'Representative' && member.state === USState
            );
          })
          .map((member, idx) => {
            return <SenatorCard key={idx} member={member} />;
          })}
    </div>
  );
};

export default Map;
