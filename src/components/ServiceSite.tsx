import React, { useState } from 'react';
import '../styles/ServiceSite.css';

interface AppointmentForm {
  petName: string;
  ownerName: string;
  service: string;
  date: string;
  time: string;
  email: string;
}

interface ServiceSiteProps {
  onBack?: () => void;
}

const ServiceSite: React.FC<ServiceSiteProps> = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'booking' | 'confirmation'>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState<AppointmentForm>({
    petName: '',
    ownerName: '',
    service: '',
    date: '',
    time: '',
    email: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const services = [
    {
      id: 'checkup',
      name: 'Regular Checkup',
      price: '$75',
      description: 'Comprehensive health examination and consultation'
    },
    {
      id: 'vaccination',
      name: 'Vaccination',
      price: '$50',
      description: 'Annual vaccinations and immunizations'
    },
    {
      id: 'grooming',
      name: 'Grooming',
      price: '$85',
      description: 'Professional bathing and nail care'
    },
    {
      id: 'dental',
      name: 'Dental Cleaning',
      price: '$150',
      description: 'Professional teeth cleaning and oral care'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    setSelectedService(serviceId);
    setFormData(prev => ({
      ...prev,
      service: service?.name || ''
    }));
    setCurrentPage('booking');
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.petName && formData.ownerName && formData.date && formData.time && formData.email) {
      setBookingConfirmed(true);
      setCurrentPage('confirmation');
      setTimeout(() => {
        setCurrentPage('home');
        setFormData({
          petName: '',
          ownerName: '',
          service: '',
          date: '',
          time: '',
          email: ''
        });
        setBookingConfirmed(false);
      }, 5000);
    }
  };

  return (
    <div className="service-site">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
            🐾 PawCare Clinic
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCurrentPage('services')} style={{cursor: 'pointer'}}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setCurrentPage('booking')} style={{cursor: 'pointer'}}>
                  Book Appointment
                </a>
              </li>
              {onBack && (
                <li className="nav-item">
                  <a className="nav-link text-muted" onClick={onBack} style={{cursor: 'pointer'}}>
                    ← Back to Portfolio
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div className="home-page">
          {/* Hero Section */}
          <section className="hero-section bg-gradient text-white py-5 mb-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h1 className="display-4 fw-bold mb-4">Welcome to PawCare Clinic</h1>
                  <p className="lead mb-4">
                    Trusted veterinary care for your beloved pets. We provide comprehensive healthcare services in a compassionate and professional environment.
                  </p>
                  <button 
                    className="btn btn-light btn-lg px-4"
                    onClick={() => setCurrentPage('booking')}
                  >
                    Book an Appointment
                  </button>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="hero-image">🐶🐱🐰</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Preview */}
          <section className="services-preview py-5 bg-light">
            <div className="container">
              <h2 className="display-5 fw-bold text-center mb-5">Our Services</h2>
              <div className="row g-4">
                {services.map(service => (
                  <div key={service.id} className="col-md-6 col-lg-3">
                    <div className="card service-card h-100 shadow-sm border-0">
                      <div className="card-body">
                        <h5 className="card-title fw-bold text-primary">{service.name}</h5>
                        <p className="card-text text-muted">{service.description}</p>
                        <p className="card-text fs-5 fw-bold text-primary">{service.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-5">
                <button 
                  className="btn btn-primary btn-lg px-5"
                  onClick={() => setCurrentPage('services')}
                >
                  View All Services
                </button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section py-5">
            <div className="container">
              <h2 className="display-5 fw-bold text-center mb-5">Get in Touch</h2>
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className="contact-card p-4">
                    <div className="contact-icon">📍</div>
                    <h5 className="fw-bold mt-3">Location</h5>
                    <p className="text-muted">123 Pet Street<br/>Ottawa, ON K1A 0B1</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="contact-card p-4">
                    <div className="contact-icon">📞</div>
                    <h5 className="fw-bold mt-3">Phone</h5>
                    <p className="text-muted">(613) 555-0123<br/>Mon-Fri: 9am-6pm</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="contact-card p-4">
                    <div className="contact-icon">✉️</div>
                    <h5 className="fw-bold mt-3">Email</h5>
                    <p className="text-muted">info@pawcare.com<br/>Response within 24hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="about-section py-5 bg-light">
            <div className="container">
              <h2 className="display-5 fw-bold text-center mb-4">Why Choose PawCare?</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="feature">
                    <h5 className="fw-bold text-primary">✓ Experienced Team</h5>
                    <p className="text-muted">Our veterinarians have over 15 years of experience in animal care.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature">
                    <h5 className="fw-bold text-primary">✓ Modern Facilities</h5>
                    <p className="text-muted">State-of-the-art equipment and a clean, comfortable environment.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature">
                    <h5 className="fw-bold text-primary">✓ Compassionate Care</h5>
                    <p className="text-muted">We treat every pet with the utmost care and respect.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature">
                    <h5 className="fw-bold text-primary">✓ Easy Booking</h5>
                    <p className="text-muted">Simple online appointment scheduling at your convenience.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Services Page */}
      {currentPage === 'services' && (
        <div className="services-page py-5">
          <div className="container">
            <h1 className="display-4 fw-bold mb-5">Our Services</h1>
            <div className="row g-4">
              {services.map(service => (
                <div key={service.id} className="col-md-6">
                  <div className="service-detail-card card border-0 shadow-lg">
                    <div className="card-body p-5">
                      <h3 className="card-title fw-bold text-primary mb-3">{service.name}</h3>
                      <p className="card-text text-muted mb-3">{service.description}</p>
                      <h4 className="text-primary fw-bold mb-3">{service.price}</h4>
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleServiceSelect(service.id)}
                      >
                        Book This Service
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Booking Page */}
      {currentPage === 'booking' && !bookingConfirmed && (
        <div className="booking-page py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-5 text-center">Book an Appointment</h1>
                <div className="booking-form-card card border-0 shadow-lg">
                  <div className="card-body p-5">
                    <form onSubmit={handleBooking}>
                      <div className="mb-4">
                        <label className="form-label fw-bold">Select a Service *</label>
                        <select 
                          className="form-select"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Choose a service...</option>
                          {services.map(s => (
                            <option key={s.id} value={s.name}>{s.name} - {s.price}</option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold">Pet's Name *</label>
                        <input 
                          type="text" 
                          className="form-control"
                          name="petName"
                          value={formData.petName}
                          onChange={handleInputChange}
                          placeholder="e.g., Fluffy"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold">Your Name *</label>
                        <input 
                          type="text" 
                          className="form-control"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label className="form-label fw-bold">Preferred Date *</label>
                          <input 
                            type="date" 
                            className="form-control"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label className="form-label fw-bold">Preferred Time *</label>
                          <input 
                            type="time" 
                            className="form-control"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold">Email Address *</label>
                        <input 
                          type="email" 
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Confirm Appointment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Page */}
      {currentPage === 'confirmation' && bookingConfirmed && (
        <div className="confirmation-page py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="confirmation-card card border-0 shadow-lg">
                  <div className="card-body p-5">
                    <div className="success-icon mb-4">✅</div>
                    <h2 className="card-title fw-bold text-success mb-3">Appointment Confirmed!</h2>
                    <p className="lead mb-4">Thank you for booking with PawCare Clinic.</p>
                    <div className="confirmation-details bg-light p-4 rounded mb-4 text-start">
                      <p><strong>Service:</strong> {formData.service}</p>
                      <p><strong>Pet Name:</strong> {formData.petName}</p>
                      <p><strong>Owner:</strong> {formData.ownerName}</p>
                      <p><strong>Date:</strong> {formData.date}</p>
                      <p><strong>Time:</strong> {formData.time}</p>
                      <p><strong>Confirmation sent to:</strong> {formData.email}</p>
                    </div>
                    <p className="text-muted small">We'll see you soon! Please arrive 10 minutes early.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center mt-5">
        <div className="container">
          <p className="mb-2">&copy; 2026 PawCare Veterinary Clinic</p>
          <p className="text-muted small">Designed by Tony Li - SEG3125 Assignment 2</p>
        </div>
      </footer>
    </div>
  );
};

export default ServiceSite;
