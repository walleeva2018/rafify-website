// Particle manager for creating and managing particles
import { Particle } from './particle.js';

export class ParticleManager {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.particles = [];
        this.currentState = 'solid';
    }

    createParticles(count, state) {
        this.particles = [];
        for (let i = 0; i < count; i++) {
            const particle = new Particle(i, count, this.canvas);

            if (state === 'solid') {
                // Start in grid position for solids
                particle.setGridPosition(i, count);
                particle.x = particle.targetX;
                particle.y = particle.targetY;
                particle.baseX = particle.targetX;
                particle.baseY = particle.targetY;
            } else if (state === 'liquid') {
                // Start at bottom for liquids
                particle.x = Math.random() * this.canvas.width;
                particle.y = this.canvas.height - Math.random() * 150;
            } else if (state === 'gas') {
                // Start spread out for gas
                particle.x = Math.random() * this.canvas.width;
                particle.y = Math.random() * this.canvas.height;
            }

            this.particles.push(particle);
        }

        // Update grid positions for all particles
        if (state === 'solid') {
            this.particles.forEach((p, i) => p.setGridPosition(i, count));
        }
    }

    update(state, temp) {
        this.currentState = state;
        this.particles.forEach((particle, index) => {
            // Update grid positions for solid state
            if (state === 'solid') {
                particle.setGridPosition(index, this.particles.length);
            }
            particle.update(state, temp);
        });
    }

    draw() {
        this.particles.forEach(particle => particle.draw(this.ctx));
    }

    getParticleCount() {
        return this.particles.length;
    }
}
