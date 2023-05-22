import React from 'react';
import NavBar from './NavBar';
import MapView from './MapView';
import ListView from './ListView';

const Nav = () => {
  const [currentView, setCurrentView] = React.useState('map');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <NavBar onViewChange={handleViewChange} />
      {currentView === 'map' && <MapView />}
      {currentView === 'list' && <ListView />}
    </div>
  );
};

export default Nav;
