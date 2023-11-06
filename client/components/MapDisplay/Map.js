import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import RecenterMap from "./RecenterMap";
import { Box } from "@mui/material";
import RepsBox from "./RepsBox";
import IntroText from "./IntroText";
import ZipcodeBox from "./ZipcodeBox";

const Map = () => {
  var maxBounds = [
    [25.82, -124.39], //Southwest
    [49.38, -66.94], //Northeast
  ];

  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [senators, setSenators] = useState(null);
  const [representatives, setRepresentatives] = useState(null);
  const [zipcode, setZipcode] = useState(null);

  // const googleApiKey = "AIzaSyB4VKJtLFgLLnWldpXrucEnyD9iE7pMiwg";
  const googleApiKey = "AIzaSyC4x13WwvzQouJphFBBz3UjyIzVhm4NTGo";


  const getLocation = () => {
    if (zipcode) {
      const latLongUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${googleApiKey}&components=postal_code:${zipcode}`;

      axios.get(latLongUrl).then((response) => {
        console.log(response.data.results[0].geometry.location);
        const latAndLong = response.data.results[0].geometry.location;
        setUserLatitude(latAndLong.lat);
        setUserLongitude(latAndLong.lng);
      });
    }
  };

  useEffect(() => {
      getLocation();
    }, [zipcode]);

  useEffect(() => {
    function getRepsAndSens(latitude, longitude) {
      const civicApiKey = "AIzaSyB4VKJtLFgLLnWldpXrucEnyD9iE7pMiwg";

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
              // console.log("officials", officials)
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
        height: "100vh",
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
      
      {senators ? (
        <RepsBox senators={senators} setSenators={setSenators} representatives={representatives} />
      ) : (
        <ZipcodeBox setZipcode={setZipcode} zipcode={zipcode} />
      )}


      <IntroText />



    </Box>
  );
};

export default Map;

//Irwing's func

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     setUserLatitude(position.coords.latitude);
//     setUserLongitude(position.coords.longitude);
//   });
// }
  //NOT BEING USED HERE
  // const fetchCongressMembers = async () => {
  //   const response = await axios.get("/api/congressmembers"); //THIS USES OLD API
  //   setCongressMembers(response.data);
  // };
