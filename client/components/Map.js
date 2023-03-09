import React from 'react';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';

const Map = () => {
    var maxBounds = [
        [25.82, -124.39], //Southwest
        [49.38, -66.94]  //Northeast
    ];

    return (
        <div>
        <MapContainer
            id="map"
            center={[39.50, -98.35]}
            zoom={4}
            minZoom={4}
            scrollWheelZoom={false}
            maxBounds={maxBounds}
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
        </div>
      );
};

export default Map;
