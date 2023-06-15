import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import { Button, Modal, Typography, Box, Link } from '@mui/material';
import UserUpdate from '../forms/UserUpdate';
import UserPostDisplay from '../forms/UserPostDisplay';
import MarkerWithModal from './MarkerWithModal';

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
        { color: '#000000', visibility: 'on' },
      ],
    },
  ];

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const [mapCenter, setMapCenter] = useState({ lat: 49.2827, lng: -56.1126 });
  const [mapZoom, setMapZoom] = useState(8);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showUserUpdate, setShowUserUpdate] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  const mapRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    const savedMarkerPosition = localStorage.getItem('markerPosition');
    if (savedMarkerPosition) {
      setMarkerPosition(JSON.parse(savedMarkerPosition));
      setMapCenter(JSON.parse(savedMarkerPosition));
    }

    const storedUserPosts = localStorage.getItem('userUpdates');
    if (storedUserPosts) {
      const parsedUserPosts = JSON.parse(storedUserPosts);
      setUserPosts(parsedUserPosts);
    }
  }, []);

  const handlePlaceSelect = () => {
    const autocomplete = autocompleteRef.current;
  
    if (autocomplete && autocomplete.getPlace()) {
      const place = autocomplete.getPlace();
  
      const mapInstance = mapRef.current;
      const placeService = new window.google.maps.places.PlacesService(mapInstance);
  
      placeService.getDetails(
        {
          placeId: place.place_id,
          fields: ['name', 'types', 'geometry'],
        },
        (result, status) => {
          if (status === 'OK' && result && result.types) {
            const isWaterFeature = result.types.includes('natural_feature') || result.types.includes('water');
  
            if (isWaterFeature) {
              const { geometry } = result;
  
              if (geometry && geometry.location) {
                const { lat, lng } = geometry.location;
                const newMarkerPosition = { lat: lat(), lng: lng() };
                setMarkerPosition(newMarkerPosition);
  
                const bounds = new window.google.maps.LatLngBounds();
                bounds.extend(newMarkerPosition);
                mapInstance.fitBounds(bounds);

                const maxZoom = 15;
                const currentZoom = mapInstance.getZoom();
                if (currentZoom > maxZoom) {
                  mapInstance.setZoom(maxZoom);
                }
  
                localStorage.setItem('markerPosition', JSON.stringify(newMarkerPosition));
              }
            } else {
              alert('Please select a water feature.');
            }
          } else {
            console.error('Place service failed due to:', status);
          }
        }
      );
    }
  };
  
  const handleClose = () => {
    setOpenModal(false);
    setShowUserUpdate(false);
  };

  const handleUserUpdateClick = () => {
    setShowUserUpdate(true);
  };
console.log(userPosts);
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
        {userPosts.map((post, index) => (
         
         <MarkerWithModal 
         index={index}
         post={post}
         />

        ))}
        {/* {markerPosition && (
          <MarkerWithModal
            index={999999}
            position={markerPosition}
          />
        )} */}

      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

