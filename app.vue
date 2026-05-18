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
let treeAnimationFrame = 0
let treeDanceFrame = 0
let handleTreeResize
let handleTreeScroll
let handleTreeViewportChange
let treeViewportQuery
let treeCanvasRunning = false

// Refs for new interactive elements
const treeCanvas = ref(null)
let treeCtx = null
let treeGrowth = 0

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
const branchLean = (depth, side, dancePhase) => {
  const baseLean = 0.3 + ((depth * 31 + side * 13) % 10) / 100
  const sway = Math.sin(dancePhase + depth * 0.72 + side * 1.4) * (0.035 + depth * 0.002)
  return baseLean + sway
}
const branchScale = (depth, side) => 0.66 + ((depth * 17 + side * 7) % 8) / 100

const getTreeProgress = () => {
  const earlyScrollRange = window.innerHeight * 2.2
  return clamp(0.22 + window.scrollY / earlyScrollRange, 0.22, 1)
}

const getPageScrollProgress = () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  if (scrollHeight <= 0) return 0.04
  return clamp(0.04 + (window.scrollY / scrollHeight) * 0.96, 0.04, 1)
}

const getSnakePoint = (width, height, index, total, dancePhase) => {
  const t = index / (total - 1)
  const y = -height * 0.015 + t * height * 1.1
  const baseX = width * 0.5
  const broadWave = Math.sin(t * Math.PI * 2.35 + dancePhase * 0.18) * width * 0.32
  const secondaryWave = Math.sin(t * Math.PI * 5.1 + dancePhase * 0.12) * width * 0.035
  return {
    x: clamp(baseX + broadWave + secondaryWave, width * 0.12, width * 0.88),
    y
  }
}

const drawSnakeBranch = (ctx, width, height, scrollProgress, dancePhase) => {
  const pointCount = 96
  const points = Array.from({ length: pointCount }, (_, index) =>
    getSnakePoint(width, height, index, pointCount, dancePhase)
  )
  const visibleCount = Math.max(2, Math.floor((pointCount - 1) * scrollProgress) + 1)
  const visiblePoints = points.slice(0, visibleCount)
  const partialProgress = (scrollProgress * (pointCount - 1)) % 1

  if (visibleCount < pointCount && visiblePoints.length > 1) {
    const current = visiblePoints[visiblePoints.length - 1]
    const next = points[visibleCount]
    visiblePoints[visiblePoints.length - 1] = {
      x: current.x + (next.x - current.x) * partialProgress,
      y: current.y + (next.y - current.y) * partialProgress
    }
  }

  const branchGradient = ctx.createLinearGradient(width * 0.12, 0, width * 0.88, height)
  branchGradient.addColorStop(0, `rgba(240, 235, 102, ${0.34 + scrollProgress * 0.1})`)
  branchGradient.addColorStop(0.52, `rgba(201, 198, 80, ${0.3 + scrollProgress * 0.1})`)
  branchGradient.addColorStop(1, `rgba(124, 179, 66, ${0.22 + scrollProgress * 0.08})`)

  ctx.save()
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = branchGradient
  ctx.lineWidth = Math.max(2.5, width * 0.0035)
  ctx.shadowColor = 'rgba(201, 198, 80, 0.2)'
  ctx.shadowBlur = 12

  ctx.beginPath()
  visiblePoints.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y)
      return
    }
    const previous = visiblePoints[index - 1]
    const midX = (previous.x + point.x) / 2
    const midY = (previous.y + point.y) / 2
    ctx.quadraticCurveTo(previous.x, previous.y, midX, midY)
  })
  ctx.stroke()

  ctx.shadowBlur = 0
  ctx.lineWidth = Math.max(1, width * 0.0014)
  ctx.strokeStyle = `rgba(240, 235, 102, ${0.18 + scrollProgress * 0.1})`
  ctx.fillStyle = `rgba(240, 235, 102, ${0.2 + scrollProgress * 0.1})`

  for (let i = 9; i < visiblePoints.length - 3; i += 9) {
    const point = visiblePoints[i]
    const next = visiblePoints[i + 1]
    const direction = i % 2 === 0 ? 1 : -1
    const angle = Math.atan2(next.y - point.y, next.x - point.x) + direction * 1.05
    const branchLength = height * (0.045 + (i % 3) * 0.006)
    const sway = Math.sin(dancePhase + i) * 0.12
    const endX = point.x + Math.cos(angle + sway) * branchLength
    const endY = point.y + Math.sin(angle + sway) * branchLength

    ctx.beginPath()
    ctx.moveTo(point.x, point.y)
    ctx.quadraticCurveTo(
      point.x + Math.cos(angle + sway) * branchLength * 0.5,
      point.y + Math.sin(angle + sway) * branchLength * 0.45,
      endX,
      endY
    )
    ctx.stroke()

    ctx.beginPath()
    ctx.ellipse(endX, endY, 3.2, 1.8, angle + sway, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.restore()
}

// Draw organic growing tree
const drawTree = (ctx, x, y, length, angle, depth, scrollProgress, dancePhase) => {
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

  drawTree(ctx, endX, endY, length * branchScale(depth, -1), angle - branchLean(depth, -1, dancePhase), depth - 1, scrollProgress, dancePhase)
  drawTree(ctx, endX, endY, length * branchScale(depth, 1), angle + branchLean(depth, 1, dancePhase), depth - 1, scrollProgress, dancePhase)
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
  treeCtx.setTransform(1, 0, 0, 1, 0, 0)
  treeCtx.scale(dpr, dpr)
}

const renderTree = (timestamp = performance.now()) => {
  if (!treeCtx || !treeCanvas.value) return

  const canvas = treeCanvas.value
  treeCtx.clearRect(0, 0, canvas.width, canvas.height)

  const scrollProgress = getTreeProgress()
  const snakeProgress = getPageScrollProgress()
  const dancePhase = timestamp * 0.0014

  // Update tree growth based on scroll
  treeGrowth = scrollProgress

  drawSnakeBranch(treeCtx, window.innerWidth, window.innerHeight, snakeProgress, dancePhase)

  // Draw multiple trees at different positions (growing from bottom to top)
  const trees = [
    { x: window.innerWidth * 0.1, y: window.innerHeight * 0.9, depth: 8 },
    { x: window.innerWidth * 0.85, y: window.innerHeight * 0.85, depth: 7 },
    { x: window.innerWidth * 0.5, y: window.innerHeight * 1.2, depth: 9 }
  ]

  trees.forEach(tree => {
    const growthDepth = Math.floor(tree.depth * scrollProgress)
    if (growthDepth > 0) {
      const rootSway = Math.sin(dancePhase + tree.x * 0.01) * 0.075
      drawTree(treeCtx, tree.x, tree.y, 60 * scrollProgress, -Math.PI / 2 + rootSway, growthDepth, scrollProgress, dancePhase)
    }
  })

}

const scheduleTreeRender = () => {
  if (treeAnimationFrame) return
  treeAnimationFrame = requestAnimationFrame((timestamp) => {
    treeAnimationFrame = 0
    renderTree(timestamp)
  })
}

const animateTreeDance = (timestamp) => {
  renderTree(timestamp)
  treeDanceFrame = requestAnimationFrame(animateTreeDance)
}

const startTreeCanvas = () => {
  if (treeCanvasRunning || !treeCanvas.value) return

  treeCanvasRunning = true
  initTreeCanvas()
  renderTree()
  treeDanceFrame = requestAnimationFrame(animateTreeDance)

  handleTreeResize = () => {
    initTreeCanvas()
    renderTree()
  }
  handleTreeScroll = () => {
    renderTree()
  }

  window.addEventListener('resize', handleTreeResize, { passive: true })
  window.addEventListener('scroll', handleTreeScroll, { passive: true })
}

const stopTreeCanvas = () => {
  if (!treeCanvasRunning) return

  if (treeAnimationFrame) {
    cancelAnimationFrame(treeAnimationFrame)
    treeAnimationFrame = 0
  }

  if (treeDanceFrame) {
    cancelAnimationFrame(treeDanceFrame)
    treeDanceFrame = 0
  }

  if (handleTreeResize) {
    window.removeEventListener('resize', handleTreeResize)
    handleTreeResize = undefined
  }

  if (handleTreeScroll) {
    window.removeEventListener('scroll', handleTreeScroll)
    handleTreeScroll = undefined
  }

  treeCanvasRunning = false
  treeCtx = null
}

// GSAP Animations
onMounted(() => {
  if (prefersReducedMotion()) return

  treeViewportQuery = window.matchMedia('(min-width: 969px)')
  const desktopMotion = treeViewportQuery.matches

  if (desktopMotion) startTreeCanvas()

  handleTreeViewportChange = (event) => {
    if (event.matches) {
      startTreeCanvas()
      return
    }

    stopTreeCanvas()
  }

  treeViewportQuery.addEventListener('change', handleTreeViewportChange)

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

    if (desktopMotion) {
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
    }

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

    ScrollTrigger.matchMedia({
      '(min-width: 969px)': () => {
        const processTrack = document.querySelector('.process-track')
        const processViewport = document.querySelector('.process-viewport')
        const processSteps = gsap.utils.toArray('.timeline-step')

        if (!processTrack || !processViewport || processSteps.length === 0) return

        const processDistance = () => Math.max(0, processTrack.scrollWidth - processViewport.clientWidth)

        const processTween = gsap.to(processTrack, {
          x: () => -processDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: '.scroll-reel',
            start: 'top top',
            end: () => `+=${processDistance() + window.innerHeight * 0.85}`,
            scrub: 0.7,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        })

        gsap.to('.process-progress-fill, .timeline-line', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.scroll-reel',
            start: 'top top',
            end: () => `+=${processDistance() + window.innerHeight * 0.85}`,
            scrub: 0.7,
            invalidateOnRefresh: true
          }
        })

        processSteps.forEach((step) => {
          const content = step.querySelector('.step-content')
          const features = step.querySelectorAll('.step-features li')

          gsap.to(content, {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              containerAnimation: processTween,
              start: 'left 62%',
              end: 'left 34%',
              scrub: 0.5
            }
          })

          gsap.from(features, {
            x: 18,
            opacity: 0,
            stagger: 0.08,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              containerAnimation: processTween,
              start: 'left 58%',
              once: true
            }
          })

          ScrollTrigger.create({
            trigger: step,
            containerAnimation: processTween,
            start: 'left center',
            end: 'right center',
            toggleClass: {
              targets: step,
              className: 'is-active'
            }
          })
        })
      },
      '(max-width: 968px)': () => {
        gsap.utils.toArray('.timeline-step').forEach((step) => {
          gsap.to(step.querySelector('.step-content'), {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 82%',
              once: true
            }
          })
        })
      }
    })

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

        if (desktopMotion) {
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
        }
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

      if (desktopMotion) {
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
      }
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

      if (desktopMotion) {
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
      }
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

  if (treeViewportQuery && handleTreeViewportChange) {
    treeViewportQuery.removeEventListener('change', handleTreeViewportChange)
  }

  stopTreeCanvas()

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

  .container {
    padding: 0 1rem;
  }

  .scroll-progress {
    height: 2px;
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
  z-index: 25;
  opacity: 0.28;
  mix-blend-mode: screen;
}

@media (max-width: 640px) {
  .container {
    padding: 0 1rem;
  }
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

@media (max-width: 640px) {
  .landing-page {
    animation: none;
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
