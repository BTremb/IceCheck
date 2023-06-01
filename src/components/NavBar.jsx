import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Typography, Box, Link } from '@mui/material';
import Login from './forms/Login';
import SignUp from './forms/SignUp';

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

const NavBar = () => {
  const navBarStyles = {
    backgroundColor: '#f2f2f2',
    padding: '0.8rem',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navigate = useNavigate();
  const [flipFlop, setFlipFlop] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  
  const buttonClick = (page) => {
    if (page !== window.location.pathname){
      setFlipFlop(!flipFlop);
      navigate(page);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setShowSignUp(false); // Reset to login when the modal is closed
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const buttonStylesMapView = {
    backgroundColor: flipFlop ? '#D3D3D3' : '#4f9cba' ,
    color: '#000000',
  };

  const buttonStylesListView = {
    backgroundColor: flipFlop ? '#4f9cba' : '#D3D3D3' ,
    color: '#000000',
  };

  const buttonStylesLogin = {
    backgroundColor: '#D3D3D3',
    color: '#000000',
    marginRight: '0.8rem',
  }

  return (
    <nav style={navBarStyles}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '1.5rem'}}>
      <Button
        style={buttonStylesMapView}
        variant="contained"
        onClick={() => buttonClick('/')}
      >
        MapView
      </Button>
      <Button
        style={buttonStylesListView}
        variant="contained"
        onClick={() => buttonClick('/ListView')}
      >
        ListView
      </Button>
      </div>
      <Button
        style={buttonStylesLogin}
        variant="contained"
        onClick={() => setOpenModal(true)}
      >
        Login
      </Button>

  <Modal
  open={openModal}
  onClose={handleClose}>

  <Box sx={modalStyle}>
    <Box sx={contentStyle}>
      {showSignUp? (
        <SignUp />
      ) : (
       <Login />
      )}
       <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
              {showSignUp ? (
                <Typography variant="body2">
                  Already have an account?{' '}
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => setShowSignUp(false)}
                  >
                    Login
                  </Link>
                </Typography>
              ) : (
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Link
                    component="button"
                    variant="body2"
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                    </Link>
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </nav>
  );
};

export default NavBar;