import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';

const App = () => {
  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Nav />}/>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
