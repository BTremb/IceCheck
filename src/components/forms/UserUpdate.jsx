import React, { useEffect } from 'react';
import { Box, Card, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
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
};


const UserUpdate = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
   



  const onSubmit = (data) => {
    const { iceThickness, measurementMethod } = data;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const marker = JSON.parse(localStorage.getItem('markerPosition')); // Parse the stored marker position
  
    const update = {
      iceThickness,
      measurementMethod,
      date,
      time,
      marker,
    };
    saveUserUpdate(update);
    console.log(update);
  };
  
  const saveUserUpdate = (update) => {
    const storedUpdates = localStorage.getItem('userUpdates');
    let updates = [];
    if (storedUpdates) {
      updates = JSON.parse(storedUpdates);
    }
    updates.push(update);
    localStorage.setItem('userUpdates', JSON.stringify(updates));
  }

  return (
    <Card sx={cardStyle}>
      <Box mb={2}>
        <Typography variant="h6" component="h2">
          Update
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={1.5}>
        <TextInputField name="iceThickness" label="Ice Thickness (Centimeters)" control={control} errors={errors} required />
        </Box>
        <Box mb={1.5}>
          <TextInputField name="measurementMethod" label="Method of Measurement" control={control} errors={errors} required />
        </Box>
        <Box mb={1.5}>
          <Typography variant="body1" component="p">
            Date: {new Date().toLocaleDateString()}
          </Typography>
          <Typography variant="body1" component="p">
            Time: {new Date().toLocaleTimeString()}
          </Typography>
         
      
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
};

export default UserUpdate;





