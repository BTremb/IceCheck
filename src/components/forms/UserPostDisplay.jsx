import React from 'react';
import { Typography, Card } from '@mui/material';

const cardStyle = {
  padding: '1rem',
  margin: '1rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const UserPostDisplay = ({ updates, latitude, longitude }) => {
  // Filter updates based on latitude and longitude
  const filteredUpdates = updates.filter(
    (update) => update.latitude === latitude && update.longitude === longitude
  );

  return (
    <Card sx={cardStyle}>
      <Typography variant="h6" component="h2">
        User Updates
      </Typography>
      {filteredUpdates.map((update, index) => (
        <div key={index}>
          <Typography variant="body1" component="p">
            Date: {update.date}
          </Typography>
          <Typography variant="body1" component="p">
            Time: {update.time}
          </Typography>
          <Typography variant="body1" component="p">
            Latitude: {update.latitude !== undefined ? update.latitude : ''}
          </Typography>
          <Typography variant="body1" component="p">
            Longitude: {update.longitude !== undefined ? update.longitude : ''}
          </Typography>
          <Typography variant="body1" component="p">
            Ice Thickness: {update.iceThickness}
          </Typography>
          <Typography variant="body1" component="p">
            Measurement Method: {update.measurementMethod}
          </Typography>
          <hr />
        </div>
      ))}
    </Card>
  );
};

export default UserPostDisplay;


