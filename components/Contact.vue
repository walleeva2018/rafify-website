<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Let's Build Something Amazing</h2>
          <p>Ready to start your next project? Get in touch with our team and let's discuss how we can help transform your business.</p>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:hello@datatree.tech">hello@datatree.tech</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🌐</div>
              <div>
                <h4>Industries</h4>
                <p>Healthcare & FinTech</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">⚡</div>
              <div>
                <h4>Engagement</h4>
                <p>Project-based & Staff Aug</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form-container">
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input type="text" id="name" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input type="email" id="email" placeholder="your@company.com" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="+1 (555) 000-0000">
            </div>
            <div class="form-group">
              <label for="budget">Project Budget</label>
              <select id="budget">
                <option>$10K - $25K</option>
                <option>$25K - $50K</option>
                <option>$50K - $100K</option>
                <option>$100K+</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Project Details</label>
              <textarea id="message" rows="4" placeholder="Tell us about your project..."></textarea>
            </div>
            <div class="form-group">
              <label for="source">How did you hear about us?</label>
              <select id="source">
                <option>Search Engine</option>
                <option>LinkedIn</option>
                <option>Referral</option>
                <option>Tech Conference</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" class="btn btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 8rem 0;
  background: var(--bg-dark);
  color: white;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: white;
  letter-spacing: 0;
}

.contact-info > p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: start;
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-item h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: white;
}

.contact-item p,
.contact-item a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: var(--secondary);
}

.contact-form-container {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: white;
  font-size: 0.875rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  background: var(--bg-dark);
  color: white;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.42);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 3px rgba(124, 179, 66, 0.15);
}

.btn-submit {
  background: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px var(--shadow-green);
}

.btn-submit:hover {
  background: var(--primary-light);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px var(--shadow-green);
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .contact {
    padding: 4.5rem 0;
  }

  .contact-info h2 {
    font-size: 2rem;
    line-height: 1.15;
  }

  .contact-info > p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .contact-details {
    gap: 1rem;
  }

  .contact-form-container {
    padding: 1.1rem;
    border-radius: 0.75rem;
  }

  .contact-form {
    gap: 1rem;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    font-size: 16px;
    min-height: 46px;
  }

  .btn-submit {
    width: 100%;
    min-height: 48px;
  }
}
</style>
