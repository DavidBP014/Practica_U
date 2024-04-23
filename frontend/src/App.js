import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import HomePage from './components/home/HomePage.js';
import NosotrosPage from './components/nosotros/nosotros.js';
import BlogPage from './components/blog/BlogPage.js';
import ContactPage from './components/contact/ContactPage.js';
import LoginPage from './components/auth/LoginPage.js';
import LocationPage from './components/location/locationPage.js';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/location" element={<LocationPage />} />
        {/* Asegúrate de incluir todas las rutas que necesitas aquí */}
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
