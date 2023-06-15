import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
  };

  
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    setOpenModal(false);
  }, [location.pathname]);

  const handleClose = () => {
    setOpenModal(false);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const buttonStylesLogin = {
    backgroundColor: '#D3D3D3',
    color: '#000000',
    marginLeft: 'auto',
    marginRight: '1rem',
  };

  const logoStyles = {
    flex: 1,
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  };
  

  return (
    <nav style={navBarStyles}>
      <div style={logoStyles}>IceCheck</div>
      <Button
        style={buttonStylesLogin}
        variant="contained"
        onClick={() => setOpenModal(true)}
      >
        Login
      </Button>

      <Modal open={openModal} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box sx={contentStyle}>
            {showSignUp ? <SignUp /> : <Login />}
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
