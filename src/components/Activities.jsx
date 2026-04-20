import outings from '../assets/IMG_20240209_114053.jpg'
import celebration from '../assets/IMG_20240815_092659.jpg'
import fancyDress from '../assets/IMG_1929.JPG'

function Activities() {
  const goToTop = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="activities" className="bg-light d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: 'clamp(1.2rem, 4vw, 3rem)', color: '#003B7A' }}>
            <i className="fas fa-star me-2" style={{ color: '#FFB800' }}></i>Activities at Tender Buds
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1em' }}>From celebrations to outdoor adventures, our students enjoy joyful learning and memorable moments every day.</p>
        </div>
        <div className="card shadow-lg border-0">
          <div className="card-body p-0">
            <div id="activitiesCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
              <div className="carousel-inner">
                {[
                  { src: outings, title: 'Outings & Picnics', description: '🌳 Outdoor learning adventures that build curiosity, friendship, and memorable play.' },
                  { src: celebration, title: 'National Day Celebrations', description: '🇮🇳 Colorful school celebrations that inspire pride and joyful discovery.' },
                  { src: fancyDress, title: 'Fancy Dress & Creativity', description: '👗 Creative dress-up days that encourage imagination and confidence in every child.' }
                ].map((item, index) => (
                  <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                    <img src={item.src} className="d-block w-100" alt={item.title} style={{ maxHeight: '75vh', objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#activitiesCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#activitiesCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Go to Top Button - Dark Yellow */}
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

export default Activities
