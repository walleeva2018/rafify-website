<template>
  <section class="scroll-reel">
    <div class="container">
      <div class="reel-header">
        <span class="section-kicker">Our Process</span>
        <h2>From idea to launch in 4 simple steps</h2>
      </div>

      <div class="process-timeline">
        <div class="timeline-line" aria-hidden="true"></div>

        <div class="timeline-step step-left">
          <div class="step-content">
            <div class="step-badge">
              <span class="step-number">01</span>
            </div>
            <h3>Discovery & Planning</h3>
            <p>We analyze your needs, define project scope, and create a budget-friendly roadmap tailored to your goals.</p>
            <ul class="step-features">
              <li>Requirements gathering</li>
              <li>Budget optimization</li>
              <li>Timeline planning</li>
            </ul>
          </div>
          <div class="step-connector">
            <div class="connector-dot"></div>
          </div>
        </div>

        <div class="timeline-step step-right">
          <div class="step-connector">
            <div class="connector-dot"></div>
          </div>
          <div class="step-content">
            <div class="step-badge">
              <span class="step-number">02</span>
            </div>
            <h3>Design & Architecture</h3>
            <p>Our designers create intuitive interfaces while architects build scalable foundations using proven frameworks.</p>
            <ul class="step-features">
              <li>UI/UX design</li>
              <li>System architecture</li>
              <li>Tech stack selection</li>
            </ul>
          </div>
        </div>

        <div class="timeline-step step-left">
          <div class="step-content">
            <div class="step-badge">
              <span class="step-number">03</span>
            </div>
            <h3>Development & Testing</h3>
            <p>Senior engineers write clean, maintainable code with automated tests to ensure quality at every stage.</p>
            <ul class="step-features">
              <li>Agile development</li>
              <li>Code reviews</li>
              <li>Quality assurance</li>
            </ul>
          </div>
          <div class="step-connector">
            <div class="connector-dot"></div>
          </div>
        </div>

        <div class="timeline-step step-right">
          <div class="step-connector">
            <div class="connector-dot"></div>
          </div>
          <div class="step-content">
            <div class="step-badge">
              <span class="step-number">04</span>
            </div>
            <h3>Launch & Support</h3>
            <p>We handle deployment, monitor performance, and provide ongoing support to keep your product running smoothly.</p>
            <ul class="step-features">
              <li>Deployment automation</li>
              <li>Performance monitoring</li>
              <li>24/7 support available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-reel {
  padding: 8rem 0;
  background: linear-gradient(180deg, var(--bg-dark) 0%, var(--bg) 100%);
  color: white;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.reel-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;
}

.section-kicker {
  display: block;
  color: var(--secondary);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.reel-header h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: white;
}

/* Timeline Layout */
.process-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg,
    transparent 0%,
    var(--secondary) 10%,
    var(--secondary) 90%,
    transparent 100%);
  transform: translateX(-50%);
  opacity: 0.4;
}

.timeline-step {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
}

.timeline-step:last-child {
  margin-bottom: 0;
}

/* Left-aligned steps */
.step-left .step-content {
  grid-column: 1;
  text-align: right;
}

.step-left .step-connector {
  grid-column: 2;
}

.step-left .step-content::after {
  content: none;
}

/* Right-aligned steps */
.step-right .step-connector {
  grid-column: 2;
}

.step-right .step-content {
  grid-column: 3;
  text-align: left;
}

/* Step Content */
.step-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-content:hover {
  transform: scale(1.02);
  border-color: var(--secondary);
  box-shadow: 0 12px 40px rgba(201, 198, 80, 0.15);
  background: var(--bg-dark-green);
}

.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 16px rgba(201, 198, 80, 0.3);
  transition: all 0.3s ease;
}

.step-content:hover .step-badge {
  transform: rotate(360deg) scale(1.1);
}

.step-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.step-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.step-content p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.step-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.step-features li {
  font-size: 0.875rem;
  color: var(--secondary);
  padding: 0.375rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.step-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: 700;
}

/* Connector Dots */
.step-connector {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.connector-dot {
  width: 20px;
  height: 20px;
  background: var(--secondary);
  border: 4px solid var(--bg-dark);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(201, 198, 80, 0.2);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.timeline-step:hover .connector-dot {
  transform: scale(1.4);
  box-shadow: 0 0 0 8px rgba(201, 198, 80, 0.3);
}

/* Mobile Responsive */
@media (max-width: 968px) {
  .timeline-line {
    left: 2rem;
  }

  .timeline-step {
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .step-left .step-content,
  .step-right .step-content {
    grid-column: 2;
    text-align: left;
  }

  .step-left .step-connector,
  .step-right .step-connector {
    grid-column: 1;
  }

  .step-right {
    grid-template-columns: auto 1fr;
  }

  .step-content {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .scroll-reel {
    padding: 5rem 0;
  }

  .reel-header {
    margin-bottom: 3rem;
  }

  .timeline-line {
    left: 1.5rem;
  }

  .timeline-step {
    gap: 1rem;
  }

  .step-content h3 {
    font-size: 1.25rem;
  }
}
</style>
