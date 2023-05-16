import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navBarStyles = {
    backgroundColor: '#f2f2f2',
    padding: '0.6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  };

  const buttonStyles = {
    backgroundColor: '#4f9cba',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const navigate = useNavigate();

  return (
    <nav style={navBarStyles}>
      <button style={buttonStyles} onClick={() => navigate('/')}>
        MapView
      </button>
      <button style={buttonStyles} onClick={() => navigate('/ListView')}>
        ListView
      </button>
    </nav>
  );
};


export default NavBar; 




