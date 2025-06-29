// Enhanced JavaScript for Modern Interactions
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
    initializeNavbarEffects();
    initializeMobileMenu();
    initializeParticleSystem();
    initializeCounterAnimations();
    initializeFormHandling();
    initializeAdvancedEffects();
    initializeTeamShowcase();
});

// Team Showcase Carousel
function initializeTeamShowcase() {
    const teamCards = document.querySelectorAll('.team-card');
    let currentIndex = 0;
    
    function showNextTeamMember() {
        teamCards[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % teamCards.length;
        teamCards[currentIndex].classList.add('active');
    }
    
    // Auto-rotate team members every 4 seconds
    setInterval(showNextTeamMember, 4000);
    
    // Manual navigation on click
    teamCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            teamCards[currentIndex].classList.remove('active');
            currentIndex = index;
            teamCards[currentIndex].classList.add('active');
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Navbar Effects
function initializeNavbarEffects() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll for desktop
        if (window.innerWidth > 768) {
            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.getElementById('navLinks');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}

// Advanced Particle System
function initializeParticleSystem() {
    const particleContainer = document.body;
    const particles = [];
    const maxParticles = window.innerWidth < 768 ? 20 : 50; // Reduce particles on mobile

    function createParticle() {
        if (particles.length >= maxParticles) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const colors = ['#00d4ff', '#7c3aed', '#ff0080', '#00ff88'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${Math.random() * window.innerWidth}px;
            top: ${window.innerHeight + 10}px;
            box-shadow: 0 0 ${size * 2}px ${color};
        `;

        particleContainer.appendChild(particle);
        particles.push(particle);

        animateParticle(particle);
    }

    function animateParticle(particle) {
        let posY = window.innerHeight + 10;
        let posX = parseFloat(particle.style.left);
        const speed = Math.random() * 2 + 1;
        const drift = (Math.random() - 0.5) * 2;

        function animate() {
            posY -= speed;
            posX += drift;
            
            particle.style.top = posY + 'px';
            particle.style.left = posX + 'px';
            particle.style.opacity = posY / window.innerHeight;

            if (posY < -10 || posX < -10 || posX > window.innerWidth + 10) {
                particle.remove();
                const index = particles.indexOf(particle);
                if (index > -1) particles.splice(index, 1);
            } else {
                requestAnimationFrame(animate);
            }
        }
        animate();
    }

    // Create particles periodically (less frequent on mobile)
    const particleInterval = window.innerWidth < 768 ? 1000 : 500;
    setInterval(createParticle, particleInterval);
}

// Counter Animations
function initializeCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                if (target === 99.9) {
                    counter.textContent = '99.9';
                } else {
                    counter.textContent = Math.floor(target).toLocaleString();
                }
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => counterObserver.observe(counter));
}

// Form Handling with Your Custom API
function initializeFormHandling() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Basic validation
        if (!validateForm(form)) {
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        // Prepare data for your API
        const apiData = {
            subject: `New Contact Form Submission from ${name} - ${service || 'General Inquiry'}`,
            content: generateEmailContent(name, email, phone, service, message)
        };
        
        // Animate button
        button.textContent = 'Sending...';
        button.style.background = 'linear-gradient(45deg, #00ff88, #00d4ff)';
        button.disabled = true;
        
        try {
            await sendToYourAPI(apiData);
            showNotification('Message sent successfully! 🎉 We\'ll get back to you soon.', 'success');
            form.reset();
            
        } catch (error) {
            console.error('Error sending message:', error);
            showNotification('Failed to send message. Please try again or contact us directly.', 'error');
        } finally {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
        }
    });
}

// Generate formatted email content
function generateEmailContent(name, email, phone, service, message) {
    const timestamp = new Date().toLocaleString();
    
    return `
📧 NEW CONTACT FORM SUBMISSION - RAFIFY WEBSITE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT INFORMATION:
   • Name: ${name}
   • Email: ${email}
   • Phone: ${phone || 'Not provided'}
   • Service Interest: ${service || 'General Inquiry'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 SUBMISSION DETAILS:
   • Timestamp: ${timestamp}
   • Source: Rafify Website Contact Form
   • User Agent: ${navigator.userAgent.split(')')[0]})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ NEXT STEPS:
1. Respond within 24 hours
2. CC the team if needed
3. Update CRM system
4. Schedule follow-up if required

This message was sent via the Rafify contact form.
    `.trim();
}

// Send to your custom API
async function sendToYourAPI(data) {
    // Replace with your actual API endpoint
    const API_ENDPOINT = 'https://email-server-gray.vercel.app/api/send-email'; // Update this URL
    
    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'zubairahmedrafi37@gmail.com',
          subject: 'New contact Application',
          text: data.content,
        })

    });
    
    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`API Error ${response.status}: ${errorData}`);
    }
    
    // Handle different response types
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return await response.json();
    } else {
        return await response.text();
    }
}





// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff0080';
        } else {
            input.style.borderColor = '';
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#ff0080';
            }
        }
    });
    
    return isValid;
}

// Advanced Effects
function initializeAdvancedEffects() {
    // Mouse follower effect (desktop only)
    if (window.innerWidth > 768) {
        createMouseFollower();
    }
    
    // Parallax scrolling for orbs
    initializeParallax();
    
    // Interactive feature cards
    enhanceFeatureCards();
    
    // Dynamic background effects (desktop only)
    if (window.innerWidth > 768) {
        createDynamicBackground();
    }
}

// Mouse Follower (Desktop only)
function createMouseFollower() {
    const follower = document.createElement('div');
    follower.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX - 10 + 'px';
        follower.style.top = e.clientY - 10 + 'px';
    });

    // Expand on hover over interactive elements
    document.querySelectorAll('a, button, .feature-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.transform = 'scale(1)';
        });
    });
}

// Parallax Effect
function initializeParallax() {
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        document.querySelectorAll('.orb').forEach((orb, index) => {
            const speed = (index + 1) * 0.3;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 16));
}

// Enhanced Feature Cards
function enhanceFeatureCards() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(-15px) rotateX(5deg)';
                
                // Add glow effect
                this.style.boxShadow = `
                    0 30px 60px rgba(0, 212, 255, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `;
            } else {
                this.style.transform = 'translateY(-10px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            this.style.boxShadow = '';
        });

        // 3D tilt effect (desktop only)
        if (window.innerWidth > 768) {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `
                    translateY(-15px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                    scale(1.02)
                `;
            });
        }
    });
}

// Dynamic Background (Desktop only)
function createDynamicBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -3;
        pointer-events: none;
    `;
    document.body.appendChild(canvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = [];
    const numNodes = 30; // Reduced for better performance

    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            
            // Draw connections
            nodes.forEach(otherNode => {
                const dx = node.x - otherNode.x;
                const dy = node.y - otherNode.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.stroke();
                }
            });
            
            // Draw node
            ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    animate();
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(45deg, #00ff88, #00d4ff)' : 'linear-gradient(45deg, #ff0080, #7c3aed)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(20px);
        max-width: 90vw;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Utility function for throttling
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        const navLinks = document.getElementById('navLinks');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        
        // Reset feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    }
});

// Performance optimization for mobile
if (window.innerWidth < 768) {
    // Disable some animations on mobile for better performance
    const style = document.createElement('style');
    style.textContent = `
        .orb {
            animation: none;
        }
        .grid-overlay {
            animation: none;
        }
    `;
    document.head.appendChild(style);
}

// Easter egg - Click logo 5 times
let clickCount = 0;
document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    clickCount++;
    if (clickCount === 5) {
        showNotification('🎉 Easter egg activated! You found the secret!', 'success');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        clickCount = 0;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s ease;
    `;
    loader.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 3px solid rgba(0, 212, 255, 0.3);
            border-top: 3px solid #00d4ff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
});

// Handle orientation change on mobile
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        // Close mobile menu on orientation change
        const navLinks = document.getElementById('navLinks');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        
        // Recalculate positions if needed
        if (window.innerWidth < 768) {
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => {
                const left = parseFloat(particle.style.left);
                if (left > window.innerWidth) {
                    particle.remove();
                }
            });
        }
    }, 500);
});

// Intersection Observer for better performance
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Pause animations when not visible
const pageVisibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Resume animations
            document.body.style.animationPlayState = 'running';
        } else {
            // Pause animations
            document.body.style.animationPlayState = 'paused';
        }
    });
}, observerOptions);

// Observe the body for visibility
pageVisibilityObserver.observe(document.body);