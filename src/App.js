import React from 'react';
import Header from './containers/Header.js';
import TopProducts from './containers/TopProducts.js';
import Footer from './containers/Footer.js';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <TopProducts />
      <Footer />
    </Router>
  );
}

export default App;
