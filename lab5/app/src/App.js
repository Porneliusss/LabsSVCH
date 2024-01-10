import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ManagementPage from './pages/ManagementPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
