import React, { useState } from 'react';

const FeatureCard = ({ feature }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: 'white',
        borderRadius: window.innerWidth < 640 ? '16px' : '20px',
        padding: window.innerWidth < 640 ? '32px 24px' : window.innerWidth < 1024 ? '36px 28px' : '40px 32px',
        boxShadow: isHovered 
          ? '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 30px rgba(59, 130, 246, 0.1)' 
          : '0 10px 25px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(226, 232, 240, 0.5)',
        transition: 'all 0.4s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: feature.gradient,
        opacity: isHovered ? 1 : 0.8,
        transition: 'opacity 0.3s ease'
      }}></div>
      
      {/* Subtle Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        background: feature.bgColor,
        borderRadius: '50%',
        opacity: isHovered ? 0.2 : 0.1,
        transition: 'opacity 0.3s ease',
        transform: 'translate(30px, -30px)'
      }}></div>
      
      {/* Icon Container */}
      <div style={{
        width: window.innerWidth < 640 ? '64px' : '72px',
        height: window.innerWidth < 640 ? '64px' : '72px',
        background: feature.bgColor,
        borderRadius: window.innerWidth < 640 ? '16px' : '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: window.innerWidth < 640 ? '1.75rem' : '2rem',
        marginBottom: window.innerWidth < 640 ? '20px' : '24px',
        position: 'relative',
        zIndex: 10,
        border: `1px solid ${feature.accentColor}20`,
        boxShadow: isHovered ? `0 12px 30px ${feature.accentColor}30, 0 0 20px ${feature.accentColor}15` : `0 4px 15px ${feature.accentColor}10`,
        transition: 'all 0.4s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}>
        {feature.icon}
      </div>
      
      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: window.innerWidth < 640 ? '1.25rem' : '1.375rem',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: window.innerWidth < 640 ? '12px' : '16px',
          lineHeight: '1.3'
        }}>
          {feature.title}
        </h3>
        
        <p style={{
          fontSize: window.innerWidth < 640 ? '0.9rem' : '1rem',
          color: '#6b7280',
          lineHeight: '1.6',
          flex: 1,
          fontWeight: '400'
        }}>
          {feature.description}
        </p>
        
        {/* Learn More Link */}
        <div 
        onClick={() => {
          alert(`📚 ${feature.title} \n\n${feature.description}\n\nMore detailed information about this feature will be available in our documentation soon!\n\nFor now, feel free to start your free trial to explore all features.`);
        }}
        style={{
          marginTop: window.innerWidth < 640 ? '20px' : '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: feature.accentColor,
          fontSize: window.innerWidth < 640 ? '0.8rem' : '0.875rem',
          fontWeight: '600',
          opacity: isHovered ? 1 : 0.7,
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          <span>Learn more</span>
          <span style={{
            transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
            fontSize: window.innerWidth < 640 ? '0.9rem' : '1rem'
          }}>→</span>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle, ${feature.accentColor}08 0%, transparent 70%)`,
        transform: 'translate(-50%, -50%)',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none'
      }}></div>
    </div>
  );
};

export default FeatureCard;