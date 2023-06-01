import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInputField from './TextInputField';
import { Box, Button, Card, Typography } from '@mui/material';
import UserProfile from './UserProfile';

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
  const [userData, setUserData] = useState(null);
  const [isProfileExist, setIsProfileExist] = useState(false);

  const onSubmit = (data) => {
    const { email } = data;
    const profileExists = checkProfileExists(email);
    if (profileExists) {
      setIsProfileExist(true);
    } else {
      setUserData(data);
      saveUserData(data);
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
    <>
      {userData ? (
        <UserProfile user={userData} />
      ) : (
        <Card sx={cardStyle}>
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
      )}
    </>
  );
};

export default SignUp;

