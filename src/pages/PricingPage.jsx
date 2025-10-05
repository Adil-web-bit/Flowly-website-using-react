import React from 'react';

const PricingPage = () => {
  return (
    <div style={{ 
      paddingTop: '64px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: window.innerWidth < 640 ? '40px 16px' : '0 24px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ marginBottom: window.innerWidth < 640 ? '48px' : '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '50px',
            marginBottom: '32px'
          }}>
            <span style={{
              fontSize: '0.875rem',
              background: 'linear-gradient(135deg, #1e40af 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700'
            }}>💎 Pricing Plans</span>
          </div>
          
          <h1 style={{ 
            fontSize: window.innerWidth < 640 ? '2.5rem' : '3.5rem', 
            fontWeight: '900', 
            color: '#1f2937', 
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Choose Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Perfect Plan</span>
          </h1>
          
          <p style={{ 
            fontSize: window.innerWidth < 640 ? '1.125rem' : '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: window.innerWidth < 640 ? '24px' : '32px', 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          {/* Starter Plan */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: window.innerWidth < 640 ? '32px 24px' : '48px 32px', 
            borderRadius: '20px', 
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(226, 232, 240, 0.5)',
            position: 'relative',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: window.innerWidth < 640 ? '1.5rem' : '2rem', 
                fontWeight: '700', 
                marginBottom: '8px',
                color: '#1f2937'
              }}>Starter</h3>
              <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '0.875rem' }}>Perfect for individuals</p>
              <div style={{ 
                fontSize: window.innerWidth < 640 ? '2.5rem' : '3rem', 
                fontWeight: '900', 
                color: '#3b82f6', 
                marginBottom: '8px'
              }}>
                $19
                <span style={{ fontSize: '1rem', color: '#6b7280', fontWeight: '400' }}>/month</span>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '32px' }}>Billed monthly</p>
            </div>
            
            <ul style={{ 
              textAlign: 'left', 
              listStyle: 'none', 
              padding: 0, 
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Up to 5 projects
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Basic support
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Community access
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                1GB storage
              </li>
            </ul>
            
            <button style={{ 
              width: '100%', 
              background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)', 
              color: 'white', 
              padding: '14px 0', 
              borderRadius: '12px', 
              border: 'none', 
              fontSize: '1rem', 
              fontWeight: '600', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}>
              Get Started
            </button>
          </div>

          {/* Pro Plan - Featured */}
          <div style={{ 
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 25%, #8b5cf6 75%, #ec4899 100%)', 
            color: 'white', 
            padding: window.innerWidth < 640 ? '32px 24px' : '48px 32px', 
            borderRadius: '20px', 
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)', 
            transform: window.innerWidth >= 768 ? 'scale(1.05)' : 'scale(1)',
            position: 'relative',
            border: '2px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              color: 'white',
              padding: '6px 20px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '700',
              boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
            }}>
              MOST POPULAR
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: window.innerWidth < 640 ? '1.5rem' : '2rem', 
                fontWeight: '700', 
                marginBottom: '8px'
              }}>Pro</h3>
              <p style={{ opacity: '0.9', marginBottom: '24px', fontSize: '0.875rem' }}>Best for growing teams</p>
              <div style={{ 
                fontSize: window.innerWidth < 640 ? '2.5rem' : '3rem', 
                fontWeight: '900', 
                marginBottom: '8px'
              }}>
                $49
                <span style={{ fontSize: '1rem', opacity: '0.8', fontWeight: '400' }}>/month</span>
              </div>
              <p style={{ opacity: '0.8', fontSize: '0.875rem', marginBottom: '32px' }}>Billed monthly</p>
            </div>
            
            <ul style={{ 
              textAlign: 'left', 
              listStyle: 'none', 
              padding: 0, 
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Unlimited projects
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Priority support
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Advanced features
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                50GB storage
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                API access
              </li>
            </ul>
            
            <button style={{ 
              width: '100%', 
              backgroundColor: 'white', 
              color: '#1e40af', 
              padding: '14px 0', 
              borderRadius: '12px', 
              border: 'none', 
              fontSize: '1rem', 
              fontWeight: '700', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
            }}>
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: window.innerWidth < 640 ? '32px 24px' : '48px 32px', 
            borderRadius: '20px', 
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(226, 232, 240, 0.5)',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: window.innerWidth < 640 ? '1.5rem' : '2rem', 
                fontWeight: '700', 
                marginBottom: '8px',
                color: '#1f2937'
              }}>Enterprise</h3>
              <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '0.875rem' }}>For large organizations</p>
              <div style={{ 
                fontSize: window.innerWidth < 640 ? '2.5rem' : '3rem', 
                fontWeight: '900', 
                color: '#8b5cf6', 
                marginBottom: '8px'
              }}>
                Custom
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '32px' }}>Contact for pricing</p>
            </div>
            
            <ul style={{ 
              textAlign: 'left', 
              listStyle: 'none', 
              padding: 0, 
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Everything in Pro
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Custom integrations
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Dedicated support
              </li>
              <li style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                Unlimited storage
              </li>
            </ul>
            
            <button style={{ 
              width: '100%', 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', 
              color: 'white', 
              padding: '14px 0', 
              borderRadius: '12px', 
              border: 'none', 
              fontSize: '1rem', 
              fontWeight: '600', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}>
              Contact Sales
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ 
          marginTop: window.innerWidth < 640 ? '60px' : '80px',
          maxWidth: '800px',
          margin: window.innerWidth < 640 ? '60px auto 0' : '80px auto 0'
        }}>
          <h3 style={{ 
            fontSize: window.innerWidth < 640 ? '1.75rem' : '2rem', 
            fontWeight: '800', 
            color: '#1f2937', 
            marginBottom: '32px'
          }}>Frequently Asked Questions</h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            textAlign: 'left'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '24px', 
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <h4 style={{ color: '#1f2937', fontWeight: '600', marginBottom: '8px' }}>Can I change plans anytime?</h4>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '24px', 
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <h4 style={{ color: '#1f2937', fontWeight: '600', marginBottom: '8px' }}>Is there a free trial?</h4>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>Absolutely! All plans come with a 14-day free trial. No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;