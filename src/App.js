import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Overview from './components/Overview';
import Gallery from './components/Gallery';
import ProductDetails from './components/ProductDetails';
import NewArrivals from './components/NewArrivals';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<NewArrivals />} />
        <Route path="/overview" element={<  Overview />} />
        <Route path="/gallery" element={<  Gallery />} />
        <Route path="/product/:id" element={<ProductDetails />} />
       
  
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
