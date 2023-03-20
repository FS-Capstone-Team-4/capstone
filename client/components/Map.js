import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';

import RecenterMap from './RecenterMap';

const Map = () => {
  var maxBounds = [
    [25.82, -124.39], //Southwest
    [49.38, -66.94], //Northeast
  ];

  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);

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

  return (
    <div>
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
    </div>
  );
};

export default Map;
