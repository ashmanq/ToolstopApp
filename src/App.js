import React from 'react';
import Header from './containers/Header.js';
import LandingPage from './containers/LandingPage.js';
import Footer from './containers/Footer.js';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
