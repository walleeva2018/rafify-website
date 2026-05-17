<template>
  <section class="media-narrative">
    <div class="container">
      <div class="narrative-kicker">Our Team</div>
      <div class="narrative-grid">
        <div class="narrative-copy">
          <h2>Experienced developers building world-class software</h2>
          <p>Our talented engineers combine years of expertise with a commitment to quality, delivering solutions that scale with your business needs.</p>
        </div>
        <div class="narrative-lines" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="media-strip">
        <div class="strip-item strip-video image-placeholder">
          <img src="/media/group1.jpg" alt="DataTree Technology team workspace" loading="lazy" />
        </div>
        <div class="strip-item image-placeholder">
          <img src="/media/group2.jpg" alt="Development team collaboration" loading="lazy" />
        </div>
        <div class="strip-item image-placeholder image-placeholder-alt">
          <img src="/media/group3.jpg" alt="Innovation and technology solutions" loading="lazy" />
        </div>
        <div class="strip-item image-placeholder">
          <img src="/media/group4.jpg" alt="Professional software development" loading="lazy" />
        </div>
      </div>
      <div class="capability-lines">
        <div class="capability-line">
          <span>01</span>
          <strong>Design the experience</strong>
        </div>
        <div class="capability-line">
          <span>02</span>
          <strong>Build the platform</strong>
        </div>
        <div class="capability-line">
          <span>03</span>
          <strong>Launch with momentum</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.media-narrative {
  padding: 7rem 0 8rem;
  background: var(--bg);
  color: white;
  border-top: 1px solid var(--border);
}

.narrative-kicker {
  color: var(--secondary);
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.narrative-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  gap: 4rem;
  align-items: end;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border);
}

.narrative-copy h2 {
  max-width: 850px;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.narrative-copy p {
  max-width: 560px;
  margin-top: 1.5rem;
  color: var(--text-light);
  font-size: 1.0625rem;
  line-height: 1.7;
}

.narrative-lines {
  display: grid;
  gap: 1.25rem;
}

.narrative-lines span {
  display: block;
  height: 1px;
  background: var(--border);
}

.media-strip {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr 1fr 0.9fr;
  gap: 1rem;
  margin-top: 1rem;
  align-items: end;
}

.strip-item {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.42);
  min-height: 320px;
}

.strip-video {
  min-height: 480px;
}

.strip-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(120deg, rgba(255, 255, 255, 0.14), transparent 34%),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 16px);
  opacity: 0.85;
  z-index: 1;
}

.strip-item img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.78;
}

.image-placeholder {
  background:
    linear-gradient(140deg, rgba(201, 198, 80, 0.32), transparent 48%),
    linear-gradient(320deg, rgba(60, 88, 38, 0.7), rgba(35, 36, 42, 0.96));
}

.image-placeholder-alt {
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.18), transparent 42%),
    linear-gradient(320deg, rgba(42, 55, 72, 0.72), rgba(25, 26, 31, 0.98));
}

.capability-lines {
  margin-top: 4rem;
  border-top: 1px solid var(--border);
}

.capability-line {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 2rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid var(--border);
  color: white;
}

.capability-line span {
  color: var(--text-lighter);
}

.capability-line strong {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
}

@media (max-width: 968px) {
  .narrative-grid,
  .media-strip {
    grid-template-columns: 1fr;
  }

  .strip-item,
  .strip-video {
    min-height: 320px;
  }
}

@media (max-width: 640px) {
  .media-narrative {
    padding: 5rem 0;
  }

  .capability-line {
    grid-template-columns: 54px 1fr;
  }
}
</style>
