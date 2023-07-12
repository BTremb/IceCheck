import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, List, ListItem } from '@mui/material';

const UserPostDisplay = ({ markerPosition }) => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const getUpdatesByMarker = (marker) => {
      const storedUpdates = localStorage.getItem('userUpdates');
      if (storedUpdates) {
        const allUpdates = JSON.parse(storedUpdates);
        return allUpdates.filter((update) => update.marker && update.marker.lat === marker.lat && update.marker.lng === marker.lng);
      }
      return [];
    };

    const filteredUpdates = getUpdatesByMarker(markerPosition);
    setUpdates(filteredUpdates.reverse());
  }, [markerPosition]);

  return (
    <Box sx={{ height: '400px', overflow: 'auto', paddingRight: '16px', paddingLeft: '16px' }}>
      <Paper elevation={3}>
        <List sx={{ padding: 0 }}>
          {updates.map((update, index) => (
            <ListItem 
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '0.1rem solid #e0e0e0',
                padding: '2rem',
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Box mb={1.5} style={{ textAlign: 'center' }}>
                  <span style={{ fontWeight: 'bold' }}>Ice thickness:</span>
                  <Typography variant="body1">{update.iceThickness}cm</Typography>
                </Box>

                <Typography variant="body2" component="p">
                  <span style={{ fontWeight: 'bold' }}>User:</span> {update.username}
                </Typography>
                <Typography variant="body2" component="p">
                  <span style={{ fontWeight: 'bold' }}>Date:</span> {update.date}
                </Typography>
                <Typography variant="body2" component="p">
                  <span style={{ fontWeight: 'bold' }}>Time:</span> {update.time}
                </Typography>
                <Typography variant="body2" component="p">
                  <span style={{ fontWeight: 'bold' }}>Additional info:</span>{' '}
                  {update.additionalInfo ? update.additionalInfo : 'None'}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default UserPostDisplay;



