import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <Router>
      <div className="App" style={{ 
        minHeight: '100vh',
        backgroundColor: '#fafafa'
      }}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
