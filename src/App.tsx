import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/:name" element={ <h1>POKEMON DETAIL</h1> } />
      </Routes>
    </div>
  );
}

export default App;