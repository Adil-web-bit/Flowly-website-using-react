import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      excerpt: "Learn the best practices for creating scalable and maintainable React applications in 2024.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "The Future of Cloud Computing",
      excerpt: "Explore emerging trends in cloud technology and how they're shaping the digital landscape.",
      date: "December 12, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      author: "Michael Chen"
    },
    {
      id: 3,
      title: "UI/UX Design Principles That Matter",
      excerpt: "Discover the fundamental design principles that create exceptional user experiences.",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
      author: "Emily Rodriguez"
    },
    {
      id: 4,
      title: "Optimizing Performance in Web Applications",
      excerpt: "Practical strategies to improve load times and user experience in modern web apps.",
      date: "December 8, 2024",
      readTime: "8 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      author: "David Kim"
    },
    {
      id: 5,
      title: "Security Best Practices for Developers",
      excerpt: "Essential security measures every developer should implement to protect user data.",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      author: "Alex Thompson"
    },
    {
      id: 6,
      title: "The Rise of Artificial Intelligence",
      excerpt: "How AI is transforming industries and what it means for the future of work.",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      author: "Lisa Wang"
    }
  ];

  const categories = ["All", "Development", "Technology", "Design", "Performance", "Security", "AI & ML"];

  return (
    <div style={{ 
      paddingTop: '64px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fafafa 0%, #f3f4f6 100%)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: window.innerWidth < 640 ? '40px 16px' : '60px 24px'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: window.innerWidth < 640 ? '48px' : '64px' 
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '50px',
            marginBottom: '32px'
          }}>
            <span style={{
              fontSize: '0.875rem',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700'
            }}>📚 Our Blog</span>
          </div>
          
          <h1 style={{ 
            fontSize: window.innerWidth < 640 ? '2.5rem' : '3.5rem', 
            fontWeight: '900', 
            color: '#1f2937', 
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Latest{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Insights</span>
          </h1>
          
          <p style={{ 
            fontSize: window.innerWidth < 640 ? '1.125rem' : '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Stay updated with the latest trends, tutorials, and insights from our team of experts.
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px', 
          justifyContent: 'center', 
          marginBottom: window.innerWidth < 640 ? '40px' : '56px' 
        }}>
          {categories.map((category, index) => (
            <button
              key={category}
              style={{
                padding: '8px 20px',
                borderRadius: '25px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: index === 0 
                  ? 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' 
                  : 'white',
                color: index === 0 ? 'white' : '#6b7280',
                boxShadow: index === 0 
                  ? '0 4px 15px rgba(139, 92, 246, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div style={{ 
          marginBottom: window.innerWidth < 640 ? '48px' : '64px' 
        }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 25%, #8b5cf6 75%, #ec4899 100%)', 
            borderRadius: '24px', 
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
          }}>
            <div style={{ 
              padding: window.innerWidth < 640 ? '40px 24px' : '60px 48px',
              color: 'white',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ 
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '700',
                marginBottom: '24px',
                backdropFilter: 'blur(10px)'
              }}>
                FEATURED POST
              </div>
              
              <h2 style={{ 
                fontSize: window.innerWidth < 640 ? '1.75rem' : '2.5rem', 
                fontWeight: '900', 
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                {blogPosts[0].title}
              </h2>
              
              <p style={{ 
                fontSize: window.innerWidth < 640 ? '1rem' : '1.125rem', 
                opacity: '0.9', 
                marginBottom: '32px',
                lineHeight: '1.6',
                maxWidth: '600px'
              }}>
                {blogPosts[0].excerpt}
              </p>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '24px',
                marginBottom: '32px',
                flexWrap: 'wrap'
              }}>
                <span style={{ fontSize: '0.875rem', opacity: '0.8' }}>
                  By {blogPosts[0].author}
                </span>
                <span style={{ fontSize: '0.875rem', opacity: '0.8' }}>
                  {blogPosts[0].date}
                </span>
                <span style={{ fontSize: '0.875rem', opacity: '0.8' }}>
                  {blogPosts[0].readTime}
                </span>
              </div>
              
              <button style={{ 
                background: 'white', 
                color: '#1e40af', 
                padding: '12px 32px', 
                borderRadius: '12px', 
                border: 'none', 
                fontSize: '1rem', 
                fontWeight: '600', 
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
              }}>
                Read Full Article
              </button>
            </div>
            
            {/* Floating elements */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '40px',
              right: '100px',
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)'
            }} />
          </div>
        </div>

        {/* Blog Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 640 ? '1fr' : window.innerWidth < 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
          gap: window.innerWidth < 640 ? '24px' : '32px' 
        }}>
          {blogPosts.slice(1).map((post) => (
            <article 
              key={post.id}
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '20px', 
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(226, 232, 240, 0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                height: '200px', 
                background: `linear-gradient(135deg, ${
                  post.category === 'Technology' ? '#3b82f6, #1e40af' :
                  post.category === 'Design' ? '#ec4899, #be185d' :
                  post.category === 'Performance' ? '#10b981, #059669' :
                  post.category === 'Security' ? '#f59e0b, #d97706' :
                  post.category === 'AI & ML' ? '#8b5cf6, #7c3aed' :
                  '#6b7280, #4b5563'
                })`,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#1f2937'
                }}>
                  {post.category}
                </div>
                <div style={{
                  fontSize: '3rem',
                  opacity: 0.3
                }}>
                  {post.category === 'Technology' ? '🚀' :
                   post.category === 'Design' ? '🎨' :
                   post.category === 'Performance' ? '⚡' :
                   post.category === 'Security' ? '🔒' :
                   post.category === 'AI & ML' ? '🤖' : '📝'}
                </div>
              </div>
              
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  color: '#1f2937', 
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  {post.title}
                </h3>
                
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.95rem', 
                  lineHeight: '1.6', 
                  marginBottom: '20px'
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid #f3f4f6'
                }}>
                  <div>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: '#1f2937', 
                      fontWeight: '600', 
                      marginBottom: '4px'
                    }}>
                      {post.author}
                    </p>
                    <p style={{ 
                      fontSize: '0.75rem', 
                      color: '#6b7280'
                    }}>
                      {post.date} • {post.readTime}
                    </p>
                  </div>
                  
                  <button style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                    color: 'white',
                    border: 'none',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease'
                  }}>
                    →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: window.innerWidth < 640 ? '48px' : '64px' 
        }}>
          <button style={{ 
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
            color: 'white', 
            padding: '16px 48px', 
            borderRadius: '12px', 
            border: 'none', 
            fontSize: '1rem', 
            fontWeight: '600', 
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(31, 41, 55, 0.3)'
          }}>
            Load More Posts
          </button>
        </div>

        {/* Newsletter Signup */}
        <div style={{ 
          marginTop: window.innerWidth < 640 ? '64px' : '80px',
          background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
          borderRadius: '24px',
          padding: window.innerWidth < 640 ? '40px 24px' : '60px 48px',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: window.innerWidth < 640 ? '1.75rem' : '2.25rem', 
            fontWeight: '800', 
            color: '#1f2937', 
            marginBottom: '16px'
          }}>
            Never Miss an Update
          </h3>
          
          <p style={{ 
            color: '#6b7280', 
            fontSize: '1.125rem', 
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px'
          }}>
            Subscribe to our newsletter and get the latest insights delivered to your inbox.
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth < 640 ? 'column' : 'row',
            gap: '16px', 
            maxWidth: '400px', 
            margin: '0 auto'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: 1, 
                padding: '14px 20px', 
                borderRadius: '12px', 
                border: '2px solid #e5e7eb', 
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            <button style={{ 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', 
              color: 'white', 
              padding: '14px 32px', 
              borderRadius: '12px', 
              border: 'none', 
              fontSize: '1rem', 
              fontWeight: '600', 
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;