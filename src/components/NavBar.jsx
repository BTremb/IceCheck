import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const NavBar = () => {
  const navBarStyles = {
    backgroundColor: '#f2f2f2',
    padding: '0.8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  };

  const navigate = useNavigate();
  const [flipFlop, setFlipFlop] = useState(false);

  const buttonClick = (page) => {
    setFlipFlop(!flipFlop);
    navigate(page);
  };

  const buttonStylesMapView = {
    backgroundColor: flipFlop ? '#ff6f00' : '#4f9cba',
    color: '#ffffff',
  };

  const buttonStylesListView = {
    backgroundColor: flipFlop ? '#4f9cba' : '#ff6f00',
    color: '#ffffff',
  };

  return (
    <nav style={navBarStyles}>
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
    </nav>
  );
};

export default NavBar;








