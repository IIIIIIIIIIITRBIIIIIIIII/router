import './App.css';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Moviedes from './components/Moviedes';


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Moviedes" element={<Moviedes />} />
      </Routes>


    </>
  );
}


export default App;
