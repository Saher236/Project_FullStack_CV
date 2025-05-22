import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PortfolioPage from './Pages/PortfolioPage';
import AdminPage from './Pages/AdminPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import SkillsPage from './Pages/SkillsPage';

import Navbar from './Pages/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;