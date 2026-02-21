document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('tempSlider');
    const display = document.getElementById('tempDisplay');
    const stateLabel = document.getElementById('stateLabel');
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    const particleBox = document.querySelector('.particle-box');

    // Set canvas size to match container
    function resizeCanvas() {
        canvas.width = particleBox.offsetWidth;
        canvas.height = particleBox.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles = [];
    let currentTemp = 0;
    let currentState = 'solid';

    // State descriptions in Bengali
    const stateDescriptions = {
        solid: {
            bengali: 'কঠিন',
            english: 'Solid',
            description: 'কঠিন অবস্থায় কণাগুলি একটি নির্দিষ্ট গঠনে সাজানো থাকে এবং শুধুমাত্র তাদের স্থানে কম্পন করে।',
            particleInfo: '❄️ কণাগুলি জালিকার মতো সাজানো | Particles arranged in a grid pattern'
        },
        liquid: {
            bengali: 'তরল',
            english: 'Liquid',
            description: 'তরল অবস্থায় কণাগুলি একে অপরের চারপাশে প্রবাহিত হতে পারে কিন্তু একসাথে থাকে।',
            particleInfo: '💧 কণাগুলি প্রবাহিত হয় এবং নিচে জমা হয় | Particles flow and settle at bottom'
        },
        gas: {
            bengali: 'বায়বীয়',
            english: 'Gas',
            description: 'বায়বীয় অবস্থায় কণাগুলি দ্রুত চলাচল করে এবং সম্পূর্ণ স্থান জুড়ে ছড়িয়ে পড়ে।',
            particleInfo: '💨 কণাগুলি দ্রুত গতিতে সব জায়গায় ছড়িয়ে পড়ে | Particles spread rapidly everywhere'
        }
    };

    // Particle class
    class Particle {
        constructor(index, total) {
            this.index = index;
            this.total = total;
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.baseX = this.x;
            this.baseY = this.y;
            this.vx = 0;
            this.vy = 0;
            this.size = 4;
            this.targetX = this.x;
            this.targetY = this.y;
        }

        setGridPosition(index, total) {
            // Calculate grid position for solid state
            const cols = Math.ceil(Math.sqrt(total));
            const spacing = 20;
            const offsetX = (canvas.width - (cols * spacing)) / 2;
            const offsetY = canvas.height - Math.ceil(total / cols) * spacing - 20;

            const col = index % cols;
            const row = Math.floor(index / cols);

            this.targetX = offsetX + col * spacing;
            this.targetY = offsetY + row * spacing;
        }

        update(state, temp) {
            if (state === 'solid') {
                // Solid: particles move to grid positions and vibrate
                const vibration = Math.max(0.5, (temp + 50) / 50);

                // Move towards grid position
                this.x += (this.targetX - this.x) * 0.1;
                this.y += (this.targetY - this.y) * 0.1;

                // Add vibration
                this.x += (Math.random() - 0.5) * vibration;
                this.y += (Math.random() - 0.5) * vibration;
                this.size = 5;
            } else if (state === 'liquid') {
                // Liquid: particles flow slowly
                const flowSpeed = (temp / 100) * 2; // Speed increases with temp
                this.vx += (Math.random() - 0.5) * 0.5;
                this.vy += (Math.random() - 0.5) * 0.5;
                this.vx *= 0.95; // Damping
                this.vy *= 0.95;

                this.x += this.vx * flowSpeed;
                this.y += this.vy * flowSpeed;

                // Gravity effect
                this.vy += 0.15;

                // Keep particles in bounds with bounce
                if (this.x < this.size) {
                    this.vx *= -0.5;
                    this.x = this.size;
                }
                if (this.x > canvas.width - this.size) {
                    this.vx *= -0.5;
                    this.x = canvas.width - this.size;
                }
                if (this.y > canvas.height - this.size) {
                    this.vy *= -0.4;
                    this.y = canvas.height - this.size;
                    this.vx *= 0.95; // Friction on bottom
                }
                if (this.y < this.size) {
                    this.vy *= -0.5;
                    this.y = this.size;
                }

                this.baseX = this.x;
                this.baseY = this.y;
                this.size = 3;
            } else if (state === 'gas') {
                // Gas: particles move rapidly in all directions
                const gasSpeed = ((temp - 100) / 60) * 2 + 1.5; // Speed increases with temp
                this.vx += (Math.random() - 0.5) * 1.5;
                this.vy += (Math.random() - 0.5) * 1.5;
                this.vx *= 0.98;
                this.vy *= 0.98;

                this.x += this.vx * gasSpeed;
                this.y += this.vy * gasSpeed;

                // Float upward tendency
                this.vy -= 0.15;

                // Bounce off walls
                if (this.x < this.size) {
                    this.vx = Math.abs(this.vx);
                    this.x = this.size;
                }
                if (this.x > canvas.width - this.size) {
                    this.vx = -Math.abs(this.vx);
                    this.x = canvas.width - this.size;
                }
                if (this.y < this.size) {
                    this.vy = Math.abs(this.vy);
                    this.y = this.size;
                }
                if (this.y > canvas.height - this.size) {
                    this.vy = -Math.abs(this.vy);
                    this.y = canvas.height - this.size;
                }

                this.baseX = this.x;
                this.baseY = this.y;
                this.size = 2;
            }
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    function createParticles(count, state) {
        particles = [];
        for (let i = 0; i < count; i++) {
            const particle = new Particle(i, count);

            if (state === 'solid') {
                // Start in grid position for solids
                particle.setGridPosition(i, count);
                particle.x = particle.targetX;
                particle.y = particle.targetY;
                particle.baseX = particle.targetX;
                particle.baseY = particle.targetY;
            } else if (state === 'liquid') {
                // Start at bottom for liquids
                particle.x = Math.random() * canvas.width;
                particle.y = canvas.height - Math.random() * 150;
            } else if (state === 'gas') {
                // Start spread out for gas
                particle.x = Math.random() * canvas.width;
                particle.y = Math.random() * canvas.height;
            }

            particles.push(particle);
        }

        // Update grid positions for all particles
        if (state === 'solid') {
            particles.forEach((p, i) => p.setGridPosition(i, count));
        }
    }

    // Initial particles
    createParticles(100, 'solid');

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            // Update grid positions for solid state
            if (currentState === 'solid') {
                particle.setGridPosition(index, particles.length);
            }
            particle.update(currentState, currentTemp);
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Update visual examples
    function updateVisualExample(state, temp) {
        const visualItems = document.querySelectorAll('.visual-item');
        visualItems.forEach(item => {
            if (item.dataset.state === state) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update ice cube melting effect
        if (state === 'solid') {
            const iceCube = document.getElementById('iceCube');
            const droplets = iceCube.querySelectorAll('.water-droplet');
            const puddle = iceCube.querySelector('.ice-puddle');

            // Show melting only above -10°C (from -10°C to 0°C)
            if (temp > -10) {
                const meltAmount = (temp + 10) / 10; // 0 to 1

                // Show droplets and make them active
                droplets.forEach(d => {
                    d.classList.add('active');
                    d.style.opacity = meltAmount;
                });
                puddle.style.opacity = meltAmount * 0.6;

                // Make ice more transparent as it melts
                iceCube.style.opacity = 1 - (meltAmount * 0.3);
            } else {
                // Hide droplets completely
                droplets.forEach(d => {
                    d.classList.remove('active');
                    d.style.opacity = 0;
                });
                puddle.style.opacity = 0;
                iceCube.style.opacity = 1;
            }
        }

        // Update water movement based on temperature
        if (state === 'liquid') {
            const waterLevel = document.getElementById('waterLevel');
            const glass = waterLevel.parentElement;

            // More movement at higher temperatures
            const movement = (temp / 100) * 2;
            glass.style.animationDuration = Math.max(1, 3 - movement) + 's';

            // Show bubbles at higher temperatures (above 70°C)
            const bubbles = waterLevel.querySelectorAll('.bubble');
            if (temp > 70) {
                const bubbleIntensity = (temp - 70) / 30; // 0 to 1
                bubbles.forEach(b => b.style.opacity = bubbleIntensity);
            } else {
                bubbles.forEach(b => b.style.opacity = 0);
            }
        }

        // Update steam intensity based on temperature
        if (state === 'gas') {
            const steamParticles = document.querySelectorAll('.steam-particle');
            const intensity = Math.min(1, (temp - 100) / 60); // 0 to 1

            steamParticles.forEach((particle, index) => {
                const baseOpacity = 0.7;
                particle.style.opacity = baseOpacity + (intensity * 0.3);

                // Make steam rise faster at higher temps
                const baseDuration = 2 + (index * 0.1);
                particle.style.animationDuration = Math.max(1, baseDuration - intensity) + 's';
            });
        }
    }

    // Slider event
    slider.addEventListener('input', function() {
        const value = parseInt(this.value);
        currentTemp = value;
        display.textContent = value + '°C';

        // Determine state
        const previousState = currentState;

        if (value < 0) {
            currentState = 'solid';
            updateStateLabels('solid');
            if (previousState !== 'solid') {
                createParticles(100, 'solid');
            }
            updateVisualExample('solid', value);
        } else if (value >= 0 && value <= 100) {
            currentState = 'liquid';
            updateStateLabels('liquid');
            if (previousState !== 'liquid') {
                createParticles(100, 'liquid');
            }
            updateVisualExample('liquid', value);
        } else {
            currentState = 'gas';
            updateStateLabels('gas');
            if (previousState !== 'gas') {
                createParticles(120, 'gas');
            }
            updateVisualExample('gas', value);
        }
    });

    // Update state labels
    function updateStateLabels(state) {
        const stateLabel = document.getElementById('stateLabel');
        const stateLabelEn = document.getElementById('stateLabelEn');
        const stateDescription = document.getElementById('stateDescription');
        const particleInfo = document.querySelector('.particle-info .info-text');

        const colors = {
            solid: '#0066cc',
            liquid: '#00aa66',
            gas: '#cc6600'
        };

        stateLabel.textContent = stateDescriptions[state].bengali;
        stateLabelEn.textContent = stateDescriptions[state].english;
        stateDescription.textContent = stateDescriptions[state].description;
        particleInfo.textContent = stateDescriptions[state].particleInfo;

        stateLabel.style.color = colors[state];
        stateLabelEn.style.color = colors[state];
        stateDescription.style.borderLeftColor = colors[state];
    }

    // Initialize state labels
    updateStateLabels('solid');
});
