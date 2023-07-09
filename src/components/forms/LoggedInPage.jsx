import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const LoggedInPage = ({ user, handleLogout }) => {
  return (
    <div>
      <Typography variant="body1">You are logged in.</Typography>
      {user && (
        <Box mt={2}>
          <Typography variant="body2">Email: {user.email}</Typography>
          <Typography variant="body2">Username: {user.userName}</Typography>
        </Box>
      )}
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default LoggedInPage;


