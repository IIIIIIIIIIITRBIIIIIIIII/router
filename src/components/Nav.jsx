import React from 'react'
import {Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
const Nav = () => {
  return (
    <>
    <nav>
<ol>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/About">About</Link>
</li>
</ol>
    </nav>


</>
  )
}

export default Nav