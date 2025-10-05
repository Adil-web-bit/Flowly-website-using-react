import React from 'react';

const Testimonials = () => {
  const companies = [
    { name: 'NovaTech', style: { color: '#1e40af', fontWeight: '800' } },
    { name: 'BrightWorks', style: { color: '#7c2d12', fontWeight: '800' } },
    { name: 'CodeVerse', style: { color: '#065f46', fontWeight: '800' } },
    { name: 'TaskPro', style: { color: '#7c3aed', fontWeight: '800' } }
  ];

  const testimonials = [
    {
      quote: "Flowly transformed how our team collaborates. We've increased productivity by 40% since switching.",
      name: "Sarah Chen",
      company: "NovaTech",
      role: "Head of Operations"
    },
    {
      quote: "The intuitive interface and powerful features make project management effortless for our agency.",
      name: "Marcus Rodriguez", 
      company: "BrightWorks",
      role: "Creative Director"
    },
    {
      quote: "Finally, a tool that scales with our growing team. Flowly adapts to our changing needs perfectly.",
      name: "Emily Watson",
      company: "CodeVerse", 
      role: "Engineering Manager"
    }
  ];

  return (
    <section style={{ 
      backgroundColor: '#f9fafb',
      padding: window.innerWidth < 640 ? '60px 16px' : '80px 24px',
      borderTop: '1px solid #f3f4f6'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Header */}
        <div style={{ marginBottom: window.innerWidth < 640 ? '48px' : '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '50px',
            marginBottom: '24px'
          }}>
            <span style={{
              fontSize: '0.75rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>⭐ Trusted Worldwide</span>
          </div>
          
          <h2 style={{ 
            fontSize: window.innerWidth < 640 ? '2rem' : window.innerWidth < 1024 ? '2.5rem' : '3rem',
            fontWeight: '900', 
            color: '#111827', 
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Trusted by{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Teams Worldwide</span>
          </h2>
          
          <p style={{ 
            fontSize: window.innerWidth < 640 ? '1rem' : '1.125rem',
            color: '#6b7280', 
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Flowly powers productivity for startups, agencies, and global companies across every industry.
          </p>
        </div>

        {/* Company Logos */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 640 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: window.innerWidth < 640 ? '24px' : '32px',
          marginBottom: window.innerWidth < 640 ? '56px' : '72px',
          maxWidth: '800px',
          margin: window.innerWidth < 640 ? '0 auto 56px' : '0 auto 72px'
        }}>
          {companies.map((company, index) => (
            <div 
              key={company.name}
              style={{
                padding: window.innerWidth < 640 ? '20px 16px' : '24px 20px',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(226, 232, 240, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <span style={{
                fontSize: window.innerWidth < 640 ? '1.125rem' : '1.25rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                ...company.style
              }}>
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
          gap: window.innerWidth < 640 ? '24px' : '32px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                padding: window.innerWidth < 640 ? '32px 24px' : '40px 32px',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(226, 232, 240, 0.6)',
                position: 'relative',
                textAlign: 'left',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.1
              }}>
                <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>"</span>
              </div>

              <blockquote style={{
                fontSize: window.innerWidth < 640 ? '0.95rem' : '1rem',
                color: '#374151',
                lineHeight: '1.7',
                marginBottom: '24px',
                fontStyle: 'normal',
                position: 'relative'
              }}>
                "{testimonial.quote}"
              </blockquote>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid #f3f4f6'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${
                    index === 0 ? '#3b82f6, #1e40af' :
                    index === 1 ? '#10b981, #059669' :
                    '#8b5cf6, #7c3aed'
                  })`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '2px'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          marginTop: window.innerWidth < 640 ? '64px' : '80px',
          padding: window.innerWidth < 640 ? '40px 24px' : '48px 32px',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          borderRadius: '24px',
          color: 'white'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 640 ? '1fr' : window.innerWidth < 1024 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: window.innerWidth < 640 ? '32px' : '40px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: window.innerWidth < 640 ? '2rem' : '2.5rem',
                fontWeight: '900',
                marginBottom: '8px',
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                50K+
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Active Users</div>
            </div>
            <div>
              <div style={{
                fontSize: window.innerWidth < 640 ? '2rem' : '2.5rem',
                fontWeight: '900',
                marginBottom: '8px',
                background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                500+
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Companies</div>
            </div>
            <div>
              <div style={{
                fontSize: window.innerWidth < 640 ? '2rem' : '2.5rem',
                fontWeight: '900',
                marginBottom: '8px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                99.9%
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Uptime</div>
            </div>
            <div>
              <div style={{
                fontSize: window.innerWidth < 640 ? '2rem' : '2.5rem',
                fontWeight: '900',
                marginBottom: '8px',
                background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                40%
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Productivity Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;