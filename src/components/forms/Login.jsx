import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Card, Typography, Link, Modal } from '@mui/material';
import TextInputField from './TextInputField';
import { UserContext } from '../../contexts/UserContext';
import LoggedInPage from './LoggedInPage';

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
  const [doesProfileExist, setDoesProfileExist] = useState(true);
  const [isIncorrectPassword, setIncorrectPassword] = useState(false);


  const onSubmit = (data) => {
    const { email, password } = data;
    const profileExists = checkProfileExists(email);
    
    if (!profileExists) {
      setDoesProfileExist(false);
      setIncorrectPassword(false); 
    } else {
      const isValidPassword = checkPassword(email, password);
      if (isValidPassword) {
        login(email, password);
      } else {
        setIncorrectPassword(true);
      }
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

  const checkPassword = (email, password) => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const userData = parsedData ? parsedData : {};
      const profile = userData[email];
      return profile && profile.password === password;
    }
    return false;
  };
  

  const handleLogout = () => {
    logout();
  };

  return (
    <Card sx={cardStyle}>
      {user ? (
        <LoggedInPage user={user} handleLogout={handleLogout} />
      ) : (
        <div>
          <Typography variant="h6" component="h2" mb={3} style={{ textAlign: 'center' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={1.5}>
          <TextInputField name="email" label="Email" register={register} control={control} errors={errors} required />
          {!doesProfileExist && (
            <Typography variant="caption" color="error">
              There is no account associated with this email.
            </Typography>
          )}
        </Box>
        <Box mb={1.5}>
          <TextInputField name="password" label="Password" register={register} control={control} errors={errors} required />
          {isIncorrectPassword && (
            <Typography variant="caption" color="error">
              Incorrect password. Please try again.
            </Typography>
          )}
        </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" type="submit" size="small" >
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




