import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MapView from './components/Map/MapView';
import ProfilePage from './components/forms/UserProfile';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path="/" element={<MapView />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

