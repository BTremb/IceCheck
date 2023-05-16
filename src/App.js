import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapView from './components/MapView';

const App = () => {
  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<MapView />}/>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
