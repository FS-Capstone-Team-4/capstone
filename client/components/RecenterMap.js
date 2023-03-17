import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const RecenterMap = ({ lat, long }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, long], 7);
  }, [lat, long]);

  return null;
};

export default RecenterMap;
