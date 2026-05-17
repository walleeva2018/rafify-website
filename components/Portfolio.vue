<template>
  <section id="portfolio" class="portfolio-showcase">
    <div class="container">
      <div class="section-header">
        <h2>Featured Work</h2>
        <p>Real solutions for real businesses</p>
      </div>
      <div class="portfolio-grid">
        <div class="portfolio-item">
          <div class="portfolio-media">
            <div class="media-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="2" y1="7" x2="7" y2="7"></line>
                <line x1="2" y1="17" x2="7" y2="17"></line>
                <line x1="17" y1="17" x2="22" y2="17"></line>
                <line x1="17" y1="7" x2="22" y2="7"></line>
              </svg>
            </div>
          </div>
          <div class="portfolio-content">
            <div class="portfolio-meta">Healthcare Platform</div>
            <h3>Telemedicine Solution</h3>
            <p>HIPAA-compliant platform connecting patients with healthcare providers via secure video consultations</p>
            <a href="#contact" class="portfolio-link">
              View Case Study
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
        <div class="portfolio-item">
          <div class="portfolio-media">
            <div class="media-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
          </div>
          <div class="portfolio-content">
            <div class="portfolio-meta">FinTech Application</div>
            <h3>Trading Platform</h3>
            <p>Real-time trading platform with advanced analytics and seamless payment gateway integration</p>
            <a href="#contact" class="portfolio-link">
              View Case Study
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-showcase {
  padding: 8rem 0;
  background: var(--bg-dark);
  color: white;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: 0;
  color: white;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--text-light);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
}

.portfolio-item {
  background: var(--bg-dark-light);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.portfolio-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  border-color: var(--secondary);
}

.portfolio-media {
  position: relative;
  width: 100%;
  padding-top: 60%;
  background: linear-gradient(135deg, rgba(45, 80, 22, 0.25), rgba(124, 179, 66, 0.15));
  overflow: hidden;
}

.media-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
}

.portfolio-content {
  padding: 2rem;
}

.portfolio-meta {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}

.portfolio-item h3 {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
}

.portfolio-item p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.0625rem;
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-link:hover {
  color: var(--secondary);
  gap: 0.75rem;
}

.portfolio-link .arrow {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-link:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 968px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
