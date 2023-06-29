import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const LoggedInComponent = ({ onLogout, userData }) => {
  return (
    <div>
      <Typography variant="body1">You are logged in.</Typography>
      {userData && (
        <Box mt={2}>
          <Typography variant="body2">Email: {userData.email}</Typography>
          <Typography variant="body2">Username: {userData.userName}</Typography>
        </Box>
      )}
      <Button variant="contained" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default LoggedInComponent;

