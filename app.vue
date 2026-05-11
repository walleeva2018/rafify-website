<template>
  <div class="landing-page">
    <NuxtRouteAnnouncer />

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="title">
            <span class="bengali">পদার্থের অবস্থা</span>
            <span class="english">States of Matter</span>
          </h1>
          <p class="subtitle">
            Interactive Temperature Simulator
          </p>
          <p class="description">
            Explore how particles behave in solid, liquid, and gas states through an interactive, real-time simulation.
            Perfect for students, educators, and curious minds.
          </p>
          <div class="cta-buttons">
            <a href="#demo" class="btn btn-primary">Try Interactive Demo</a>
            <a href="#features" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="particle-preview">
            <div class="particle-state solid">
              <div class="particles">
                <span v-for="i in 9" :key="i" class="particle"></span>
              </div>
              <p>Solid</p>
            </div>
            <div class="particle-state liquid">
              <div class="particles">
                <span v-for="i in 9" :key="i" class="particle"></span>
              </div>
              <p>Liquid</p>
            </div>
            <div class="particle-state gas">
              <div class="particles">
                <span v-for="i in 9" :key="i" class="particle"></span>
              </div>
              <p>Gas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2>Key Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🌡️</div>
            <h3>Temperature Control</h3>
            <p>Interactive slider from -50°C to 160°C to visualize state changes in real-time</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Real-time Simulation</h3>
            <p>Watch particles move, vibrate, and change states as you adjust the temperature</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🖼️</div>
            <h3>Visual Examples</h3>
            <p>See real-world examples: ice melting, water flowing, and steam rising</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3>Bilingual Support</h3>
            <p>Available in Bengali (বাংলা) and English for broader accessibility</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Works seamlessly on desktop, tablet, and mobile devices</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Educational</h3>
            <p>Perfect for science education and understanding particle theory</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <h2>How It Works</h2>
        <div class="states-explanation">
          <div class="state-card">
            <div class="state-icon ice">❄️</div>
            <h3>Solid State</h3>
            <p class="temp-range">Below 0°C</p>
            <p>Particles arrange in a fixed pattern and vibrate in place. Low kinetic energy keeps them locked in position.</p>
          </div>
          <div class="state-card">
            <div class="state-icon water">💧</div>
            <h3>Liquid State</h3>
            <p class="temp-range">0°C - 100°C</p>
            <p>Particles flow freely while staying close together. They have enough energy to move around but remain attracted.</p>
          </div>
          <div class="state-card">
            <div class="state-icon steam">💨</div>
            <h3>Gas State</h3>
            <p class="temp-range">Above 100°C</p>
            <p>Particles spread rapidly throughout space. High kinetic energy overcomes all intermolecular forces.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="demo" class="cta-section">
      <div class="container">
        <h2>Ready to Explore?</h2>
        <p>Start experimenting with the interactive simulator and discover the fascinating world of particle physics.</p>
        <a href="/simulator" class="btn btn-large">Launch Simulator</a>
        <p class="note">No installation required - runs directly in your browser</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 States of Matter Simulator. Educational use encouraged.</p>
        <p class="tech-stack">Built with Nuxt.js | HTML5 Canvas | Vanilla JavaScript</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// SEO metadata using useHead composable
useHead({
  title: 'States of Matter - Interactive Temperature Simulator | পদার্থের অবস্থা',
  meta: [
    {
      name: 'description',
      content: 'Interactive educational simulator demonstrating how particles behave in solid, liquid, and gas states. Learn about states of matter with real-time temperature control and bilingual support (Bengali/English).'
    }
  ]
})

// Structured data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'States of Matter Simulator',
        description: 'Interactive educational simulator for learning about states of matter',
        applicationCategory: 'EducationalApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        inLanguage: ['en', 'bn']
      })
    }
  ]
})
</script>

<style scoped>
/* Variables */
:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
  --accent: #06b6d4;
  --text: #1f2937;
  --text-light: #6b7280;
  --bg: #ffffff;
  --bg-light: #f9fafb;
}

/* Global Styles */
.landing-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: var(--text);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.title .bengali {
  display: block;
  font-size: 2.5rem;
  opacity: 0.95;
}

.title .english {
  display: block;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.85;
  max-width: 600px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: var(--primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Particle Preview */
.particle-preview {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.particle-state {
  text-align: center;
}

.particles {
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.particle {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
}

.solid .particles {
  gap: 0.25rem;
}

.solid .particle {
  animation: vibrate 0.5s infinite;
}

.liquid .particle {
  animation: flow 2s infinite ease-in-out;
}

.gas .particle {
  animation: expand 1.5s infinite ease-in-out;
}

@keyframes vibrate {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(1px, 1px); }
  75% { transform: translate(-1px, -1px); }
}

@keyframes flow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

@keyframes expand {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
}

/* Features Section */
.features {
  padding: 6rem 0;
  background: var(--bg-light);
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

/* How It Works */
.how-it-works {
  padding: 6rem 0;
}

.how-it-works h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.states-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.state-card {
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.state-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.temp-range {
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-large {
  padding: 1.25rem 3rem;
  font-size: 1.25rem;
  background: white;
  color: var(--primary);
  text-decoration: none;
  border-radius: 0.5rem;
  display: inline-block;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-large:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.note {
  margin-top: 1rem;
  font-size: 0.875rem;
  opacity: 0.7;
}

/* Footer */
.footer {
  background: var(--text);
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.tech-stack {
  margin-top: 0.5rem;
  opacity: 0.7;
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .title {
    font-size: 2.5rem;
  }

  .title .bengali {
    font-size: 2rem;
  }

  .cta-buttons {
    justify-content: center;
  }

  .particle-preview {
    gap: 1rem;
  }
}
</style>
