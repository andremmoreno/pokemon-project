import React from 'react';
import { Routes, Route } from "react-router-dom";
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/:name" element={ <Details /> } />
      </Routes>
    </div>
  );
}

export default App;
