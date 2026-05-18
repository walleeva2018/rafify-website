<template>
  <section class="scroll-reel">
    <div class="container process-layout">
      <div class="process-intro">
        <span class="section-kicker">Our Process</span>
        <h2>Scroll through the build, side by side.</h2>
        <p>
          Each phase sits next to the next. As you scroll, the row moves horizontally and reveals the journey from discovery to launch.
        </p>

        <div class="process-progress" aria-hidden="true">
          <span class="progress-label">Build progress</span>
          <span class="progress-track">
            <span class="process-progress-fill"></span>
          </span>
        </div>
      </div>

      <div class="process-viewport">
        <div class="timeline-line" aria-hidden="true"></div>
        <div class="process-track">
          <article class="timeline-step">
            <div class="step-connector">
              <div class="connector-dot"></div>
            </div>
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
          </article>

          <article class="timeline-step">
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
          </article>

          <article class="timeline-step">
            <div class="step-connector">
              <div class="connector-dot"></div>
            </div>
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
          </article>

          <article class="timeline-step">
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
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-reel {
  padding: clamp(3.25rem, 6vh, 5rem) 0 0;
  background: linear-gradient(180deg, var(--bg-dark) 0%, var(--bg) 100%);
  color: white;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.process-layout {
  overflow: hidden;
}

.process-intro {
  max-width: 860px;
  margin-bottom: clamp(1.25rem, 3vh, 2rem);
}

.section-kicker {
  display: block;
  color: var(--secondary);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.65rem;
}

.process-intro h2 {
  max-width: 780px;
  font-size: clamp(2.15rem, 4.2vw, 3.95rem);
  line-height: 1.04;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: white;
  margin-bottom: 0.85rem;
}

.process-intro p {
  max-width: 560px;
  color: var(--text-light);
  font-size: 0.98rem;
  line-height: 1.62;
}

.process-progress {
  margin-top: clamp(1.3rem, 3vh, 2rem);
  max-width: min(620px, 100%);
}

.progress-label {
  display: block;
  color: var(--text-lighter);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.55rem;
}

.progress-track {
  display: block;
  height: 0.5rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
}

.process-progress-fill {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform: scaleX(0);
  transform-origin: 0 50%;
}

.process-viewport {
  position: relative;
  min-height: clamp(390px, 52vh, 560px);
  overflow: visible;
}

.process-track {
  display: flex;
  gap: clamp(1.25rem, 3vw, 2rem);
  width: max-content;
  padding: 1.75rem 0 4rem;
  will-change: transform;
}

.timeline-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 2.35rem;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--secondary) 12%, var(--secondary) 88%, transparent);
  transform: scaleX(0);
  transform-origin: 0 50%;
  opacity: 0.55;
}

.timeline-step {
  display: flex;
  flex-direction: column;
  width: clamp(300px, 42vw, 520px);
  min-height: clamp(330px, 44vh, 430px);
  position: relative;
  flex: 0 0 auto;
}

.step-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.85rem;
}

.connector-dot {
  width: 20px;
  height: 20px;
  background: var(--secondary);
  border: 4px solid var(--bg-dark);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(201, 198, 80, 0.2);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.step-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: clamp(1.3rem, 2.35vw, 2rem);
  position: relative;
  min-height: clamp(260px, 34vh, 330px);
  opacity: 0.62;
  transform: translateY(18px) scale(0.975);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  will-change: transform, opacity;
}

.timeline-step.is-active .step-content {
  border-color: var(--secondary);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32), 0 0 34px rgba(201, 198, 80, 0.12);
  background: var(--bg-dark-green);
}

.timeline-step.is-active .connector-dot {
  transform: scale(1.35);
  box-shadow: 0 0 0 8px rgba(201, 198, 80, 0.26);
}

.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 16px rgba(201, 198, 80, 0.3);
}

.step-number {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.step-content h3 {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 650;
  margin-bottom: 0.75rem;
  color: white;
}

.step-content p {
  font-size: 0.9rem;
  line-height: 1.58;
  color: var(--text-light);
  margin-bottom: 0.75rem;
}

.step-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.step-features li {
  font-size: 0.82rem;
  color: var(--secondary);
  padding: 0.25rem 0 0.25rem 1.25rem;
  position: relative;
}

.step-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: 700;
}

@media (max-width: 968px) {
  .scroll-reel {
    padding: 4.5rem 0 0;
  }

  .process-viewport {
    min-height: auto;
  }

  .process-track {
    display: grid;
    gap: 1rem;
    width: auto;
    padding: 0 0 3.5rem;
    transform: none !important;
    will-change: auto;
  }

  .timeline-step {
    width: auto;
    min-height: auto;
  }

  .timeline-line {
    display: none;
  }

  .process-progress-fill {
    transform: scaleX(1);
  }

  .step-content {
    min-height: auto;
    opacity: 1;
    transform: none;
    will-change: auto;
  }
}

@media (max-width: 640px) {
  .scroll-reel {
    padding-top: 4.25rem;
  }

  .process-intro {
    margin-bottom: 1.25rem;
  }

  .process-intro h2 {
    font-size: 2rem;
    line-height: 1.12;
  }

  .process-intro p {
    font-size: 0.95rem;
  }

  .process-progress {
    margin-top: 1rem;
  }

  .progress-track {
    height: 0.4rem;
  }

  .step-content {
    padding: 1.35rem;
    border-radius: 0.75rem;
  }

  .step-connector {
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.55rem;
  }

  .connector-dot {
    width: 16px;
    height: 16px;
  }

  .step-badge {
    width: 42px;
    height: 42px;
    margin-bottom: 0.8rem;
  }

  .step-number {
    font-size: 1.05rem;
  }
}
</style>
