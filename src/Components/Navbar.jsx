import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      margin: 0,
      padding: 0,
      backgroundColor: 'rgba(248, 250, 252, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      zIndex: 1000,
      width: '100vw',
      height: '64px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        margin: 0,
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(99, 102, 241, 0.25)'
          }}>
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>F</span>
          </div>
          <Link to='/' style={{
            fontSize: window.innerWidth < 768 ? '20px' : '24px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Flowly
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div style={{ 
          display: window.innerWidth >= 768 ? 'flex' : 'none', 
          gap: window.innerWidth >= 1024 ? '12px' : '8px', 
          alignItems: 'center' 
        }}>
          <Link to='/features' style={{ 
            color: '#64748b', 
            textDecoration: 'none', 
            fontSize: window.innerWidth >= 1024 ? '15px' : '14px', 
            fontWeight: '500', 
            padding: window.innerWidth >= 1024 ? '8px 20px' : '6px 12px', 
            borderRadius: '6px', 
            transition: 'color 0.2s',
            whiteSpace: 'nowrap'
          }}>Features</Link>
          <Link to='/pricing' style={{ 
            color: '#64748b', 
            textDecoration: 'none', 
            fontSize: window.innerWidth >= 1024 ? '15px' : '14px', 
            fontWeight: '500', 
            padding: window.innerWidth >= 1024 ? '8px 20px' : '6px 12px', 
            borderRadius: '6px', 
            transition: 'color 0.2s',
            whiteSpace: 'nowrap'
          }}>Pricing</Link>
          <Link to='/blog' style={{ 
            color: '#64748b', 
            textDecoration: 'none', 
            fontSize: window.innerWidth >= 1024 ? '15px' : '14px', 
            fontWeight: '500', 
            padding: window.innerWidth >= 1024 ? '8px 20px' : '6px 12px', 
            borderRadius: '6px', 
            transition: 'color 0.2s',
            whiteSpace: 'nowrap'
          }}>Blog</Link>
          <Link to='/contact' style={{ 
            color: '#64748b', 
            textDecoration: 'none', 
            fontSize: window.innerWidth >= 1024 ? '15px' : '14px', 
            fontWeight: '500', 
            padding: window.innerWidth >= 1024 ? '8px 20px' : '6px 12px', 
            borderRadius: '6px', 
            transition: 'color 0.2s',
            whiteSpace: 'nowrap'
          }}>Contact</Link>
          <Link 
          to='/pricing'
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
            color: 'white',
            padding: window.innerWidth >= 1024 ? '8px 16px' : '6px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: window.innerWidth >= 1024 ? '14px' : '13px',
            fontWeight: '600',
            cursor: 'pointer',
            marginLeft: '8px',
            boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: window.innerWidth < 768 ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '32px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            gap: '3px'
          }}
        >
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: '#64748b',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0deg)'
          }}></div>
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: '#64748b',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? '0' : '1'
          }}></div>
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: '#64748b',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0deg)'
          }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{
        position: 'absolute',
        top: '64px',
        left: 0,
        right: 0,
        backgroundColor: 'rgba(248, 250, 252, 0.98)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
        display: window.innerWidth < 768 && isMobileMenuOpen ? 'block' : 'none',
        padding: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link to='/features' 
             onClick={() => setIsMobileMenuOpen(false)}
             style={{ 
               color: '#64748b', 
               textDecoration: 'none', 
               fontSize: '16px', 
               fontWeight: '500', 
               padding: '12px 16px',
               borderRadius: '8px',
               transition: 'all 0.2s',
               backgroundColor: 'transparent'
             }}>
            Features
          </Link>
          <Link to='/pricing' 
             onClick={() => setIsMobileMenuOpen(false)}
             style={{ 
               color: '#64748b', 
               textDecoration: 'none', 
               fontSize: '16px', 
               fontWeight: '500', 
               padding: '12px 16px',
               borderRadius: '8px',
               transition: 'all 0.2s',
               backgroundColor: 'transparent'
             }}>
            Pricing
          </Link>
          <Link to='/blog' 
             onClick={() => setIsMobileMenuOpen(false)}
             style={{ 
               color: '#64748b', 
               textDecoration: 'none', 
               fontSize: '16px', 
               fontWeight: '500', 
               padding: '12px 16px',
               borderRadius: '8px',
               transition: 'all 0.2s',
               backgroundColor: 'transparent'
             }}>
            Blog
          </Link>
          <Link to='/contact' 
             onClick={() => setIsMobileMenuOpen(false)}
             style={{ 
               color: '#64748b', 
               textDecoration: 'none', 
               fontSize: '16px', 
               fontWeight: '500', 
               padding: '12px 16px',
               borderRadius: '8px',
               transition: 'all 0.2s',
               backgroundColor: 'transparent'
             }}>
            Contact
          </Link>
          <Link 
            to='/pricing'
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '8px',
              boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
              transition: 'all 0.2s',
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center'
            }}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;