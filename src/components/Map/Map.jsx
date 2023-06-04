import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';

const libraries = ['places'];

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
        { color: '#000000',
          visibility: 'on' },
      ],
    },
  ];

  // const restriction = {
  //   latLngBounds: {
  //     north: 51.7090,
  //     south: 46.5369,
  //     west: -60.3893,
  //     east: -52.3076,
  //   },
  //   strictBounds: true,
  // };



  
    const [mapCenter, setMapCenter] = useState({ lat: 49.2827, lng: -56.1126 });
    const [mapZoom, setMapZoom] = useState(8);
    const [markerPosition, setMarkerPosition] = useState(null);
  
    const mapRef = useRef(null);
    const autocompleteRef = useRef(null);
  
    useEffect(() => {
      // Load markers from local storage when the component mounts
      const savedMarkerPosition = localStorage.getItem('markerPosition');
      if (savedMarkerPosition) {
        setMarkerPosition(JSON.parse(savedMarkerPosition));
      }
    }, []);
  
    const handlePlaceSelect = () => {
      const autocomplete = autocompleteRef.current;
  
      if (autocomplete && autocomplete.getPlace()) {
        const place = autocomplete.getPlace();
  
        // Use PlaceService to check if the selected place is a water feature
        const mapInstance = mapRef.current;
        const placeService = new window.google.maps.places.PlacesService(mapInstance);
  
        placeService.getDetails(
          {
            placeId: place.place_id,
            fields: ['name', 'types'],
          },
          (result, status) => {
            if (status === 'OK' && result && result.types) {
              const isWaterFeature = result.types.includes('natural_feature') || result.types.includes('water');
  
              if (isWaterFeature) {
                const { geometry } = place;
  
                if (geometry && geometry.location) {
                  const { lat, lng } = geometry.location;
                  setMapCenter({ lat: lat(), lng: lng() });
                  setMapZoom(16);
                  const newMarkerPosition = { lat: lat(), lng: lng() };
                  setMarkerPosition(newMarkerPosition);
  
                  // Save the marker position to local storage
                  localStorage.setItem('markerPosition', JSON.stringify(newMarkerPosition));
                }
              } else {
                alert('Please select a water feature.'); // Show an error message
              }
            } else {
              console.error('Place service failed due to:', status);
            }
          }
        );
      }
    };
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyDeSSwZVieES0TducS45tlAyA96lpN3glU" libraries={libraries}>
        <Autocomplete
          onLoad={(autocomplete) => {
            autocompleteRef.current = autocomplete;
          }}
          onPlaceChanged={handlePlaceSelect}
        >
          <input
            type="text"
            placeholder="Search for a location"
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              zIndex: 1,
              padding: '0.5rem',
            }}
          />
        </Autocomplete>
        <GoogleMap
          onLoad={(map) => {
            mapRef.current = map;
          }}
          mapContainerStyle={{ height: 'calc(100vh - 4rem)', width: '100%' }}
          center={mapCenter}
          zoom={mapZoom}
          options={{
            styles: mapStyles,
          }}
        >
          {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default MapContainer;
  

