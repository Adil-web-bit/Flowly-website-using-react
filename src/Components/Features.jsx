import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '🚀',
      title: 'Lightning Fast Setup',
      description: 'Get your team up and running in under 5 minutes. No complex configurations or lengthy onboarding processes required.',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      bgColor: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      accentColor: '#3b82f6'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Smart Task Management',
      description: 'AI-powered task prioritization and intelligent deadline suggestions keep your projects on track automatically.',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      bgColor: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
      accentColor: '#8b5cf6'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards and insights help you make data-driven decisions and track team performance.',
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      bgColor: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
      accentColor: '#10b981'
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Seamless Collaboration',
      description: 'Built-in chat, file sharing, and real-time editing ensure your team stays connected and productive.',
      gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
      bgColor: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
      accentColor: '#ef4444'
    },
    {
      id: 5,
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SSO integration, and compliance with GDPR, SOC 2, and ISO 27001 standards.',
      gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
      bgColor: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
      accentColor: '#6366f1'
    },
    {
      id: 6,
      icon: '⚡',
      title: 'Powerful Integrations',
      description: 'Connect with 100+ tools including Slack, GitHub, Figma, and Google Workspace for seamless workflow.',
      gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
      bgColor: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
      accentColor: '#f59e0b'
    }
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #cbd5e1 75%, #94a3b8 100%)',
      padding: window.innerWidth < 640 ? '80px 16px' : window.innerWidth < 1024 ? '100px 20px' : '120px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(30, 64, 175, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite reverse'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '20%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 12s ease-in-out infinite'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        width: '100%'
      }}>
        {/* Header Section */}
        <div style={{ marginBottom: window.innerWidth < 640 ? '60px' : '80px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '50px',
            marginBottom: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{
              fontSize: '0.875rem',
              background: 'linear-gradient(135deg, #1e40af 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700'
            }}>✨ Powerful Features</span>
          </div>
          
          {/* Main Title */}
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: '900',
            color: '#1f2937',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Why teams{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>love Flowly</span>
          </h2>
          
          {/* Subtitle */}
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '400'
          }}>
            Everything you need to organize, track, and deliver projects on time with powerful automation and insights.
          </p>
        </div>
        
        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 640 ? '1fr' : 
                              window.innerWidth < 1024 ? 'repeat(auto-fit, minmax(300px, 1fr))' : 
                              'repeat(auto-fit, minmax(350px, 1fr))',
          gap: window.innerWidth < 640 ? '24px' : '32px',
          alignItems: 'stretch'
        }}>
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div style={{
          marginTop: window.innerWidth < 640 ? '60px' : '80px',
          padding: window.innerWidth < 640 ? '32px 24px' : window.innerWidth < 1024 ? '40px 32px' : '48px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
          borderRadius: window.innerWidth < 640 ? '20px' : '24px',
          border: '1px solid rgba(139, 92, 246, 0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px rgba(30, 64, 175, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '16px'
          }}>Ready to transform your workflow?</h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            marginBottom: '32px'
          }}>Join 10,000+ teams already using Flowly to deliver projects faster.</p>
          <button style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 25%, #8b5cf6 75%, #ec4899 100%)',
            color: 'white',
            padding: '18px 36px',
            borderRadius: '50px',
            border: 'none',
            fontSize: '1.125rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 20px 40px rgba(30, 64, 175, 0.4), 0 0 30px rgba(139, 92, 246, 0.2)',
            transition: 'all 0.4s ease',
            transform: 'scale(1)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05) translateY(-3px)';
            e.target.style.boxShadow = '0 30px 60px rgba(30, 64, 175, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 20px 40px rgba(30, 64, 175, 0.4), 0 0 30px rgba(139, 92, 246, 0.2)';
          }}>
            🚀 Get Started Free →
          </button>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default Features;
