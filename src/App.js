import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HookForm from './components/HookForm';

const App = () => {
  return (
 <browserRouter>
  <Routes>
    <Route path="/" element={<HookForm />}/>
  </Routes>
 </browserRouter>
  );
}

export default App;
