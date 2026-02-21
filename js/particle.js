// Particle class for simulation
export class Particle {
    constructor(index, total, canvas) {
        this.index = index;
        this.total = total;
        this.canvas = canvas;
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
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
        const offsetX = (this.canvas.width - (cols * spacing)) / 2;
        const offsetY = this.canvas.height - Math.ceil(total / cols) * spacing - 20;

        const col = index % cols;
        const row = Math.floor(index / cols);

        this.targetX = offsetX + col * spacing;
        this.targetY = offsetY + row * spacing;
    }

    update(state, temp) {
        if (state === 'solid') {
            this.updateSolid(temp);
        } else if (state === 'liquid') {
            this.updateLiquid(temp);
        } else if (state === 'gas') {
            this.updateGas(temp);
        }
    }

    updateSolid(temp) {
        // Solid: particles move to grid positions and vibrate
        const vibration = Math.max(0.5, (temp + 50) / 50);

        // Move towards grid position
        this.x += (this.targetX - this.x) * 0.1;
        this.y += (this.targetY - this.y) * 0.1;

        // Add vibration
        this.x += (Math.random() - 0.5) * vibration;
        this.y += (Math.random() - 0.5) * vibration;
        this.size = 5;
    }

    updateLiquid(temp) {
        // Liquid: particles flow slowly
        const flowSpeed = (temp / 100) * 2;
        this.vx += (Math.random() - 0.5) * 0.5;
        this.vy += (Math.random() - 0.5) * 0.5;
        this.vx *= 0.95;
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
        if (this.x > this.canvas.width - this.size) {
            this.vx *= -0.5;
            this.x = this.canvas.width - this.size;
        }
        if (this.y > this.canvas.height - this.size) {
            this.vy *= -0.4;
            this.y = this.canvas.height - this.size;
            this.vx *= 0.95; // Friction on bottom
        }
        if (this.y < this.size) {
            this.vy *= -0.5;
            this.y = this.size;
        }

        this.baseX = this.x;
        this.baseY = this.y;
        this.size = 3;
    }

    updateGas(temp) {
        // Gas: particles move rapidly in all directions
        const gasSpeed = ((temp - 100) / 60) * 2 + 1.5;
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
        if (this.x > this.canvas.width - this.size) {
            this.vx = -Math.abs(this.vx);
            this.x = this.canvas.width - this.size;
        }
        if (this.y < this.size) {
            this.vy = Math.abs(this.vy);
            this.y = this.size;
        }
        if (this.y > this.canvas.height - this.size) {
            this.vy = -Math.abs(this.vy);
            this.y = this.canvas.height - this.size;
        }

        this.baseX = this.x;
        this.baseY = this.y;
        this.size = 2;
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
