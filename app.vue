<template>
  <div class="landing-page">
    <NuxtRouteAnnouncer />
    <div class="scroll-progress" aria-hidden="true"></div>

    <!-- Growing Tree Canvas -->
    <canvas ref="treeCanvas" class="tree-canvas" aria-hidden="true"></canvas>

    <Navbar />
    <Hero />
    <MediaNarrative />
    <ScrollReel />
    <Services />
    <Industries />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// SEO metadata
useHead({
  title: 'DataTree Technology - Custom Software Development | Healthcare & FinTech',
  link: [
    {
      rel: 'icon',
      type: 'image/jpeg',
      href: '/main-logo.jpg'
    }
  ],
  meta: [
    {
      name: 'description',
      content: 'Professional software development company specializing in Healthcare and FinTech solutions. Web development, mobile apps, API integration, and data analytics. 50+ qualified developers ready to build your project.'
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
        '@type': 'Organization',
        name: 'DataTree Technology',
        description: 'Custom software development for Healthcare and FinTech industries',
        url: 'https://datatree.tech',
        logo: 'https://datatree.tech/main-logo.jpg',
        sameAs: [
          'https://linkedin.com/company/datatree',
          'https://github.com/datatree'
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '50'
        }
      })
    }
  ]
})

let animationContext
let heroPointerMove

// Refs for new interactive elements
const treeCanvas = ref(null)
let treeCtx = null
let treeGrowth = 0

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Draw organic growing tree
const drawTree = (ctx, x, y, length, angle, depth, scrollProgress) => {
  if (depth === 0 || length < 2) return

  const endX = x + length * Math.cos(angle)
  const endY = y + length * Math.sin(angle)

  // Create gradient for branch
  const gradient = ctx.createLinearGradient(x, y, endX, endY)
  gradient.addColorStop(0, `rgba(201, 198, 80, ${0.6 * scrollProgress})`)
  gradient.addColorStop(1, `rgba(124, 179, 66, ${0.4 * scrollProgress})`)

  ctx.strokeStyle = gradient
  ctx.lineWidth = depth * 1.5
  ctx.lineCap = 'round'

  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(endX, endY)
  ctx.stroke()

  // Add leaves at branch tips
  if (depth <= 3) {
    const leafGradient = ctx.createRadialGradient(endX, endY, 0, endX, endY, depth * 3)
    leafGradient.addColorStop(0, `rgba(240, 235, 102, ${0.8 * scrollProgress})`)
    leafGradient.addColorStop(1, `rgba(201, 198, 80, 0)`)

    ctx.fillStyle = leafGradient
    ctx.beginPath()
    ctx.arc(endX, endY, depth * 3, 0, Math.PI * 2)
    ctx.fill()
  }

  // Recursive branching with organic variation
  const angleVariation = 0.3 + Math.random() * 0.2
  const lengthVariation = 0.67 + Math.random() * 0.1

  drawTree(ctx, endX, endY, length * lengthVariation, angle - angleVariation, depth - 1, scrollProgress)
  drawTree(ctx, endX, endY, length * lengthVariation, angle + angleVariation, depth - 1, scrollProgress)
}

// Initialize and animate tree canvas
const initTreeCanvas = () => {
  if (!treeCanvas.value) return

  const canvas = treeCanvas.value
  const dpr = window.devicePixelRatio || 1

  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  canvas.style.width = `${window.innerWidth}px`
  canvas.style.height = `${window.innerHeight}px`

  treeCtx = canvas.getContext('2d')
  treeCtx.scale(dpr, dpr)
}

const animateTree = () => {
  if (!treeCtx || !treeCanvas.value) return

  const canvas = treeCanvas.value
  treeCtx.clearRect(0, 0, canvas.width, canvas.height)

  // Calculate scroll progress
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = window.scrollY
  const scrollProgress = Math.min(scrolled / scrollHeight, 1)

  // Update tree growth based on scroll
  treeGrowth = scrollProgress

  // Draw multiple trees at different positions (growing from bottom to top)
  const trees = [
    { x: window.innerWidth * 0.1, y: window.innerHeight * 0.9, depth: 8 },
    { x: window.innerWidth * 0.85, y: window.innerHeight * 0.85, depth: 7 },
    { x: window.innerWidth * 0.5, y: window.innerHeight * 1.2, depth: 9 }
  ]

  trees.forEach(tree => {
    const growthDepth = Math.floor(tree.depth * scrollProgress)
    if (growthDepth > 0) {
      drawTree(treeCtx, tree.x, tree.y, 60 * scrollProgress, -Math.PI / 2, growthDepth, scrollProgress)
    }
  })

  requestAnimationFrame(animateTree)
}

// GSAP Animations
onMounted(() => {
  if (prefersReducedMotion()) return

  // Initialize new interactive features
  initTreeCanvas()
  animateTree()

  // Handle resize
  const handleResize = () => {
    initTreeCanvas()
  }
  window.addEventListener('resize', handleResize)

  // Cleanup function stored for unmount
  window.__cleanupIntervals = () => {
    window.removeEventListener('resize', handleResize)
  }

  animationContext = gsap.context(() => {
    gsap.set('.hero-content, .hero-content > *, .hero-visual, .media-composition, .service-card, .testimonial-card, .section-header', {
      opacity: 1
    })

    gsap.to('.scroll-progress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.25
      }
    })

    const heroTimeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        duration: 0.9
      }
    })

    heroTimeline
      .from('.navbar', {
        y: -24,
        opacity: 0,
        duration: 0.7
      })
      .from(
        '.hero-content > *',
        {
          y: 34,
          opacity: 0,
          stagger: 0.12,
          clearProps: 'transform,opacity'
        },
        '-=0.25'
      )
      .from(
        '.media-composition',
        {
          y: 44,
          opacity: 0,
          scale: 0.96,
          rotateX: -8,
          transformOrigin: '50% 50%',
          clearProps: 'opacity'
        },
        '-=0.65'
      )
      .from(
        '.media-composition .line',
        {
          scaleX: 0,
          scaleY: 0,
          opacity: 0,
          stagger: 0.08,
          transformOrigin: '0% 0%',
          duration: 0.7
        },
        '-=0.5'
      )

    gsap.to('.media-composition', {
      y: -12,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    heroPointerMove = (event) => {
      const { innerWidth, innerHeight } = window
      const x = (event.clientX / innerWidth - 0.5) * 14
      const y = (event.clientY / innerHeight - 0.5) * -10

      gsap.to('.media-composition', {
        rotateY: x,
        rotateX: y,
        duration: 0.7,
        ease: 'power2.out'
      })

      gsap.to('.tree-pattern', {
        x: x * 1.6,
        y: y * 1.6,
        duration: 1,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', heroPointerMove)

    gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
      .to('.hero-content', {
        y: -80,
        opacity: 0.35,
        ease: 'none'
      }, 0)
      .to('.hero-visual', {
        y: 120,
        scale: 0.92,
        ease: 'none'
      }, 0)
      .to('.tree-pattern', {
        y: 180,
        opacity: 0.14,
        ease: 'none'
      }, 0)

    gsap.timeline({
      scrollTrigger: {
        trigger: '.media-narrative',
        start: 'top 72%',
        end: 'bottom top',
        scrub: 1
      }
    })
      .fromTo('.narrative-copy h2', {
        yPercent: 16
      }, {
        yPercent: -8,
        ease: 'none'
      }, 0)
      .fromTo('.media-strip .strip-item:nth-child(1)', {
        yPercent: 16
      }, {
        yPercent: -12,
        ease: 'none'
      }, 0)
      .fromTo('.media-strip .strip-item:nth-child(2)', {
        yPercent: -10
      }, {
        yPercent: 10,
        ease: 'none'
      }, 0)
      .fromTo('.media-strip .strip-item:nth-child(3)', {
        yPercent: 10
      }, {
        yPercent: -18,
        ease: 'none'
      }, 0)

    ScrollTrigger.matchMedia({
      '(min-width: 969px)': () => {
        ScrollTrigger.create({
          trigger: '.media-strip',
          start: 'top 18%',
          end: '+=520',
          pin: true,
          pinSpacing: true
        })

        const reelTrack = document.querySelector('.reel-track')
        const reelViewport = document.querySelector('.reel-viewport')

        if (reelTrack && reelViewport) {
          const reelDistance = () => reelTrack.scrollWidth - reelViewport.clientWidth

          gsap.to(reelTrack, {
            x: () => -reelDistance(),
            ease: 'none',
            scrollTrigger: {
              trigger: '.scroll-reel',
              start: 'top top',
              end: () => `+=${reelDistance() + window.innerHeight}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true
            }
          })
        }
      }
    })

    gsap.utils.toArray('.narrative-lines span').forEach((line) => {
      gsap.fromTo(line, {
        scaleX: 0,
        transformOrigin: '0% 50%'
      }, {
        scaleX: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 88%',
          end: 'top 55%',
          scrub: 0.7
        }
      })
    })

    gsap.utils.toArray('.capability-line').forEach((line) => {
      gsap.fromTo(line, {
        clipPath: 'inset(0 100% 0 0)'
      }, {
        clipPath: 'inset(0 0% 0 0)',
        ease: 'none',
        scrollTrigger: {
          trigger: line,
          start: 'top 88%',
          end: 'top 55%',
          scrub: 0.7
        }
      })
    })

    gsap.utils.toArray('.services, .industries, .testimonials, .contact').forEach((section) => {
      gsap.fromTo(section, {
        backgroundPosition: '50% 0%'
      }, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    const revealOnScroll = (targets, options = {}) => {
      gsap.utils.toArray(targets).forEach((target, index) => {
        gsap.from(target, {
          x: options.x ?? 0,
          y: options.y ?? 34,
          opacity: 0,
          scale: options.scale ?? 1,
          duration: options.duration ?? 0.75,
          delay: (options.stagger ?? 0.06) * (index % (options.groupSize ?? 4)),
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: target,
            start: options.start ?? 'top 82%',
            once: true
          }
        })
      })
    }

    // Advanced Timeline Animations
    gsap.utils.toArray('.timeline-step').forEach((step) => {
      const isLeft = step.classList.contains('step-left')

      gsap.from(step.querySelector('.step-content'), {
        x: isLeft ? -60 : 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          once: true
        }
      })

      gsap.from(step.querySelector('.connector-dot'), {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          once: true
        }
      })

      gsap.from(step.querySelector('.step-badge'), {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          once: true
        }
      })

      gsap.from(step.querySelectorAll('.step-features li'), {
        x: isLeft ? -20 : 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 75%',
          once: true
        }
      })
    })

    // Animated timeline line drawing
    const timelineLine = document.querySelector('.timeline-line')
    if (timelineLine) {
      gsap.from(timelineLine, {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 70%',
          once: true
        }
      })
    }

    // Services section header
    gsap.from('.services .section-header h2', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services',
        start: 'top 80%',
        once: true
      }
    })

    gsap.from('.services .section-header p', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services',
        start: 'top 80%',
        once: true
      }
    })

    // Service cards with stagger and 3D perspective
    const serviceCards = gsap.utils.toArray('.service-card')
    if (serviceCards.length > 0) {
      serviceCards.forEach((card, index) => {
        // Initial reveal with organic bounce
        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.85,
          rotationX: -15,
          rotationY: index % 2 === 0 ? -8 : 8,
          duration: 1,
          delay: index * 0.15,
          ease: 'elastic.out(1, 0.6)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
          }
        })

        // Scroll-based 3D tilt effect
        gsap.to(card, {
          rotationX: 5,
          rotationY: index % 2 === 0 ? 3 : -3,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })

        // Add magnetic hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            rotationX: 0,
            rotationY: 0,
            z: 50,
            duration: 0.4,
            ease: 'power2.out'
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            z: 0,
            duration: 0.4,
            ease: 'power2.out'
          })
        })

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = (y - centerY) / 10
          const rotateY = (centerX - x) / 10

          gsap.to(card, {
            rotationX: -rotateX,
            rotationY: rotateY,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })
    }

    // Pricing badge pulse animation
    const pricingBadge = document.querySelector('.pricing-badge')
    if (pricingBadge) {
      gsap.from(pricingBadge, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.pricing-highlight',
          start: 'top 80%',
          once: true
        }
      })

      gsap.to('.pricing-amount', {
        textShadow: '0 0 20px rgba(201, 198, 80, 0.6)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }

    // Value proposition highlights
    gsap.from('.value-highlight', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.value-prop',
        start: 'top 85%',
        once: true
      }
    })

    // Media strip images with parallax
    gsap.utils.toArray('.media-strip .strip-item').forEach((item, index) => {
      const direction = index % 2 === 0 ? 1 : -1

      gsap.from(item, {
        y: 80 * direction,
        opacity: 0,
        scale: 0.95,
        rotation: direction * 2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          once: true
        }
      })

      // Parallax on scroll
      gsap.to(item, {
        y: -30 * direction,
        scrollTrigger: {
          trigger: '.media-strip',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    })

    // Tech badges floating animation
    gsap.utils.toArray('.tech-badge').forEach((badge, index) => {
      gsap.to(badge, {
        y: -5,
        duration: 2 + (index % 3) * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.1
      })
    })


    // Testimonials section header
    gsap.from('.testimonials .section-header h2', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 80%',
        once: true
      }
    })

    gsap.from('.testimonials .section-header p', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 80%',
        once: true
      }
    })

    // Testimonials cards with organic entrance
    const testimonialCards = gsap.utils.toArray('.testimonial-card')
    testimonialCards.forEach((card, index) => {
      // Organic reveal animation
      gsap.from(card, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotation: index % 2 === 0 ? -5 : 5,
        duration: 1.2,
        delay: index * 0.15,
        ease: 'elastic.out(1, 0.7)',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          once: true
        }
      })

      // Parallax effect on scroll
      gsap.to(card, {
        y: index % 2 === 0 ? -30 : 30,
        rotation: index % 2 === 0 ? 2 : -2,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      // Hover glow effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.03,
          boxShadow: '0 20px 60px rgba(201, 198, 80, 0.3)',
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

    // Contact form elements
    gsap.from('.contact-item', {
      x: -40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-details',
        start: 'top 80%',
        once: true
      }
    })

    gsap.from('.contact-form-container', {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-form-container',
        start: 'top 80%',
        once: true
      }
    })

    gsap.from('.form-group', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 75%',
        once: true
      }
    })

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      ScrollTrigger.create({
        start: 'top -80',
        onEnter: () => navbar.classList.add('navbar--scrolled'),
        onLeaveBack: () => navbar.classList.remove('navbar--scrolled')
      })
    }

    revealOnScroll('.narrative-copy, .capability-line', { y: 38, scale: 0.98, groupSize: 3 })
    revealOnScroll('.feature-item', { y: 24, groupSize: 3 })
    revealOnScroll('.tech-category', { x: 24, y: 0, groupSize: 4 })

    // Scroll-based section background color shifts
    gsap.utils.toArray('.services, .testimonials').forEach((section, index) => {
      gsap.to(section, {
        backgroundColor: index % 2 === 0 ? 'rgba(31, 44, 24, 0.3)' : 'rgba(26, 27, 31, 1)',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: 2
        }
      })
    })

    // Smooth wave effect on scroll for section headers
    gsap.utils.toArray('.section-header h2').forEach((header) => {
      const text = header.textContent
      const words = text.split(' ')
      header.innerHTML = words.map(word => `<span class="word-reveal">${word}</span>`).join(' ')

      gsap.from(header.querySelectorAll('.word-reveal'), {
        opacity: 0,
        y: 30,
        rotationX: -90,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          once: true
        }
      })
    })

    gsap.utils.toArray('.stat-number').forEach((stat) => {
      const label = stat.textContent.trim()
      const endValue = Number.parseInt(label, 10)
      const suffix = label.replace(String(endValue), '')
      const counter = { value: 0 }

      gsap.to(counter, {
        value: endValue,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stat,
          start: 'top 88%',
          once: true
        },
        onUpdate: () => {
          stat.textContent = `${Math.round(counter.value)}${suffix}`
        },
        onComplete: () => {
          stat.textContent = label
        }
      })
    })

    ScrollTrigger.refresh()
  })
})

onUnmounted(() => {
  if (heroPointerMove) {
    window.removeEventListener('mousemove', heroPointerMove)
  }

  if (window.__cleanupIntervals) {
    window.__cleanupIntervals()
  }

  animationContext?.revert()
})
</script>

<style>
/* Tree Theme - Black & Dark Green */
.landing-page {
  --logo-dark: #1a1b1f;
  --primary: #2d5016;
  --primary-dark: #1f3a0f;
  --primary-light: #3a6b1e;
  --secondary: #c9c650;
  --accent-green: #4caf50;
  --accent-leaf: #f0eb66;
  --success: #66bb6a;
  --text: #ffffff;
  --text-light: rgba(255, 255, 255, 0.78);
  --text-lighter: rgba(255, 255, 255, 0.62);
  --text-on-dark: #ffffff;
  --bg: var(--logo-dark);
  --bg-light: #222329;
  --bg-dark: #111216;
  --bg-dark-light: #222329;
  --bg-dark-green: #1f2c18;
  --bg-medium-dark: #24262d;
  --surface: #202127;
  --surface-raised: #292b32;
  --border: rgba(255, 255, 255, 0.12);
  --border-dark: rgba(201, 198, 80, 0.28);
  --shadow: rgba(0, 0, 0, 0.35);
  --shadow-lg: rgba(0, 0, 0, 0.55);
  --shadow-green: rgba(201, 198, 80, 0.18);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
  background: var(--bg);
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Improved typography defaults */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 0;
}

p {
  margin: 0;
  line-height: 1.7;
}

/* Prevent text from being too large on mobile */
@media (max-width: 640px) {
  .landing-page {
    font-size: 15px;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--secondary);
  transform: scaleX(0);
  transform-origin: 0 50%;
  z-index: 2000;
  box-shadow: 0 0 18px rgba(201, 198, 80, 0.5);
}

/* Growing Tree Canvas */
.tree-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
  mix-blend-mode: screen;
}

/* Enhanced scroll-based background gradients */
.landing-page {
  background: linear-gradient(180deg,
    var(--bg-dark) 0%,
    var(--bg-dark-green) 20%,
    var(--bg-dark) 40%,
    var(--primary-dark) 60%,
    var(--bg-dark) 80%,
    var(--bg-dark) 100%
  );
  background-size: 100% 300%;
  animation: gradient-flow 30s ease infinite;
}

@keyframes gradient-flow {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
}

/* Word reveal animation styling */
.word-reveal {
  display: inline-block;
  margin-right: 0.3em;
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Mobile optimizations - hide heavy effects */
@media (max-width: 968px) {
  .tree-canvas {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tree-canvas {
    display: none;
  }

  .landing-page {
    animation: none;
  }
}
</style>
