import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navBarStyles = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav style={navBarStyles}>
      <button style={buttonStyles} onClick={() => handleNavigation('/')}>
        MapView
      </button>
      <button style={buttonStyles} onClick={() => handleNavigation('/ListView')}>
        ListView
      </button>
    </nav>
  );
};

export default NavBar;



