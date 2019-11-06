import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
var d3 = require('d3');


function Nav(){
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <img src={logo} className="App-logo2" alt="logo" />
      <ul className="nav-links">
        <Link style={navStyle} to='/about'>
          <li>Introduction</li>
        </Link>
        <Link style={navStyle} to='/code'>
          <li>Code it out!</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
