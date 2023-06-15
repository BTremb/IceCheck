import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import { Modal, Typography, Box, Link } from '@mui/material';
import UserUpdate from '../forms/UserUpdate';
import UserPostDisplay from '../forms/UserPostDisplay';


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

const MarkerWithModal = ({index, post}) => {

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
          position={post.marker}
          onClick={() => {
            setOpenModal(true);
          }}
        />
        {/* should be able to put notification number here */}
          <Modal open={openModal} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Box sx={contentStyle}>
              {showUserUpdate ? (
                <UserUpdate
                marker={post.marker} />
              ) : (
                <UserPostDisplay markerPosition={post.marker} />
              )}

              <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
                {showUserUpdate ? (
                  <Typography variant="body2">
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => setShowUserUpdate(false)}
                    >
                      See post updates
                    </Link>
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleUserUpdateClick}
                    >
                      Make post
                    </Link>
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Modal>
        </>

    )
}

export default MarkerWithModal;