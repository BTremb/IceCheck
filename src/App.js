import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import MapView from './components/Map/MapView';
import ListView from './components/ListView';

const App = () => {
  return (
 <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<MapView />}/>
    <Route path="/ListView" element={<ListView />}/>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
