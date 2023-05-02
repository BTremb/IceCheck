import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from './components/HelloWorld';
import MaterialUI from './components/MaterialUI';
import Stateful from './components/Stateful';
import Conditional from './components/Conditional';

const App = () => {
  return (
    /**
     * BrowserRouter is a component that wraps the Routes component.
     */
    <BrowserRouter>
      <Routes>
          {/* 
            The Route component is used to define a route.
            The path prop is used to define the path of the route.
            The element prop is used to define the component that will be rendered when the route is matched.
          */}
          <Route path="/" element={<HelloWorld />}/>
          <Route path="/material-ui" element={<MaterialUI />}/>
          <Route path="/deep-state" element={<Stateful />}/>
          <Route path='/flipflop' element={<Conditional />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
