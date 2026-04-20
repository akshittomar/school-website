function AboutSection() {
  const facilities = [
    { name: 'Expert Teachers', value: 95, icon: 'fa-chalkboard-user', label: 'Experienced & dedicated teachers guiding every step.' },
    { name: 'Safe Environment', value: 95, icon: 'fa-shield', label: 'Secure, friendly classrooms and play areas.' },
    { name: 'Transportation', value: 85, icon: 'fa-bus', label: 'Reliable pickup and drop-off service.' },
    { name: 'Nutrition Program', value: 90, icon: 'fa-utensils', label: 'Healthy meals and nutritious snacks.' }
  ]

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="about" className="bg-white d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container py-5">
        {/* Admissions Banner */}
        <div className="alert alert-dismissible fade show text-center mb-4" role="alert" style={{ background: 'linear-gradient(135deg, #FFE5CC 0%, #FFD700 100%)', border: '2px solid #FFB800', borderRadius: '15px' }}>
          <i className="fas fa-envelope-open me-2" style={{ color: '#FF6B35' }}></i>
          <strong style={{ color: '#003B7A' }}>Admissions Open for 2024-2025!</strong> Enroll your child in Tender Buds Kindergarten School and let them grow with joy and creativity.
        </div>

        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <div className="p-5 rounded shadow-lg" style={{ background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)', borderLeft: '5px solid #003B7A' }}>
              <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', color: '#003B7A' }}>
                <i className="fas fa-heart me-2" style={{ color: '#E84C3D' }}></i>Tender Buds Kindergarten School
              </h2>
              <p className="mb-3" style={{ color: '#555' }}>
                <i className="fas fa-map-pin me-2" style={{ color: '#E84C3D' }}></i>
                <strong>Address:</strong><br />
                Plot No. 2, Buty Layout<br />
                Chhaoni, Raj Nagar<br />
                Nagpur - 440013, Maharashtra
              </p>
              <p className="mb-3" style={{ color: '#555' }}>
                <i className="fas fa-graduation-cap me-2" style={{ color: '#003B7A' }}></i>
                <strong>Classes Offered:</strong><br />
                <span className="badge me-1 mb-1" style={{ background: '#FFB800', color: '#333' }}>PRE-NURSERY</span>
                <span className="badge me-1 mb-1" style={{ background: '#4CAF50', color: 'white' }}>NURSERY</span>
                <span className="badge me-1 mb-1" style={{ background: '#FF9800', color: 'white' }}>K-G-I</span>
                <span className="badge me-1 mb-1" style={{ background: '#E84C3D', color: 'white' }}>KG-II</span>
              </p>
              <p style={{ color: '#666' }}>
                A nurturing school dedicated to early childhood growth, exploration, and joyful learning. We foster creative play, strong friendships, and confident learners through meaningful activities, safe spaces, and family-centered care.
              </p>
              <p className="mb-2" style={{ color: '#555' }}>
                <i className="fas fa-phone me-2" style={{ color: '#4CAF50' }}></i>
                <strong>Contact Us:</strong><br />
                <a href="tel:8446559245" className="text-decoration-none" style={{ color: '#003B7A', fontWeight: 'bold' }}>📱 8446559245</a> | <a href="tel:9422438054" className="text-decoration-none" style={{ color: '#003B7A', fontWeight: 'bold' }}>📱 9422438054</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5 rounded shadow-lg" style={{ background: 'linear-gradient(135deg, #FFF5CC 0%, #FFEBCC 100%)' }}>
              <h3 className="mb-4 fw-bold" style={{ fontSize: 'clamp(1.1rem, 4vw, 1.8rem)', color: '#003B7A' }}>
                <i className="fas fa-lightbulb me-2" style={{ color: '#FFB800' }}></i>Our Features
              </h3>
              {facilities.map((facility) => (
                <div key={facility.name} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <strong style={{ color: '#333' }}>
                      <i className={`fas ${facility.icon} me-2`} style={{ color: '#E84C3D' }}></i>
                      {facility.name}
                    </strong>
                    <span className="badge" style={{ backgroundColor: '#003B7A', color: 'white' }}>{facility.value}%</span>
                  </div>
                  <div className="progress" style={{ height: '1.5rem', background: '#E0E0E0', borderRadius: '10px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: `${facility.value}%`, background: 'linear-gradient(90deg, #E84C3D 0%, #FF6B35 100%)', borderRadius: '10px', fontWeight: 'bold' }} aria-valuenow={facility.value} aria-valuemin="0" aria-valuemax="100">
                      {facility.value}%
                    </div>
                  </div>
                  <p className="small text-muted mt-2" style={{ color: '#666' }}>{facility.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="row gy-3 mt-5">
          <h3 className="text-center fw-bold mb-4" style={{ fontSize: 'clamp(1.1rem, 4vw, 2.5rem)', color: '#003B7A' }}>
            <i className="fas fa-sparkles me-2" style={{ color: '#FFB800' }}></i>Our Core Values
          </h3>
          <div className="col-md-3">
            <div className="card text-center border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #FFE6E6 0%, #FFF0F0 100%)' }}>
              <div className="card-body">
                <i className="fas fa-smile" style={{ fontSize: '2.5em', color: '#FF6B35' }}></i>
                <h5 className="mt-3 fw-bold" style={{ color: '#003B7A' }}>Joy & Happiness</h5>
                <p className="small" style={{ color: '#666' }}>Learning should be fun and enjoyable for every child.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #FFF5CC 0%, #FFEBCC 100%)' }}>
              <div className="card-body">
                <i className="fas fa-lightbulb" style={{ fontSize: '2.5em', color: '#FFB800' }}></i>
                <h5 className="mt-3 fw-bold" style={{ color: '#003B7A' }}>Creativity</h5>
                <p className="small" style={{ color: '#666' }}>Encouraging imaginative thinking and self-expression.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #E0F2F7 0%, #F0F8FF 100%)' }}>
              <div className="card-body">
                <i className="fas fa-handshake" style={{ fontSize: '2.5em', color: '#00A8E8' }}></i>
                <h5 className="mt-3 fw-bold" style={{ color: '#003B7A' }}>Care & Support</h5>
                <p className="small" style={{ color: '#666' }}>Nurturing safe environment for all children.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #E6F3E6 0%, #F0FFF0 100%)' }}>
              <div className="card-body">
                <i className="fas fa-star" style={{ fontSize: '2.5em', color: '#4CAF50' }}></i>
                <h5 className="mt-3 fw-bold" style={{ color: '#003B7A' }}>Excellence</h5>
                <p className="small" style={{ color: '#666' }}>Committed to quality education and services.</p>
              </div>
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

export default AboutSection
