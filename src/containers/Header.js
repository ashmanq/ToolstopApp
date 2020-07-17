import React from 'react';
import HelperBar from '../components/HelperBar.js';
import LogoBar from '../components/LogoBar.js';
import NavBar from '../components/NavBar.js';

function Header() {

  return (
    <div className="header">
      <HelperBar />
      <LogoBar />
      <NavBar />
      <h1> This is the header container </h1>
    </div>
  )
}

export default Header;
