import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './components/Home';
import  About from './components/About';
import Navebar from './components/Navebar';
import Product from './components/Product';
import ContactForm from './components/ContactForm';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/ContactForm" element={<ContactForm />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
