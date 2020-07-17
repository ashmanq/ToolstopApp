import React from 'react';
import Header from './containers/Header.js';
import TopProducts from './containers/TopProducts.js';
import Footer from './containers/Footer.js';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TopProducts />
      <Footer />
    </div>
  );
}

export default App;
