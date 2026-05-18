<template>
  <section id="about" class="industries">
    <div class="container">
      <div class="industries-content">
        <div class="industries-text">
          <div class="section-badge">Why Choose Us</div>
          <h2>Top-Tier Engineers at Competitive Prices</h2>
          <p class="lead">Get access to 50+ experienced developers specializing in Healthcare & FinTech—without the premium agency markup. Quality software development that respects your budget.</p>
          <div class="pricing-highlight">
            <div class="pricing-badge">
              <span class="pricing-label">Starting at</span>
              <span class="pricing-amount">$40/hour</span>
            </div>
            <p class="pricing-note">Affordable rates • Senior talent • No hidden fees</p>
          </div>
          <div class="features-list">
            <div class="feature-item">
              <div class="check-icon">✓</div>
              <div>
                <h4>Healthcare Solutions</h4>
                <p>HIPAA-compliant systems, EHR integrations, telemedicine platforms</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="check-icon">✓</div>
              <div>
                <h4>FinTech Applications</h4>
                <p>Payment gateways, trading platforms, blockchain solutions</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="check-icon">✓</div>
              <div>
                <h4>Flexible Engagement</h4>
                <p>Project-based or staff augmentation—scale as you need</p>
              </div>
            </div>
          </div>
          <a href="#contact" class="btn btn-primary-solid">Get Your Quote</a>
        </div>
        <div class="industries-visual">
          <div class="tech-stack">
            <div class="tech-category">
              <h4>Frontend</h4>
              <div class="tech-badges">
                <span class="tech-badge">React</span>
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">Next.js</span>
                <span class="tech-badge">TypeScript</span>
              </div>
            </div>
            <div class="tech-category">
              <h4>Backend</h4>
              <div class="tech-badges">
                <span class="tech-badge">Node.js</span>
                <span class="tech-badge">Python</span>
                <span class="tech-badge">PostgreSQL</span>
                <span class="tech-badge">MongoDB</span>
              </div>
            </div>
            <div class="tech-category">
              <h4>Mobile</h4>
              <div class="tech-badges">
                <span class="tech-badge">React Native</span>
                <span class="tech-badge">Flutter</span>
                <span class="tech-badge">iOS</span>
                <span class="tech-badge">Android</span>
              </div>
            </div>
            <div class="tech-category">
              <h4>Cloud & DevOps</h4>
              <div class="tech-badges">
                <span class="tech-badge">AWS</span>
                <span class="tech-badge">Azure</span>
                <span class="tech-badge">Docker</span>
                <span class="tech-badge">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.industries {
  padding: 8rem 0;
  background: var(--bg);
  color: white;
}

.industries-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-badge {
  display: inline-block;
  background: rgba(201, 198, 80, 0.12);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0;
  border: 1px solid var(--border-dark);
}

.industries-text h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: white;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.lead {
  font-size: 1.0625rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.pricing-highlight {
  background: rgba(201, 198, 80, 0.08);
  border: 1px solid rgba(201, 198, 80, 0.25);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.pricing-badge {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.pricing-label {
  font-size: 0.875rem;
  color: var(--text-light);
  font-weight: 500;
}

.pricing-amount {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--secondary);
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
}

.pricing-amount::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  animation: expandLine 1s ease-out 0.5s forwards;
}

@keyframes expandLine {
  to {
    transform: scaleX(1);
  }
}

.pricing-note {
  font-size: 0.875rem;
  color: var(--text-light);
  margin: 0;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
}

.check-icon {
  width: 26px;
  height: 26px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 2px 8px var(--shadow-green);
}

.feature-item h4 {
  font-size: 1.0625rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: white;
}

.feature-item p {
  color: var(--text-light);
  font-size: 0.875rem;
  line-height: 1.6;
}

.btn-primary-solid {
  background: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px var(--shadow-green);
}

.btn-primary-solid:hover {
  background: var(--primary-light);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px var(--shadow-green);
}

.tech-stack {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 30px var(--shadow);
}

.tech-category {
  margin-bottom: 2rem;
}

.tech-category:last-child {
  margin-bottom: 0;
}

.tech-category h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: var(--surface-raised);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-badge:hover {
  background: var(--secondary);
  color: white;
  transform: translateY(-2px);
  border-color: var(--secondary);
  box-shadow: 0 4px 12px var(--shadow-green);
}

@media (max-width: 968px) {
  .industries-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .industries {
    padding: 4.5rem 0;
  }

  .industries-text h2 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .pricing-highlight,
  .tech-stack {
    padding: 1.2rem;
    border-radius: 0.75rem;
  }

  .pricing-badge {
    display: block;
  }

  .pricing-amount {
    display: block;
    font-size: 2rem;
    margin-top: 0.25rem;
  }

  .features-list {
    gap: 1rem;
  }

  .btn-primary-solid {
    width: 100%;
    justify-content: center;
  }

  .tech-category {
    margin-bottom: 1.4rem;
  }

  .tech-badge {
    padding: 0.45rem 0.7rem;
    font-size: 0.8rem;
  }
}
</style>
