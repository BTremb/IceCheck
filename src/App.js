import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Nav2';
import MapView from './components/MapView';
import ListView from './components/ListView';

const App = () => {
  return (
 <BrowserRouter>
  <NavBar>
  <Routes>
    <Route path="/" element={<MapView />}/>
    <Route path="/ListView" element={<ListView />}/>
  </Routes>
  </NavBar>
 </BrowserRouter>
  );
}

export default App;
