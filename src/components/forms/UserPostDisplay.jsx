import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, List, ListItem } from '@mui/material';

const UserPostDisplay = ({ markerPosition }) => {
  const [updates, setUpdates] = useState([]);
console.log(markerPosition);
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
    // Reverse the order of updates array
    setUpdates(filteredUpdates.reverse());
  }, [markerPosition]);

  return (
    <Box sx={{ height: '400px', overflow: 'auto' }}>
      <Paper elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
        <List sx={{ padding: 0 }}>
          {updates.map((update, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #e0e0e0',
                padding: '1rem',
                '&:last-child': {
                  borderBottom: 'none',
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" component="p">
                  Ice Thickness: {update.iceThickness}cm
                </Typography>
                <Typography variant="body1" component="p">
                  Measurement Method: {update.measurementMethod}
                </Typography>
                <Typography variant="body1" component="p">
                  Date: {update.date}
                </Typography>
                <Typography variant="body1" component="p">
                  Time: {update.time}
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

