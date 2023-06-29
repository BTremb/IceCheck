import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextInputField from './TextInputField';
import { Box, Button, Card, Typography } from '@mui/material';

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

const SignUp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isProfileExist, setIsProfileExist] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const onSubmit = (data) => {
    const { email } = data;
    const profileExists = checkProfileExists(email);
    if (profileExists) {
      setIsProfileExist(true);
    } else {
      saveUserData(data);
      setIsAccountCreated(true);
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
  
  const saveUserData = (data) => {
    const storedData = localStorage.getItem('userData');
    const userData = storedData ? JSON.parse(storedData) : {};
  
    const { email } = data;
    userData[email] = data;
  
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (
    <Card sx={cardStyle}>
      <Box mb={2}>
        <Typography variant="h6" component="h2">
          Sign Up
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={1.5}>
          <TextInputField name="email" label="Email" control={control} errors={errors} required />
          {isProfileExist && (
            <Typography variant="caption" color="error">
              There is already an account associated with this email.
            </Typography>
          )}
        </Box>
        <Box mb={1.5}>
          <TextInputField name="password" label="Password" control={control} errors={errors} required />
        </Box>
        <Box mb={1.5}>
          <TextInputField name="userName" label="Username" control={control} errors={errors} required />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" type="submit" size="small">
            Submit
          </Button>
        </Box>
      </form>
      {isAccountCreated && (
        <Typography variant="body2" color="textSecondary" align="center">
          Account created!
        </Typography>
      )}
    </Card>
  );
};

export default SignUp;








