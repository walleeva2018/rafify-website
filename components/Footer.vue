<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/main-logo.jpg" alt="DataTree Technology" class="logo-img footer-logo-img" />
          </div>
          <p>Custom software development for Healthcare and FinTech. Building the future, one line of code at a time.</p>
        </div>
        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Mobile Apps</a></li>
            <li><a href="#services">API Integration</a></li>
            <li><a href="#services">Data Analytics</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">NDA</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 DataTree Technology. Crafting digital excellence.</p>
        <p class="tech-stack">Healthcare • FinTech • Enterprise Solutions</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-dark);
  color: white;
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  height: 52px;
  margin-bottom: 1rem;
}

.footer-logo-img {
  border-radius: 4px;
  display: block;
  width: auto;
  height: 100%;
  object-fit: contain;
}

.footer-section p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
}

.footer-section h4 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.footer-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-section ul a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul a:hover {
  color: var(--secondary);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

.tech-stack {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  opacity: 0.7;
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
