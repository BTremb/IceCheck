import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Modal, Typography, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
  const buttonClick = (page) => {
    console.log(window.location.pathname,page);
    if (page !== window.location.pathname){
      setFlipFlop(!flipFlop);
      navigate(page);
    }
  
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
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    
    </Typography>
  </Box>
</Modal>

    </nav>
  );
};

export default NavBar;








