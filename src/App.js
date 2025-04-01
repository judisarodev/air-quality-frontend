import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {MainView} from './views/MainView.js'
import {CalculatorView} from './views/CalculatorView.js'
import { Header } from './components/Herader.js';
import { Footer } from './components/Footer.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/about" element={<CalculatorView />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
