import img1 from '../assets/0b797e95-f824-43a3-b78f-86e849593f93.jpg'
import img2 from '../assets/IMG_1929.JPG'
import img3 from '../assets/IMG_8946.JPG'
import img4 from '../assets/IMG_20240209_102751.jpg'

function HomePage() {
  const message = 'Welcome to Tender Buds Kindergarten School - where every child grows with joy, creativity, and care.'

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-white d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container py-5">
        {/* School Header */}
        <div className="text-center mb-5" style={{ marginTop: 'clamp(0rem, 2vw, 1rem)' }}>
          <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.4rem, 5vw, 3.5rem)', letterSpacing: '2px' }}>
            <span style={{ color: '#E84C3D' }}>Tender Buds</span>{' '}
            <span style={{ color: '#003B7A' }}>Kindergarten School</span>
          </h1>
          <p className="lead" style={{ color: '#666', fontSize: '1.2em', fontWeight: '500' }}>A bright and caring space for early learners to explore, play, and succeed.</p>
          <div className="badge badge-custom fs-6 mb-3">
            <i className="fas fa-bell me-2"></i>Admissions Open!
          </div>
        </div>

        {/* Carousel */}
        <div className="card shadow-lg border-0">
          <div className="card-body p-0">
            <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-inner">
                {[img1, img2, img3, img4].map((src, index) => (
                  <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                    <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ maxHeight: '75vh', objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                      <p className="mb-0">{message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Go to Top Button */}
      <button 
        className="floating-top-btn-dark" 
        onClick={goToTop}
        title="Go to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </section>
  )
}

export default HomePage
