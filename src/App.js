import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapView from './components/MapView';
import ReactHookFormExample from './components/forms/ReactHookFormExample';

const App = () => {
  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<MapView />}/>
    <Route path="/form" element={<ReactHookFormExample />}/>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
