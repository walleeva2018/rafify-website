<template>
  <section class="hero">
    <div class="tree-pattern"></div>

    <!-- Animated Geometric Shapes -->
    <div class="geometric-bg">
      <div class="geo-shape hexagon-1"></div>
      <div class="geo-shape hexagon-2"></div>
      <div class="geo-shape triangle-1"></div>
      <div class="geo-shape triangle-2"></div>
      <div class="geo-shape circle-ring-1"></div>
      <div class="geo-shape circle-ring-2"></div>
    </div>

    <!-- Dynamic Grid Lines -->
    <div class="grid-overlay">
      <div class="grid-line grid-h-1"></div>
      <div class="grid-line grid-h-2"></div>
      <div class="grid-line grid-v-1"></div>
      <div class="grid-line grid-v-2"></div>
    </div>

    <!-- Tree Branch Structures -->
    <div class="tree-branches">
      <svg class="branch branch-1" viewBox="0 0 200 200">
        <path d="M 10 100 Q 50 50 100 100 T 190 100" stroke="currentColor" fill="none" stroke-width="2"/>
        <circle cx="100" cy="100" r="4" fill="currentColor"/>
        <circle cx="50" cy="75" r="3" fill="currentColor"/>
        <circle cx="150" cy="75" r="3" fill="currentColor"/>
      </svg>
      <svg class="branch branch-2" viewBox="0 0 200 200">
        <path d="M 100 10 L 100 100 L 150 150 M 100 100 L 50 150" stroke="currentColor" fill="none" stroke-width="2"/>
        <circle cx="100" cy="100" r="4" fill="currentColor"/>
        <circle cx="150" cy="150" r="3" fill="currentColor"/>
        <circle cx="50" cy="150" r="3" fill="currentColor"/>
      </svg>
    </div>

    <!-- Floating Particles -->
    <div class="particles">
      <div class="particle" v-for="i in 15" :key="i" :style="{ '--i': i }"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="badge">
          <span class="badge-icon">⚡</span>
          Enterprise Software Development
        </div>
        <h1 class="title">
          Expert Engineers at
          <span class="highlight-text">
            <span class="highlight-gradient">Affordable Rates</span>
            <span class="highlight-underline"></span>
          </span>
        </h1>
        <p class="subtitle">
          Access top-tier software development talent without breaking the bank. We deliver premium solutions for Healthcare & FinTech at competitive prices.
        </p>
        <div class="value-prop">
          <span class="value-highlight">
            <span class="value-icon">👥</span>
            50+ Senior Engineers
          </span>
          <span class="separator">•</span>
          <span class="value-highlight">
            <span class="value-icon">💰</span>
            Affordable Pricing
          </span>
          <span class="separator">•</span>
          <span class="value-highlight">
            <span class="value-icon">⭐</span>
            Enterprise Quality
          </span>
        </div>

        <!-- Animated Stats -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Developers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">Projects</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">98%</div>
            <div class="stat-label">Satisfaction</div>
          </div>
        </div>

        <div class="cta-buttons">
          <a href="#contact" class="btn btn-primary">
            <span class="btn-glow"></span>
            <span>Get a Quote</span>
            <span class="arrow">→</span>
          </a>
          <a href="#about" class="btn btn-secondary">See Our Rates</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="media-composition">
          <div class="line line-horizontal"></div>
          <div class="line line-vertical"></div>

          <!-- Animated Code Blocks -->
          <div class="code-block code-block-1">
            <div class="code-line"></div>
            <div class="code-line"></div>
            <div class="code-line"></div>
          </div>
          <div class="code-block code-block-2">
            <div class="code-line"></div>
            <div class="code-line"></div>
          </div>
          <div class="code-block code-block-3">
            <div class="code-line"></div>
            <div class="code-line"></div>
            <div class="code-line"></div>
            <div class="code-line"></div>
          </div>

          <!-- Floating Tech Icons -->
          <div class="tech-icon tech-icon-1">{ }</div>
          <div class="tech-icon tech-icon-2">&lt;/&gt;</div>
          <div class="tech-icon tech-icon-3">⚛</div>
        </div>
      </div>
    </div>
    <div class="hero-bg-gradient"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 6rem;
  overflow: hidden;
  background: var(--bg-dark);
}

.hero-bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at top right, rgba(124, 179, 66, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at bottom left, rgba(45, 80, 22, 0.12) 0%, transparent 50%);
  z-index: -1;
}

.tree-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  opacity: 0.06;
  background-image:
    radial-gradient(circle at 20% 30%, var(--secondary) 3px, transparent 3px),
    radial-gradient(circle at 60% 60%, var(--accent-leaf) 4px, transparent 4px),
    radial-gradient(circle at 80% 20%, var(--secondary) 2px, transparent 2px),
    radial-gradient(circle at 40% 80%, var(--accent-leaf) 3px, transparent 3px);
  background-size: 100px 100px;
  pointer-events: none;
  z-index: 0;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  opacity: 1 !important;
}

.badge {
  display: inline-block;
  background: rgba(124, 179, 66, 0.2);
  color: var(--secondary);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 179, 66, 0.4);
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  color: white;
  opacity: 1;
}

.highlight-text {
  font-weight: 800;
  color: var(--secondary);
  opacity: 1;
  display: block;
}

.subtitle {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.7;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  opacity: 1;
  max-width: 540px;
}

.value-prop {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.value-highlight {
  font-size: 1rem;
  font-weight: 600;
  color: var(--secondary);
}

.separator {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.875rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 12px var(--shadow-green);
}

.btn-primary:hover {
  background: var(--primary-light);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px var(--shadow-green);
}

.arrow {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.25rem;
}

.btn-primary:hover .arrow {
  transform: translateX(6px);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.value-prop {
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: var(--secondary);
  border-color: var(--secondary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px var(--shadow-green);
}


.media-composition {
  position: relative;
  min-height: 560px;
  transform-style: preserve-3d;
  will-change: transform;
}

.line {
  position: absolute;
  background: rgba(255, 255, 255, 0.16);
  pointer-events: none;
}

.line-horizontal {
  top: 50%;
  left: -8%;
  width: 116%;
  height: 1px;
}

.line-vertical {
  top: 4%;
  left: 55%;
  width: 1px;
  height: 92%;
}

@media (max-width: 968px) {
  .hero {
    min-height: auto;
    padding: 7rem 0 4rem;
    align-items: flex-start;
  }

  .hero .container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .media-composition {
    min-height: 300px;
  }

  .title {
    font-size: 2.25rem;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 5.75rem 0 3.5rem;
  }

  .title {
    font-size: clamp(2rem, 11vw, 2.75rem);
    line-height: 1.08;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 1.35rem;
    line-height: 1.6;
  }

  .badge {
    margin-bottom: 1rem;
    font-size: 0.78rem;
  }

  .value-prop {
    gap: 0.55rem;
    margin-bottom: 1.6rem;
  }

  .separator {
    display: none;
  }

  .value-highlight {
    width: 100%;
    font-size: 0.92rem;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    margin-bottom: 1.75rem;
    text-align: left;
  }

  .stat-item {
    text-align: left;
  }

  .stat-number {
    font-size: 1.55rem;
  }

  .stat-label {
    font-size: 0.68rem;
    letter-spacing: 0.02em;
  }

  .cta-buttons {
    flex-direction: column;
    margin-bottom: 0;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .media-composition {
    min-height: 0;
  }

  .hero-visual {
    display: none;
  }
}

/* Animated Geometric Shapes */
.geometric-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.geo-shape {
  position: absolute;
  opacity: 0.15;
  border: 2px solid var(--secondary);
}

.hexagon-1 {
  width: 200px;
  height: 200px;
  top: 15%;
  right: 20%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(135deg, transparent, var(--primary-light) 50%, transparent);
  animation: rotate-shape 30s linear infinite, float-geo 8s ease-in-out infinite;
}

.hexagon-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 10%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(225deg, transparent, var(--accent-leaf) 50%, transparent);
  animation: rotate-shape 25s linear infinite reverse, float-geo 10s ease-in-out infinite;
  animation-delay: 2s;
}

.triangle-1 {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 173px solid rgba(201, 198, 80, 0.1);
  top: 30%;
  left: 15%;
  animation: rotate-shape 20s linear infinite, float-geo 12s ease-in-out infinite;
  animation-delay: 1s;
}

.triangle-2 {
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 138px solid rgba(45, 80, 22, 0.15);
  top: 60%;
  right: 15%;
  animation: rotate-shape 22s linear infinite reverse, float-geo 9s ease-in-out infinite;
  animation-delay: 3s;
}

.circle-ring-1 {
  width: 180px;
  height: 180px;
  border: 3px solid var(--secondary);
  border-radius: 50%;
  top: 10%;
  left: 25%;
  background: radial-gradient(circle, transparent 60%, rgba(201, 198, 80, 0.05) 100%);
  animation: pulse-ring 6s ease-in-out infinite, float-geo 11s ease-in-out infinite;
}

.circle-ring-2 {
  width: 220px;
  height: 220px;
  border: 2px solid var(--primary-light);
  border-radius: 50%;
  bottom: 15%;
  right: 25%;
  background: radial-gradient(circle, transparent 70%, rgba(45, 80, 22, 0.08) 100%);
  animation: pulse-ring 7s ease-in-out infinite, float-geo 13s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes rotate-shape {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes float-geo {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(15px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-30px) translateX(5px);
  }
}

@keyframes pulse-ring {
  0%, 100% {
    transform: scale(1);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.25;
  }
}

/* Dynamic Grid Lines */
.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.grid-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, var(--secondary) 50%, transparent);
  opacity: 0;
  animation: grid-appear 3s ease-in-out infinite;
}

.grid-h-1 {
  width: 100%;
  height: 1px;
  top: 30%;
  left: 0;
  animation-delay: 0s;
}

.grid-h-2 {
  width: 100%;
  height: 1px;
  top: 70%;
  left: 0;
  animation-delay: 1.5s;
}

.grid-v-1 {
  width: 1px;
  height: 100%;
  top: 0;
  left: 25%;
  background: linear-gradient(180deg, transparent, var(--secondary) 50%, transparent);
  animation-delay: 0.75s;
}

.grid-v-2 {
  width: 1px;
  height: 100%;
  top: 0;
  right: 30%;
  background: linear-gradient(180deg, transparent, var(--primary-light) 50%, transparent);
  animation-delay: 2.25s;
}

@keyframes grid-appear {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
}

/* Tree Branch Structures */
.tree-branches {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.branch {
  position: absolute;
  width: 200px;
  height: 200px;
  color: var(--secondary);
  opacity: 0.2;
  animation: branch-grow 15s ease-in-out infinite;
}

.branch-1 {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.branch-2 {
  bottom: 25%;
  left: 8%;
  animation-delay: 3s;
  transform: rotate(45deg);
}

.branch path {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: draw-branch 8s ease-in-out infinite;
}

.branch circle {
  animation: pulse-node 3s ease-in-out infinite;
}

@keyframes branch-grow {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.05) rotate(5deg);
    opacity: 0.25;
  }
}

@keyframes draw-branch {
  0%, 100% {
    stroke-dashoffset: 400;
  }
  50% {
    stroke-dashoffset: 0;
  }
}

@keyframes pulse-node {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

/* Floating Particles */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--secondary);
  border-radius: 50%;
  opacity: 0;
  animation: float-particle calc(15s + var(--i) * 2s) ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.5s);
  left: calc(var(--i) * 6%);
  bottom: -20px;
}

@keyframes float-particle {
  0% {
    transform: translateY(0) translateX(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) translateX(calc(var(--i) * 20px - 100px)) scale(1.5);
    opacity: 0;
  }
}

/* Badge Enhancements */
.badge {
  position: relative;
  overflow: hidden;
}

.badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: badge-shine 3s ease-in-out infinite;
}

@keyframes badge-shine {
  0%, 100% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
}

.badge-icon {
  display: inline-block;
  animation: pulse-icon 2s ease-in-out infinite;
  margin-right: 0.5rem;
}

@keyframes pulse-icon {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* Highlight Text Gradient Animation */
.highlight-text {
  position: relative;
  display: inline-block;
}

.highlight-gradient {
  background: linear-gradient(135deg, var(--secondary), var(--accent-leaf), var(--secondary));
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.highlight-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary), var(--accent-leaf));
  border-radius: 2px;
  animation: underline-grow 2s ease-out;
}

@keyframes underline-grow {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

/* Value Icons */
.value-icon {
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.1rem;
  animation: bounce-icon 2s ease-in-out infinite;
}

.value-highlight:nth-child(1) .value-icon {
  animation-delay: 0s;
}

.value-highlight:nth-child(3) .value-icon {
  animation-delay: 0.3s;
}

.value-highlight:nth-child(5) .value-icon {
  animation-delay: 0.6s;
}

@keyframes bounce-icon {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Hero Stats */
.hero-stats {
  display: flex;
  gap: 3rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  position: relative;
}

.stat-item::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--secondary), transparent);
  border-radius: 2px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--secondary);
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--secondary), var(--accent-leaf));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: stat-glow 2s ease-in-out infinite;
}

@keyframes stat-glow {
  0%, 100% {
    filter: drop-shadow(0 0 10px rgba(201, 198, 80, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(201, 198, 80, 0.6));
  }
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

/* CTA Button Glow Effect */
.btn-primary {
  position: relative;
  overflow: hidden;
}

.btn-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(201, 198, 80, 0.4), transparent 70%);
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  animation: pulse-glow 2s ease-out infinite;
  pointer-events: none;
}

@keyframes pulse-glow {
  0%, 100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

.btn-primary:hover .btn-glow {
  animation: pulse-glow 1s ease-out infinite;
}

/* Code Blocks Animation */
.code-block {
  position: absolute;
  background: rgba(45, 80, 22, 0.3);
  border: 1px solid rgba(201, 198, 80, 0.2);
  border-radius: 8px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  animation: code-float 6s ease-in-out infinite;
}

.code-block-1 {
  top: 10%;
  right: 15%;
  width: 150px;
  animation-delay: 0s;
}

.code-block-2 {
  top: 50%;
  right: 5%;
  width: 120px;
  animation-delay: 2s;
}

.code-block-3 {
  bottom: 15%;
  right: 25%;
  width: 180px;
  animation-delay: 4s;
}

@keyframes code-float {
  0%, 100% {
    transform: translateY(0) rotateZ(0deg);
  }
  50% {
    transform: translateY(-20px) rotateZ(2deg);
  }
}

.code-line {
  height: 8px;
  background: linear-gradient(90deg, var(--secondary), transparent);
  border-radius: 4px;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: code-line-appear 1s ease-out forwards;
}

.code-line:nth-child(1) {
  width: 80%;
  animation-delay: 0.5s;
}

.code-line:nth-child(2) {
  width: 60%;
  animation-delay: 0.7s;
}

.code-line:nth-child(3) {
  width: 90%;
  animation-delay: 0.9s;
}

.code-line:nth-child(4) {
  width: 70%;
  animation-delay: 1.1s;
}

.code-line:last-child {
  margin-bottom: 0;
}

@keyframes code-line-appear {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    opacity: 0.6;
  }
}

/* Floating Tech Icons */
.tech-icon {
  position: absolute;
  font-size: 2rem;
  font-weight: 700;
  color: var(--secondary);
  text-shadow: 0 0 20px rgba(201, 198, 80, 0.5);
  animation: tech-float 8s ease-in-out infinite;
}

.tech-icon-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.tech-icon-2 {
  top: 60%;
  left: 5%;
  animation-delay: 2s;
}

.tech-icon-3 {
  bottom: 25%;
  left: 15%;
  animation-delay: 4s;
}

@keyframes tech-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
    opacity: 0.8;
  }
}

/* Enhanced responsive adjustments */
@media (max-width: 968px) {
  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .code-block,
  .tech-icon {
    display: none;
  }

  .geo-shape {
    opacity: 0.08;
  }

  .tree-branches,
  .grid-overlay {
    opacity: 0.5;
  }
}

@media (max-width: 640px) {
  .hero-stats {
    justify-content: center;
  }

  .particles {
    display: none;
  }

  .geometric-bg,
  .tree-branches,
  .grid-overlay {
    display: none;
  }
}
</style>
