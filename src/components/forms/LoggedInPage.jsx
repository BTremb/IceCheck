import React from 'react';
import { Typography, Box, Button, Card } from '@mui/material';

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
  borderRadius: '8px',
  boxShadow: 'none',
};

const LoggedInPage = ({ user, handleLogout }) => {
  return (
    <Card sx={cardStyle}>
      <Typography variant="h6" component="h2" mb={3} style={{ textAlign: 'center' }}>
        You are logged in.
      </Typography>
      {user && (
        <>
          <Box mb={1.5} style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>Email:</span>
            <Typography variant="body2">{user.email}</Typography>
          </Box>
          <Box mb={1.5} style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>Username:</span>
            <Typography variant="body2">{user.userName}</Typography>
          </Box>
        </>
      )}
      <Button variant="contained" size="small" onClick={handleLogout}>
        Logout
      </Button>
    </Card>
  );
};

export default LoggedInPage;




