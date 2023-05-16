
import React from 'react';

const navbarStyles = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
};

const navListStyles = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '0',
    gap: '5rem',
  };
  

const navButtonStyles = {
  backgroundColor: '#4f9cba',
  color: '#ffffff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const NavBar = ({ onViewChange }) => {
  const handleViewChange = (view) => {
    if (typeof onViewChange === 'function') {
      onViewChange(view);
    }
  };

  return (
    <nav style={navbarStyles}>
      <ul style={navListStyles}>
        <li>
          <button style={navButtonStyles} onClick={() => handleViewChange('map')}>
            MapView
          </button>
        </li>
        <li>
          <button style={navButtonStyles} onClick={() => handleViewChange('list')}>
            ListView
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
