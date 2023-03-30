import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

import RecenterMap from './RecenterMap';
import RepCard from './RepCard';
import SenatorCard from './SenatorCard';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// const Map = () => {
//   var maxBounds = [
//     [25.82, -124.39], //Southwest
//     [49.38, -66.94], //Northeast
//   ];

//   const [userLatitude, setUserLatitude] = useState(null);
//   const [userLongitude, setUserLongitude] = useState(null);
//   const [congressMembers, setCongressMembers] = useState(null);
//   const [senators, setSenators] = useState(null);
//   const [representatives, setRepresentatives] = useState(null);

//   useEffect(() => {
//     const getLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//           setUserLatitude(position.coords.latitude);
//           setUserLongitude(position.coords.longitude);
//         });
//       }
//     };

//     const fetchCongressMembers = async () => {
//       const response = await axios.get('/api/congressmembers'); //THIS USES OLD API
//       setCongressMembers(response.data);
//     };

//     fetchCongressMembers();
//     getLocation();
//   }, []);

//   useEffect(() => {
//     function getRepsAndSens(latitude, longitude) {
//       const googleApiKey = 'AIzaSyAy4C9YFvTsAKiC7Yl0_DyAfwph0aUgxyQ';
//       const civicApiKey = 'AIzaSyCfGbL-JEtCLsPhWggy6uZB6yoFzngn-AY';

//       const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`;
//       axios
//         .get(googleUrl)
//         .then(response => {
//           const address = response.data.results[0].formatted_address;
//           const civicUrl = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&roles=legislatorLowerBody&roles=legislatorUpperBody&key=${civicApiKey}`;

//           axios
//             .get(civicUrl)
//             .then(response => {
//               const officials = response.data.officials;
//               setSenators([officials[0], officials[1]]);
//               setRepresentatives([officials[2]]);
//               console.log(response.data);
//             })
//             .catch(error => {
//               console.error(error);
//             });
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }

//     getRepsAndSens(userLatitude, userLongitude);
//   }, [userLatitude, userLongitude]);

//   return (
//     <div>
//       <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
//         <Typography variant='body2' color='text.secondary' align='center'>
//           <p> Please select a location </p>
//         </Typography>
//         <MapContainer
//           id='map'
//           center={[39.5, -98.35]}
//           zoom={4}
//           minZoom={4}
//           scrollWheelZoom={false}
//           maxBounds={maxBounds}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//           />
//           {userLatitude && userLongitude && (
//             <>
//               <Marker position={[userLatitude, userLongitude]}></Marker>
//               <RecenterMap lat={userLatitude} long={userLongitude} />
//             </>
//           )}
//         </MapContainer>
//       </Container>

//       <h2>Your Congressional District's Representative is:</h2>
//       {representatives &&
//         representatives.map((member, idx) => {
//           return <RepCard key={idx} member={member} />;
//         })}
//       <hr />
//       <hr />
//       <h2>These are your Senators</h2>
//       {senators &&
//         senators.map((member, idx) => {
//           return <SenatorCard key={idx} member={member} />;
//         })}
//     </div>
//   );
// };

// export default Map;

// const Map = () => {
//   var maxBounds = [
//     [25.82, -124.39], //Southwest
//     [49.38, -66.94], //Northeast
//   ];

//   const [userLatitude, setUserLatitude] = useState(null);
//   const [userLongitude, setUserLongitude] = useState(null);
//   const [congressMembers, setCongressMembers] = useState(null);
//   const [senators, setSenators] = useState(null);
//   const [representatives, setRepresentatives] = useState(null);

//   useEffect(() => {
//     const getLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//           setUserLatitude(position.coords.latitude);
//           setUserLongitude(position.coords.longitude);
//         });
//       }
//     };

//     const fetchCongressMembers = async () => {
//       const response = await axios.get('/api/congressmembers'); //THIS USES OLD API
//       setCongressMembers(response.data);
//     };

//     fetchCongressMembers();
//     getLocation();
//   }, []);

//   useEffect(() => {
//     function getRepsAndSens(latitude, longitude) {
//       const googleApiKey = 'AIzaSyAy4C9YFvTsAKiC7Yl0_DyAfwph0aUgxyQ';
//       const civicApiKey = 'AIzaSyCfGbL-JEtCLsPhWggy6uZB6yoFzngn-AY';

//       const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`;
//       axios
//         .get(googleUrl)
//         .then(response => {
//           const address = response.data.results[0].formatted_address;
//           const civicUrl = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&roles=legislatorLowerBody&roles=legislatorUpperBody&key=${civicApiKey}`;

//           axios
//             .get(civicUrl)
//             .then(response => {
//               const officials = response.data.officials;
//               setSenators([officials[0], officials[1]]);
//               setRepresentatives([officials[2]]);
//             })
//             .catch(error => {
//               console.error(error);
//             });
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }

//     getRepsAndSens(userLatitude, userLongitude);
//   }, [userLatitude, userLongitude]);
//   console.log(representatives);
//   console.log(senators);
//   console.log(congressMembers);
//   return (
//     <div>
//       <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
//         <Typography variant='body2' color='text.secondary' align='center'>
//           <p> Please select a location </p>
//         </Typography>
//         <MapContainer
//           id='map'
//           center={[39.5, -98.35]}
//           zoom={4}
//           minZoom={4}
//           scrollWheelZoom={false}
//           maxBounds={maxBounds}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//           />
//           {userLatitude && userLongitude && (
//             <>
//               <Marker position={[userLatitude, userLongitude]}></Marker>
//               <RecenterMap lat={userLatitude} long={userLongitude} />
//             </>
//           )}
//         </MapContainer>
//       </Container>

//       <h2>Your Congressional District's Representative is:</h2>
//       {representatives &&
//         representatives.map((member, idx) => {
//           let congressId = null;
//           if (congressMembers) {
//             const congressMember = congressMembers.find(
//               cm => cm.name === member.name
//             );
//             congressId = congressMember ? congressMember.CongressId : null;
//           }
//           return <RepCard key={idx} member={member} />;
//         })}
//       <hr />
//       <hr />
//       <h2>These are your Senators</h2>
//       {senators &&
//         senators.map((member, idx) => {
//           let congressId = null;
//           if (congressMembers) {
//             const congressMember = congressMembers.find(
//               cm => cm.name === member.name
//             );
//             congressId = congressMember ? congressMember.CongressId : null;
//           }
//           return (
//             <SenatorCard key={idx} member={member} CongressId={congressId} />
//           );
//         })}
//     </div>
//   );
// };

// export default Map;

const Map = () => {
  var maxBounds = [
    [25.82, -124.39], //Southwest
    [49.38, -66.94], //Northeast
  ];

  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
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
    };

    const fetchCongressMembers = async () => {
      const response = await axios.get('/api/congressmembers'); //THIS USES OLD API
      setCongressMembers(response.data);
    };

    fetchCongressMembers();
    getLocation();
  }, []);

  useEffect(() => {
    function getRepsAndSens(latitude, longitude) {
      const googleApiKey = 'AIzaSyAy4C9YFvTsAKiC7Yl0_DyAfwph0aUgxyQ';
      const civicApiKey = 'AIzaSyCfGbL-JEtCLsPhWggy6uZB6yoFzngn-AY';

      const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`;
      axios
        .get(googleUrl)
        .then(response => {
          const address = response.data.results[0].formatted_address;
          const civicUrl = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&roles=legislatorLowerBody&roles=legislatorUpperBody&key=${civicApiKey}`;

          axios
            .get(civicUrl)
            .then(response => {
              const officials = response.data.officials;
              setSenators([officials[0], officials[1]]);
              setRepresentatives([officials[2]]);
            })
            .catch(error => {
              console.error(error);
            });
        })
        .catch(error => {
          console.error(error);
        });
    }

    getRepsAndSens(userLatitude, userLongitude);
  }, [userLatitude, userLongitude]);
  console.log(representatives);
  console.log(senators);
  console.log(congressMembers);
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
              <Marker position={[userLatitude, userLongitude]}></Marker>
              <RecenterMap lat={userLatitude} long={userLongitude} />
            </>
          )}
        </MapContainer>
      </Container>

      <h2>Your Congressional District's Representative is:</h2>
      {representatives &&
        representatives.map((member, idx) => {
          return <RepCard key={idx} member={member} />;
        })}
      <hr />
      <hr />
      <h2>These are your Senators</h2>
      {senators &&
        senators.map((member, idx) => {
          return <SenatorCard key={idx} member={member} />;
        })}
    </div>
  );
};

export default Map;
