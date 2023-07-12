import React from 'react';
import { Modal, Typography, Box, Button } from '@mui/material';

const OnboardingModal = ({ onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          bgcolor: 'background.paper',
          maxHeight: '80%',
          overflow: 'auto',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '14px',
        }}
      >
        <Typography variant="h5" component="div" marginBottom={'1rem'}>
          Welcome to Our Community!
        </Typography>
        <Typography variant="body2" component="div" fontWeight="bold" marginBottom={'0.25rem'}>
          Thank you for joining our community! We're excited to have you on board.
        </Typography>
        <Typography variant="body2" component="div" marginBottom={'1rem'}>
          Do you venture onto frozen ponds and lakes during the winter? Our app is designed to keep you informed of current ice levels, and to give you a platform to contribute valuable updates for fellow outdoor enthusiasts!
        </Typography>
        <Typography variant="body2" component="div" fontWeight="bold" marginBottom={'0.25rem'}>
          Here are some key features to get you started:
        </Typography>
        <Typography variant="body2" component="div">
          - Discover nearby ponds/lakes and explore recent updates of ice thickness. To view current updates, click on the red markers displayed on the map. Here you also have the option to create your own posts.
        </Typography>
        <Typography variant="body2" component="div" marginBottom={'2rem'}>
          - If a pond or lake doesn't have any current updates, but you would like to make one, you can search for the desired location in the top left corner, and this will give you the option to make a post.
        </Typography>
        <Typography variant="body1" component="div" fontWeight="bold" marginBottom={'1rem'}>
          Happy exploring!
        </Typography>

        <Button variant="contained" size="small" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default OnboardingModal;

