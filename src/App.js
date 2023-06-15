import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import MapView from './components/Map/MapView';
import ProfilePage from './components/forms/UserProfile';

const App = () => {
  return (
 <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<MapView />}/>
    <Route path="/Profile" element={<ProfilePage />}/>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
