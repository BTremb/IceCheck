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
};

const SignUp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isProfileExist, setIsProfileExist] = useState(false);

  const onSubmit = (data) => {
    const { email } = data;
    const profileExists = checkProfileExists(email);
    if (profileExists) {
      setIsProfileExist(true);
    } else {
      saveUserData(data);
      navigate('/Profile');
    }
  };

  const checkProfileExists = (email) => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return parsedData.email === email;
    }
    return false;
  };

  const saveUserData = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
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
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default SignUp;


