import React from 'react';

const Hero = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #0e4b99 100%)',
      display: 'flex',
      alignItems: 'center',
      padding: window.innerWidth < 640 ? '0 16px' : window.innerWidth < 1024 ? '0 20px' : '0 24px',
      paddingTop: window.innerWidth < 640 ? '80px' : '80px', // Account for navbar
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements - Responsive */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: window.innerWidth < 640 ? '5%' : '10%',
        width: window.innerWidth < 640 ? '150px' : window.innerWidth < 1024 ? '200px' : '300px',
        height: window.innerWidth < 640 ? '150px' : window.innerWidth < 1024 ? '200px' : '300px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '60%',
        right: window.innerWidth < 640 ? '5%' : '15%',
        width: window.innerWidth < 640 ? '100px' : window.innerWidth < 1024 ? '150px' : '200px',
        height: window.innerWidth < 640 ? '100px' : window.innerWidth < 1024 ? '150px' : '200px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: window.innerWidth < 640 ? '5%' : '5%',
        width: window.innerWidth < 640 ? '80px' : window.innerWidth < 1024 ? '100px' : '150px',
        height: window.innerWidth < 640 ? '80px' : window.innerWidth < 1024 ? '100px' : '150px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite'
      }}></div>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: window.innerWidth < 768 ? 'flex' : 'grid',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        gridTemplateColumns: window.innerWidth >= 768 ? (window.innerWidth < 1024 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))') : 'none',
        gap: window.innerWidth < 640 ? '40px' : window.innerWidth < 1024 ? '60px' : '80px',
        alignItems: 'center',
        textAlign: window.innerWidth < 768 ? 'center' : 'left'
      }}>
        {/* Left Column - Content */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: window.innerWidth < 640 ? '24px' : '32px',
          alignItems: window.innerWidth < 768 ? 'center' : 'flex-start',
          textAlign: window.innerWidth < 768 ? 'center' : 'left'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '50px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)'
            }}></div>
            <span style={{
              fontSize: '0.875rem',
              color: '#60a5fa',
              fontWeight: '500'
            }}>✨ New: AI-Powered Task Management</span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: '900',
            color: '#ffffff',
            lineHeight: '1.1',
            margin: 0,
            textShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
          }}>
            Transform Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative'
            }}>
              Workflow
            </span>
            <br />
            with{' '}
            <span style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Flowly
            </span>
          </h1>
          
          {/* Subheading */}
          <p style={{
            fontSize: '1.375rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            margin: 0,
            maxWidth: '550px',
            fontWeight: '400'
          }}>
            Experience next-generation project management with AI insights, seamless collaboration, and powerful automation that adapts to your team's workflow.
          </p>
          
          {/* Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: window.innerWidth < 640 ? '16px' : '20px', 
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: window.innerWidth < 640 ? '24px' : '32px',
            justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start',
            flexDirection: window.innerWidth < 480 ? 'column' : 'row'
          }}>
            <button 
            onClick={() => {
              // Scroll to pricing section for trial signup
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
              color: 'white',
              padding: window.innerWidth < 640 ? '16px 28px' : '18px 36px',
              borderRadius: '50px',
              border: 'none',
              fontSize: window.innerWidth < 640 ? '1rem' : '1.125rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)',
              transition: 'all 0.4s ease',
              transform: 'scale(1)',
              position: 'relative',
              overflow: 'hidden',
              width: window.innerWidth < 480 ? '100%' : 'auto',
              maxWidth: window.innerWidth < 480 ? '280px' : 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05) translateY(-2px)';
              e.target.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)';
            }}>
              🚀 Start Free Trial
            </button>
            <button 
            onClick={() => {
              // Open demo video in new tab or show modal
              alert('🎥 Demo Video Coming Soon! \n\nThank you for your interest. Our product demo video will be available shortly. \n\nFor now, scroll down to explore our features!');
              // Alternative: window.open('https://youtube.com/watch?v=demo-video', '_blank');
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: window.innerWidth < 640 ? '16px 28px' : '18px 36px',
              borderRadius: '50px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              fontSize: window.innerWidth < 640 ? '1rem' : '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              backdropFilter: 'blur(10px)',
              width: window.innerWidth < 480 ? '100%' : 'auto',
              maxWidth: window.innerWidth < 480 ? '280px' : 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
            }}>
              📹 Watch Demo
            </button>
          </div>
          
          {/* Stats Section */}
          <div style={{ 
            marginTop: window.innerWidth < 640 ? '48px' : '64px',
            display: 'flex',
            gap: window.innerWidth < 640 ? '32px' : '48px',
            flexWrap: 'wrap',
            justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px'
              }}>10K+</div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '500'
              }}>Active Teams</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px'
              }}>99.9%</div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '500'
              }}>Uptime</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px'
              }}>1M+</div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '500'
              }}>Tasks Completed</div>
            </div>
          </div>
          
          {/* Trusted By Section */}
          <div style={{ marginTop: '48px' }}>
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.5)',
              fontWeight: '500',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              💎 TRUSTED BY LEADING COMPANIES
            </p>
            <div style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              {/* Company Logos */}
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>Microsoft</div>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>Google</div>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>Apple</div>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>Tesla</div>
            </div>
          </div>
        </div>

        {/* Right Column - Dashboard Mockup */}
        <div style={{ 
          position: 'relative', 
          maxWidth: window.innerWidth < 640 ? '100%' : window.innerWidth < 1024 ? '500px' : '600px', 
          margin: window.innerWidth < 768 ? '40px auto 0' : '0 auto',
          width: '100%'
        }}>
          {/* Main Dashboard Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '24px',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.25), 0 0 50px rgba(59, 130, 246, 0.1)',
            padding: '32px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)'
          }}>
            {/* Dashboard Header with Enhanced Gradient */}
            <div style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 25%, #8b5cf6 50%, #a855f7 75%, #ec4899 100%)',
              margin: '-32px -32px 24px -32px',
              padding: '28px 32px',
              color: 'white',
              position: 'relative'
            }}>
              {/* Animated Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.3
              }}></div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 10
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    �
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.375rem',
                      fontWeight: '800',
                      margin: 0,
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>Flowly Dashboard</h3>
                    <p style={{
                      fontSize: '0.875rem',
                      margin: 0,
                      opacity: 0.9,
                      fontWeight: '400'
                    }}>AI-Powered Workspace</p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.3), 0 0 10px rgba(16, 185, 129, 0.5)'
                  }}></div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '600', opacity: 0.9 }}>Live</span>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '20px',
              marginBottom: '36px'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '24px 16px',
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: '#1e40af',
                  marginBottom: '8px',
                  position: 'relative',
                  zIndex: 10
                }}>47</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#1e40af',
                  fontWeight: '600',
                  position: 'relative',
                  zIndex: 10
                }}>Active Tasks</div>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#60a5fa',
                  marginTop: '4px',
                  position: 'relative',
                  zIndex: 10
                }}>📈 +12% this week</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '24px 16px',
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(34, 197, 94, 0.1)',
                boxShadow: '0 8px 25px rgba(34, 197, 94, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: '#15803d',
                  marginBottom: '8px',
                  position: 'relative',
                  zIndex: 10
                }}>124</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#15803d',
                  fontWeight: '600',
                  position: 'relative',
                  zIndex: 10
                }}>Completed</div>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#4ade80',
                  marginTop: '4px',
                  position: 'relative',
                  zIndex: 10
                }}>✅ Goal achieved</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '24px 16px',
                background: 'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(245, 158, 11, 0.1)',
                boxShadow: '0 8px 25px rgba(245, 158, 11, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%)',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: '#d97706',
                  marginBottom: '8px',
                  position: 'relative',
                  zIndex: 10
                }}>12</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#d97706',
                  fontWeight: '600',
                  position: 'relative',
                  zIndex: 10
                }}>In Review</div>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#fbbf24',
                  marginTop: '4px',
                  position: 'relative',
                  zIndex: 10
                }}>⏱️ Pending approval</div>
              </div>
            </div>
            
            {/* Enhanced Progress Section */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <div>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#1f2937'
                  }}>Project Milestone</span>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    marginTop: '2px'
                  }}>Q4 Product Launch</div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    fontSize: '1.125rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>87%</span>
                  <div style={{
                    padding: '4px 8px',
                    backgroundColor: '#dcfce7',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    color: '#16a34a'
                  }}>On Track 🎯</div>
                </div>
              </div>
              <div style={{
                width: '100%',
                backgroundColor: '#f1f5f9',
                borderRadius: '50px',
                height: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                  height: '16px',
                  borderRadius: '50px',
                  width: '87%',
                  transition: 'width 0.8s ease',
                  position: 'relative',
                  boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                    animation: 'shimmer 2s infinite'
                  }}></div>
                </div>
              </div>
              <div style={{
                marginTop: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                color: '#6b7280'
              }}>
                <span>Started: Oct 1</span>
                <span>Due: Dec 15</span>
              </div>
            </div>
            
            {/* Task List Preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#f59e0b',
                    borderRadius: '50%'
                  }}></div>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>Update user interface</span>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#f59e0b',
                  backgroundColor: '#fef3c7',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontWeight: '500'
                }}>In Progress</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%'
                  }}></div>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>Database optimization</span>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#10b981',
                  backgroundColor: '#d1fae5',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontWeight: '500'
                }}>Completed</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '50%'
                  }}></div>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>API documentation</span>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#3b82f6',
                  backgroundColor: '#dbeafe',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontWeight: '500'
                }}>Pending</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Floating Elements */}
          <div style={{
            position: 'absolute',
            top: '-24px',
            right: '-24px',
            width: '64px',
            height: '64px',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            borderRadius: '50%',
            boxShadow: '0 15px 40px rgba(251, 191, 36, 0.6), 0 0 30px rgba(251, 191, 36, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            animation: 'pulse 3s ease-in-out infinite'
          }}>🎯</div>
          
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            borderRadius: '16px',
            boxShadow: '0 12px 35px rgba(139, 92, 246, 0.6), 0 0 25px rgba(236, 72, 153, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            animation: 'bounce 4s ease-in-out infinite'
          }}>⚡</div>
          
          <div style={{
            position: 'absolute',
            top: '40%',
            right: '-32px',
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 100%)',
            borderRadius: '50%',
            boxShadow: '0 8px 25px rgba(96, 165, 250, 0.6), 0 0 20px rgba(6, 182, 212, 0.4)',
            animation: 'float 5s ease-in-out infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '-28px',
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            borderRadius: '8px',
            boxShadow: '0 6px 20px rgba(16, 185, 129, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            animation: 'rotate 6s linear infinite'
          }}>💎</div>
          
          <div style={{
            position: 'absolute',
            bottom: '30%',
            right: '-20px',
            width: '28px',
            height: '28px',
            background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
            borderRadius: '50%',
            boxShadow: '0 4px 15px rgba(244, 114, 182, 0.5)',
            animation: 'float 7s ease-in-out infinite reverse'
          }}></div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(5deg); }
          75% { transform: translateY(-3px) rotate(-3deg); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
