import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Card, Typography } from '@mui/material';
import TextInputField from './TextInputField';

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

const LoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isLoggedIn);
  
    if (isLoggedIn) {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        const userData = JSON.parse(storedData);
        setUserData(userData);
      }
    }
  }, []);
  
  const onSubmit = (data) => {
    const { email, password } = data;
    const storedData = localStorage.getItem('userData');
  
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const userData = parsedData ? parsedData : {};
      const profile = userData[email];
  
      if (profile && password === profile.password) {
        setIsLoggedIn(true);
        setUserData(profile);
        setLoginError(false);
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        setLoginError(true);
      }
    } else {
      setLoginError(true);
    }
  };
  
  
  
  const checkProfileExists = (email) => {
    const storedData = localStorage.getItem('userData');
    
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const userData = parsedData ? parsedData : {};
      const profiles = Object.values(userData);
      return profiles.some(profile => profile.email === email);
    }
    
    return false;
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };
  
  
  

  return (
    <Card sx={cardStyle}>
      {isLoggedIn ? (
        <div>
          <Typography variant="body1">You are logged in.</Typography>
          {userData && (
            <Box mt={2}>
              <Typography variant="body2">Email: {userData.email}</Typography>
              <Typography variant="body2">Username: {userData.userName}</Typography>
            </Box>
          )}
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="h6" component="h2" mb={2}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={1.5}>
              <TextInputField name="email" label="Email" control={control} errors={errors} required />
            </Box>
            <Box mb={1.5}>
              <TextInputField name="password" label="Password" control={control} errors={errors} required />
              {loginError && (
                <Typography variant="caption" color="error">
                  Invalid email or password.
                </Typography>
              )}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" type="submit" size="small">
                Login
              </Button>
            </Box>
          </form>
        </div>
      )}
    </Card>
  );
};

export default LoginForm;









