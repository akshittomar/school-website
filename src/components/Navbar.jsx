import logo from '../assets/Copilot_20250605_130755.png'
import { useState, useEffect } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'activities', 'about']
      
      for (let sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If section is in the upper half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (sectionId) => activeSection === sectionId

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F8FF 100%)' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" style={{ cursor: 'pointer', gap: '0.5rem' }} onClick={() => scrollToSection('home')}>
          <img 
            src={logo} 
            alt="Tender Buds Logo" 
            style={{ 
              height: '40px', 
              width: '40px', 
              maxWidth: '100%', 
              objectFit: 'cover', 
              display: 'block',
              borderRadius: '50%',
              border: '3px solid #E84C3D',
              boxShadow: '0 2px 8px rgba(232, 76, 61, 0.3)',
              transition: 'all 0.3s ease',
              flexShrink: 0
            }}
          />
          <span className="fw-bold" style={{ 
            background: 'linear-gradient(135deg, #E84C3D 0%, #003B7A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
            lineHeight: '1.1',
            wordBreak: 'break-word'
          }}>
            Tender Buds Kindergarten School
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-lg me-2" 
                style={{ 
                  border: 'none',
                  background: isActive('home') 
                    ? 'linear-gradient(135deg, #E84C3D 0%, #FF6B35 100%)' 
                    : 'transparent',
                  color: isActive('home') ? 'white' : '#333',
                  fontWeight: isActive('home') ? 'bold' : '600',
                  fontSize: '1em',
                  boxShadow: isActive('home') ? '0 4px 12px rgba(232, 76, 61, 0.3)' : 'none',
                  padding: isActive('home') ? '0.5rem 1rem' : '0.5rem 1rem',
                  transition: 'all 0.3s ease',
                  borderRadius: '25px'
                }} 
                onClick={() => scrollToSection('home')}
              >
                <i className="fas fa-home me-1"></i>Home
              </button>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                style={{ 
                  cursor: 'pointer', 
                  fontWeight: isActive('activities') ? '700' : '600',
                  color: isActive('activities') ? '#E84C3D' : '#333',
                  fontSize: '0.95em',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  background: isActive('activities') ? 'rgba(232, 76, 61, 0.1)' : 'transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }} 
                onClick={() => scrollToSection('activities')}
              >
                <i className="fas fa-play-circle me-1"></i>Activities
                {isActive('activities') && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: '3px',
                    background: '#E84C3D',
                    borderRadius: '2px'
                  }}></span>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                style={{ 
                  cursor: 'pointer', 
                  fontWeight: isActive('about') ? '700' : '600',
                  color: isActive('about') ? '#E84C3D' : '#333',
                  fontSize: '0.95em',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  background: isActive('about') ? 'rgba(232, 76, 61, 0.1)' : 'transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }} 
                onClick={() => scrollToSection('about')}
              >
                <i className="fas fa-info-circle me-1"></i>About
                {isActive('about') && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: '3px',
                    background: '#E84C3D',
                    borderRadius: '2px'
                  }}></span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
