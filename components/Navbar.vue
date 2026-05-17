<template>
  <nav class="navbar">
    <div class="container nav-container">
      <a href="/" class="logo" aria-label="DataTree Technology home">
        <img src="/main-logo.jpg" alt="DataTree Technology" class="logo-img" />
      </a>
      <div class="nav-links">
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact" class="btn-nav">Get a Quote</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(26, 27, 31, 0.95);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--border);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar--scrolled {
  padding: 0.75rem 0;
  background: rgba(17, 18, 22, 0.96);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar--scrolled .nav-links a {
  color: white;
}

.navbar--scrolled .nav-links a:not(.btn-nav)::after {
  background: var(--secondary);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: 46px;
  text-decoration: none;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-img {
  display: block;
  width: auto;
  height: 100%;
  object-fit: contain;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-links a:hover {
  color: var(--secondary);
}

.nav-links a:not(.btn-nav)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links a:not(.btn-nav):hover::after {
  width: 100%;
}

.btn-nav {
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-nav:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--shadow-green);
}

@media (max-width: 968px) {
  .nav-links {
    display: none;
  }
}
</style>
