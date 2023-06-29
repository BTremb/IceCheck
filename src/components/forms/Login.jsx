import React, { useState } from 'react';
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
  const [userData, setUserData] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = (data) => {
    const { email, password } = data;
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      const user = userData[email];
      if (user && user.password === password) {
        setUserData(user);
        setIsLoggedIn(true);
      } else {
        setLoginError(true);
      }
    } else {
      setLoginError(true);
    }
  };
  

  return (
    <Modal>
      <Card sx={cardStyle}>
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
      </Card>
    </Modal>
  );
};

export default LoginForm;








