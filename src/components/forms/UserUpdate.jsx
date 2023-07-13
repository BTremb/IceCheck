import React, { useContext } from 'react';
import { Box, Card, Typography, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
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
  boxShadow: 'none',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const UserUpdate = ({ marker, updateUserPost, revertView }) => {
  const { control, handleSubmit, formState: { errors }, reset, register } = useForm();
  const { user } = useContext(UserContext);

  const onSubmit = async (data) => {
    revertView();
    reset();

    const { iceThickness, additionalInfo } = data;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const update = {
      iceThickness,
      additionalInfo,
      date,
      time,
      marker,
      username: user ? user.userName : 'Guest',
    };

    await saveUserUpdate(update);
    updateUserPost(update);
  };

  const saveUserUpdate = async (update) => {
    const storedUpdates = localStorage.getItem('userUpdates');
    let updates = [];
    if (storedUpdates) {
      updates = JSON.parse(storedUpdates);
    }
    updates.push(update);
    localStorage.setItem('userUpdates', JSON.stringify(updates));
  };

  const handleRevertAndSubmit = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <Card sx={cardStyle}>
      <Box mb={2}>
        <Typography variant="h6" component="h2">
          Update
        </Typography>
      </Box>
      <form style={formStyle}>
        <Box mb={1.5}>
          <TextInputField
            name="iceThickness"
            label={<Typography variant="body2">Ice thickness (cm)*</Typography>}
            control={control}
            errors={errors}
            maxLength={15}
            required
          />
        </Box>
        <Box mb={1.5}>
          <TextField
            name="additionalInfo"
            label="Additional info (optional)"
            multiline
            rows={4}
            variant="outlined"
            size="small"
            {...register('additionalInfo')}
          />
        </Box>
        <Box mb={1.5}>
          <Typography variant="body1" component="p">
            <span style={{ fontWeight: 'bold' }}>User:</span> {user ? user.userName : 'Guest'}
          </Typography>
          <Typography variant="body1" component="p">
            <span style={{ fontWeight: 'bold' }}>Date:</span> {new Date().toLocaleDateString()}
          </Typography>
          <Typography variant="body1" component="p">
            <span style={{ fontWeight: 'bold' }}>Time:</span> {new Date().toLocaleTimeString()}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" size="small" onClick={handleRevertAndSubmit}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default UserUpdate;




















