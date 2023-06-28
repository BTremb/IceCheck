import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, Box, Link } from '@mui/material';
import Login from './forms/Login';
import SignUp from './forms/SignUp';
import OnboardingModal from './OnboardingModal';

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
  borderRadius: '14px'
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
    padding: '0.7rem',
  };

  const [openModal, setOpenModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  const handleClose = () => {
    setOpenModal(false);
    setShowSignUp(false);
    setShowInfo(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleInfoClick = () => {
    setShowInfo(true);
  };

  const handleLoginLogoutClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
    } else {
      setOpenModal(true);
      setShowSignUp(false);
    }
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

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    handleClose();
  };

  return (
    <nav style={navBarStyles}>
      <div style={logoStyles}>IceCheck</div>
      <Button style={buttonStylesLogin} variant="contained" onClick={handleInfoClick}>
        Info
      </Button>
      <Button style={buttonStylesLogin} variant="contained" onClick={handleLoginLogoutClick}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>

      <Modal open={openModal || showInfo} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box sx={contentStyle}>
            {isLoggedIn ? (
              <>
                <Typography variant="body2">You are already logged in.</Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem('isLoggedIn');
                  }}
                  style={{ marginTop: '1rem' }}
                >
                  Logout
                </Button>
              </>
            ) : showSignUp ? (
              <SignUp />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )}
            <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
              {showSignUp ? (
                <Typography variant="body2">
                  Already have an account?{' '}
                  <Link component="button" variant="body2" onClick={() => setShowSignUp(false)}>
                    Login
                  </Link>
                </Typography>
              ) : (
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Link component="button" variant="body2" onClick={handleSignUpClick}>
                    Sign Up
                  </Link>
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>

      {showInfo && <OnboardingModal onClose={handleClose} />}
    </nav>
  );
};

export default NavBar;












