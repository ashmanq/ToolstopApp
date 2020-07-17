import React from 'react';
import HelperBar from '../components/HelperBar.js';
import LogoBar from '../components/LogoBar.js';
import NavBar from '../components/NavBar.js';
import InfoBar from '../components/InfoBar.js';

function Header() {

  return (
    <div className="header">
      <HelperBar />
      <LogoBar />
      <NavBar />
      <InfoBar />
    </div>
  )
}

export default Header;
