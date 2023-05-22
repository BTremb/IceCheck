import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = [
    {
      stylers: [
        { saturation: -100 },
        { lightness: 20 },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        { color: '#4f9cba' },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        { visibility: 'off' },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' },
      ],
    },
  ];

  const restriction = {
    latLngBounds: {
      north: 51.7090,
      south: 46.5369,
      west: -60.3893,
      east: -52.3076,
    },
    strictBounds: true,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDeSSwZVieES0TducS45tlAyA96lpN3glU">
      <GoogleMap
        mapContainerStyle={{ height: "calc(100vh - 4rem)", width: "100%" }}
        center={{ lat: 49.2827, lng: -56.1126 }}
        zoom={8}
        options={{
          styles: mapStyles,
          restriction: restriction
        }}
      />
    </LoadScript>
  );
};

export default MapContainer;
