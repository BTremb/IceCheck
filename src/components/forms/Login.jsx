import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Card, Typography } from '@mui/material';
import TextInputField from './TextInputField';
import { UserContext } from '../../contexts/UserContext';

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
  const { handleSubmit, register, formState: { errors }, control } = useForm();
  const { login, user, logout } = useContext(UserContext);

  const onSubmit = (data) => {
  const { email, password } = data;
   login(email, password);  
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Card sx={cardStyle}>
      {user ? (
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
      ) : (
        <div>
          <Typography variant="h6" component="h2" mb={2}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={1.5}>
              <TextInputField name="email" label="Email" register={register} control={control} errors={errors} required />
            </Box>
            <Box mb={1.5}>
              <TextInputField name="password" label="Password" register={register} control={control} errors={errors} required />
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
