import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInputField from './TextInputField';
import { Box, Button, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

const LoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loginError, setLoginError] = useState(false);

  const onSubmit = (data) => {
    const { email, password } = data;
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.email === email && parsedData.password === password) {
        setUserData(parsedData);
        navigate('/profile', { state: { user: parsedData } });
      } else {
        setLoginError(true);
      }
    } else {
      setLoginError(true);
    }
  };

  return (
    <Card sx={cardStyle}>
      <Box mb={2}>
        <Typography variant="h6" component="h2">
          Login
        </Typography>
      </Box>
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
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;







