import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import ProductsPage from './pages/ProductsPage'
// import ManagementPage from './pages/ManagementPage'
// import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Footer />
      <Route path="/" exact component={HomePage} />
      {/* <Route path="/products" component={ProductsPage} />
      <Route path="/management" component={ManagementPage} />
      <Route path="/about" component={AboutPage} /> */}
    </div>
  </Router>
  );
}

export default App;
