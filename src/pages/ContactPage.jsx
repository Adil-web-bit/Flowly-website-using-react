import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ 
      paddingTop: '64px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
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
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '50px',
            marginBottom: '32px'
          }}>
            <span style={{
              fontSize: '0.875rem',
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700'
            }}>💬 Get In Touch</span>
          </div>
          
          <h1 style={{ 
            fontSize: window.innerWidth < 640 ? '2.5rem' : '3.5rem', 
            fontWeight: '900', 
            color: '#1f2937', 
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Let's Start{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Building Together</span>
          </h1>
          
          <p style={{ 
            fontSize: window.innerWidth < 640 ? '1.125rem' : '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Have questions? We're here to help. Reach out and let's discuss how we can help you succeed.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', 
          gap: window.innerWidth < 640 ? '32px' : '48px', 
          alignItems: 'start',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Contact Form */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: window.innerWidth < 640 ? '32px 24px' : '48px 40px', 
            borderRadius: '24px', 
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(226, 232, 240, 0.5)'
          }}>
            <h3 style={{ 
              fontSize: window.innerWidth < 640 ? '1.5rem' : '2rem', 
              fontWeight: '800', 
              color: '#1f2937', 
              marginBottom: '8px',
              textAlign: 'left'
            }}>Send us a message</h3>
            <p style={{ 
              color: '#6b7280', 
              marginBottom: '32px', 
              textAlign: 'left',
              fontSize: '0.95rem'
            }}>We'll get back to you within 24 hours.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: window.innerWidth < 640 ? 'column' : 'row', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ 
                    display: 'block', 
                    color: '#374151', 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    marginBottom: '8px',
                    textAlign: 'left'
                  }}>First Name</label>
                  <input 
                    type="text" 
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: '12px', 
                      border: '2px solid #e5e7eb', 
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    placeholder="John"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ 
                    display: 'block', 
                    color: '#374151', 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    marginBottom: '8px',
                    textAlign: 'left'
                  }}>Last Name</label>
                  <input 
                    type="text" 
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: '12px', 
                      border: '2px solid #e5e7eb', 
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#374151', 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  marginBottom: '8px',
                  textAlign: 'left'
                }}>Email Address</label>
                <input 
                  type="email" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '12px', 
                    border: '2px solid #e5e7eb', 
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#374151', 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  marginBottom: '8px',
                  textAlign: 'left'
                }}>Subject</label>
                <input 
                  type="text" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '12px', 
                    border: '2px solid #e5e7eb', 
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#374151', 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  marginBottom: '8px',
                  textAlign: 'left'
                }}>Message</label>
                <textarea 
                  rows="4" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '12px', 
                    border: '2px solid #e5e7eb', 
                    fontSize: '1rem',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Tell us more about your project or questions..."
                />
              </div>
              
              <button 
                type="submit" 
                style={{ 
                  width: '100%', 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)', 
                  color: 'white', 
                  padding: '16px 0', 
                  borderRadius: '12px', 
                  border: 'none', 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px'
          }}>
            {/* Contact Cards */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '32px 24px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              textAlign: 'left'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📧</span>
              </div>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: '#1f2937', 
                marginBottom: '8px'
              }}>Email Us</h4>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '12px',
                fontSize: '0.95rem'
              }}>Send us an email anytime</p>
              <a 
                href="mailto:hello@flowly.com" 
                style={{ 
                  color: '#3b82f6', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
              >
                hello@flowly.com
              </a>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '32px 24px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              textAlign: 'left'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📞</span>
              </div>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: '#1f2937', 
                marginBottom: '8px'
              }}>Call Us</h4>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '12px',
                fontSize: '0.95rem'
              }}>Mon-Fri from 8am to 5pm</p>
              <a 
                href="tel:+1234567890" 
                style={{ 
                  color: '#10b981', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
              >
                +1 (234) 567-890
              </a>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '32px 24px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              textAlign: 'left'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>💬</span>
              </div>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: '#1f2937', 
                marginBottom: '8px'
              }}>Live Chat</h4>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '12px',
                fontSize: '0.95rem'
              }}>Available 24/7 for support</p>
              <button 
                style={{ 
                  background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)', 
                  color: 'white', 
                  border: 'none', 
                  padding: '8px 16px', 
                  borderRadius: '8px', 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  cursor: 'pointer'
                }}
              >
                Start Chat
              </button>
            </div>

            {/* Office Location */}
            <div style={{ 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', 
              color: 'white', 
              padding: '32px 24px', 
              borderRadius: '20px', 
              textAlign: 'left'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
              </div>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                marginBottom: '8px'
              }}>Visit Our Office</h4>
              <p style={{ 
                opacity: '0.9', 
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>
                123 Innovation Street<br />
                Tech District, San Francisco<br />
                CA 94107, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;