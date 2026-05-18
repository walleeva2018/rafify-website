<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header">
        <h2>What We Do Best</h2>
        <p>Bespoke software solutions for demanding industries</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 18l2-2 4 4"></path>
              <circle cx="9" cy="9" r="7"></circle>
            </svg>
          </div>
          <h3>Web Development</h3>
          <p>Modern, scalable web applications built with React, Vue, and Next.js. From MVPs to enterprise platforms, we deliver pixel-perfect experiences.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <h3>Mobile Apps</h3>
          <p>Native iOS and Android applications, plus cross-platform solutions with React Native and Flutter for seamless user experiences.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6"></path>
              <path d="M17 7l-10 10"></path>
              <path d="M7 7l10 10"></path>
            </svg>
          </div>
          <h3>API Integration</h3>
          <p>Seamless third-party integrations, RESTful APIs, and GraphQL services that connect your systems and streamline workflows.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </div>
          <h3>Data Analytics</h3>
          <p>Transform raw data into actionable insights with custom dashboards, BI solutions, and machine learning implementations.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
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
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
  color: white;
}

.section-header p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--bg-dark-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201, 198, 80, 0.1), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  border-color: rgba(201, 198, 80, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(201, 198, 80, 0.15);
  border-color: var(--secondary);
  background: var(--bg-dark-green);
}

.service-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 24px var(--shadow-green);
}

.service-card h3 {
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.service-card p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 0.9375rem;
}

@media (max-width: 640px) {
  .services {
    padding: 4.5rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
    text-align: left;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header p {
    font-size: 1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-card {
    padding: 1.35rem;
    border-radius: 0.75rem;
  }

  .service-icon {
    width: 56px;
    height: 56px;
    margin-bottom: 1rem;
  }

  .service-icon svg {
    width: 34px;
    height: 34px;
  }
}
</style>
