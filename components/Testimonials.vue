<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>Client Success Stories</h2>
        <p>Hear from companies we've helped transform digitally</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p class="testimonial-text">"DataTree delivered our telemedicine platform on time and under budget. Their healthcare expertise and attention to HIPAA compliance was impressive."</p>
          <div class="testimonial-author">
            <div class="author-info">
              <div class="author-name">Dr. Michael Chen</div>
              <div class="author-role">CTO, HealthFirst Solutions</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p class="testimonial-text">"The team integrated complex payment APIs and built a scalable trading platform. Their FinTech knowledge saved us months of development time."</p>
          <div class="testimonial-author">
            <div class="author-info">
              <div class="author-name">Sarah Williams</div>
              <div class="author-role">Head of Engineering, TradePro</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p class="testimonial-text">"Outstanding mobile development. The React Native app works flawlessly on both platforms and our users love the interface."</p>
          <div class="testimonial-author">
            <div class="author-info">
              <div class="author-name">James Anderson</div>
              <div class="author-role">Product Manager, MedTrack Inc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 8rem 0;
  background: var(--bg);
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  border-color: var(--secondary);
}

.stars {
  color: #fbbf24;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.author-name {
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}

.author-role {
  font-size: 0.875rem;
  color: var(--text-light);
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
