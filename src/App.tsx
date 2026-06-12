import React, { useState } from 'react';
import './App.css';
import ServiceSite from './components/ServiceSite';
import MemoryGame from './components/MemoryGame';

type View = 'portfolio' | 'service' | 'memory';

function App() {
  const [currentView, setCurrentView] = useState<View>('portfolio');
  const [showServiceSite, setShowServiceSite] = useState(false);

  if (currentView === 'memory') {
    return <MemoryGame onBack={() => setCurrentView('portfolio')} />;
  }

  if (showServiceSite) {
    return <ServiceSite onBack={() => setShowServiceSite(false)} />;
  }

  return (
    <div className="App">
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">TONY LI</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#work">How I Work</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio">Case Studies</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section id="about" className="py-5 bg-light">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-3 fw-bold mb-4">Hi, I'm Tony Li</h1>
                <p className="lead text-muted mb-4">
                  I am a student at the University of Ottawa currently exploring the intersection of technology and human-centered design. I'm passionate about building intuitive digital experiences that solve real-world problems.
                </p>``
                <p className="mb-4">
                  When I'm not designing or coding, you can find me exploring new coffee shops, reading about tech trends, or working on personal projects.
                </p>
                <a href="#portfolio" className="btn btn-primary btn-lg px-4 me-md-2">View My Work</a>
              </div>
              <div className="col-lg-6 text-center">
                <div className="bg-secondary rounded-circle d-inline-block shadow-lg" style={{width: '300px', height: '300px', background: 'url(/tonystackprofilepic.jpg) center/cover'}}></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4">How I Work</h2>
                <p className="lead mb-4">
                  I am currently a student in the <strong>SEG3125: User Interface Analysis and Design</strong> course at the University of Ottawa.
                </p>
                <p className="mb-5">
                  My design process is guided by industry-standard principles from resources like the <a href="https://www.nngroup.com/" target="_blank">Nielsen Norman Group (NN/g)</a>. I focus on understanding user needs through research, iterative prototyping, and heuristic evaluations.
                </p>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="p-3 border rounded shadow-sm h-100">
                      <h4 className="fw-bold">User Research</h4>
                      <p className="small text-muted">Understanding the "why" before the "what".</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded shadow-sm h-100">
                      <h4 className="fw-bold">Prototyping</h4>
                      <p className="small text-muted">Bringing ideas to life through iterative design.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded shadow-sm h-100">
                      <h4 className="fw-bold">Evaluation</h4>
                      <p className="small text-muted">Testing against usability heuristics and user feedback.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-5 bg-light">
          <div className="container py-5">
            <h2 className="display-5 fw-bold text-center mb-5">Case Studies</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="Service Site" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Service Site</h5>
                    <p className="card-text text-muted small">PawCare Veterinary Clinic - A high-fidelity prototype with booking system and personas.</p>
                    <button onClick={() => setShowServiceSite(true)} className="btn btn-primary btn-sm">View Site →</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="Memory Game" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Memory Game</h5>
                    <p className="card-text text-muted small">Un jeu de mémoire — Test your memory with matching pairs!</p>
                    <button onClick={() => setCurrentView('memory')} className="btn btn-primary btn-sm">Play Game →</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="E-commerce" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">E-commerce</h5>
                    <p className="card-text text-muted small">A modern shopping experience optimized for conversion.</p>
                    <a href="case-studies/ecommerce.html" className="btn btn-outline-primary btn-sm">Coming Soon</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="Analytics Site" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Analytics Site</h5>
                    <p className="card-text text-muted small">Data visualization and BI dashboard design.</p>
                    <a href="case-studies/analytics.html" className="btn btn-outline-primary btn-sm">Coming Soon</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-4 bg-white border-top">
        <div className="container text-center">
          <p className="text-muted mb-0">&copy; 2026 Tony Li - SEG3125 Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
