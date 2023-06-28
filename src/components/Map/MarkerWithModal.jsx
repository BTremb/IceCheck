import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import { Modal, Typography, Box, Button, Paper } from '@mui/material';
import UserUpdate from '../forms/UserUpdate';
import UserPostDisplay from '../forms/UserPostDisplay';

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonStyle = {
  marginBottom: '0.5rem',
};

const MarkerWithModal = ({ index, post, position, updateUserPost }) => {
  const center = position || post.marker;
  const [openModal, setOpenModal] = useState(false);
  const [showUserUpdate, setShowUserUpdate] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
    setShowUserUpdate(false);
  };

  const handleUserUpdateClick = () => {
    setShowUserUpdate(true);
  };

  return (
    <>
      <Marker
        key={index}
        position={center}
        onClick={() => {
          setOpenModal(true);
        }}
      />
      {/* should be able to put notification number here */}
      <Modal
        open={openModal}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Paper
          sx={{
            ...modalStyle,
            borderRadius: '14px',
            position: 'absolute',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box sx={contentStyle}>
            {showUserUpdate ? (
              <UserUpdate
                updateUserPost={updateUserPost}
                marker={center}
                revertView={() => setShowUserUpdate(false)}
              />
            ) : (
              <UserPostDisplay markerPosition={center} />
            )}

            <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
              {showUserUpdate ? (
                <Typography variant="body2">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => setShowUserUpdate(false)}
                    sx={buttonStyle}
                  >
                    See post updates
                  </Button>
                </Typography>
              ) : (
                <Typography variant="body2">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleUserUpdateClick}
                    sx={buttonStyle}
                  >
                    Make post
                  </Button>
                </Typography>
              )}
            </Box>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default MarkerWithModal;





