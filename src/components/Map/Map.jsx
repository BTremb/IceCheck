import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
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
    <Map
      google={props.google}
      initialCenter={{ lat: 49.2827, lng: -56.1126 }}
      zoom={8}
      styles={mapStyles}
      restriction={restriction}
    />
  );
};


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeSSwZVieES0TducS45tlAyA96lpN3glU',
})(MapContainer);


