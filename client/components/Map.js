import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer,  Marker } from "react-leaflet";

import RecenterMap from "./RecenterMap";
import { Box } from "@mui/material";
import RepsBox from "./MapDisplay/RepsBox";
import IntroText from "./MapDisplay/IntroText";

const Map = () => {


  var maxBounds = [
    [25.82, -124.39], //Southwest
    [49.38, -66.94], //Northeast
  ];

  const [userLatitude, setUserLatitude] = useState(41.9725636);
  const [userLongitude, setUserLongitude] = useState(-87.6912325);
  const [congressMembers, setCongressMembers] = useState(null);
  const [senators, setSenators] = useState(null);
  const [representatives, setRepresentatives] = useState(null);
 

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setUserLatitude(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
        });
      }
      // setUserLatitude(41.9725636);
      // setUserLongitude(-87.6912325);
    };

    const fetchCongressMembers = async () => {
      const response = await axios.get("/api/congressmembers"); //THIS USES OLD API
      setCongressMembers(response.data);
    };

    fetchCongressMembers();
    getLocation();
  }, []);

  useEffect(() => {
    function getRepsAndSens(latitude, longitude) {
      const googleApiKey = "AIzaSyAy4C9YFvTsAKiC7Yl0_DyAfwph0aUgxyQ";
      const civicApiKey = "AIzaSyCfGbL-JEtCLsPhWggy6uZB6yoFzngn-AY";

      const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`;
      axios
        .get(googleUrl)
        .then((response) => {
          const address = response.data.results[0].formatted_address;
          const civicUrl = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&roles=legislatorLowerBody&roles=legislatorUpperBody&key=${civicApiKey}`;

          axios
            .get(civicUrl)
            .then((response) => {
              const officials = response.data.officials;
              setSenators([officials[0], officials[1]]);
              setRepresentatives([officials[2]]);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    getRepsAndSens(userLatitude, userLongitude);
  }, [userLatitude, userLongitude]);

  return (
    <Box
      sx={{
        height: "700px",
      }}
    >
      <MapContainer
        id="map"
        center={[39.5, -98.35]}
        zoom={4}
        minZoom={4}
        className="map"
        scrollWheelZoom={false}
        maxBounds={maxBounds}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLatitude && userLongitude && (
          <>
            <Marker position={[userLatitude, userLongitude]}></Marker>
            <RecenterMap lat={userLatitude} long={userLongitude} />
          </>
        )}
      </MapContainer>


      <IntroText />

      <RepsBox senators = {senators} representatives = {representatives} />



    </Box>
  );
};



export default Map;
