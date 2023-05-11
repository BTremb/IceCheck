import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HookForm from './components/HookForm';

const App = () => {
  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<HookForm />}/>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
