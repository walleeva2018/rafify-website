// Main application module
import { ParticleManager } from './particle-manager.js';
import { VisualUpdater } from './visual-updater.js';
import { UIController } from './ui-controller.js';

class TemperatureSimulator {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particleBox = document.querySelector('.particle-box');
        this.slider = document.getElementById('tempSlider');

        this.currentTemp = 0;
        this.currentState = 'solid';

        this.particleManager = new ParticleManager(this.canvas, this.ctx);
        this.visualUpdater = new VisualUpdater();
        this.uiController = new UIController();

        this.init();
    }

    init() {
        this.setupCanvas();
        this.setupEventListeners();
        this.particleManager.createParticles(100, 'solid');
        this.uiController.updateStateLabels('solid');
        this.animate();
    }

    setupCanvas() {
        const resizeCanvas = () => {
            this.canvas.width = this.particleBox.offsetWidth;
            this.canvas.height = this.particleBox.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    }

    setupEventListeners() {
        this.slider.addEventListener('input', (e) => this.handleSliderInput(e));
    }

    handleSliderInput(event) {
        const value = parseInt(event.target.value);
        this.currentTemp = value;
        this.uiController.updateTemperature(value);

        const previousState = this.currentState;

        // Determine state based on temperature
        if (value < 0) {
            this.currentState = 'solid';
            if (previousState !== 'solid') {
                this.particleManager.createParticles(100, 'solid');
            }
            this.uiController.updateStateLabels('solid');
            this.visualUpdater.updateVisualExample('solid', value);
        } else if (value >= 0 && value <= 100) {
            this.currentState = 'liquid';
            if (previousState !== 'liquid') {
                this.particleManager.createParticles(100, 'liquid');
            }
            this.uiController.updateStateLabels('liquid');
            this.visualUpdater.updateVisualExample('liquid', value);
        } else {
            this.currentState = 'gas';
            if (previousState !== 'gas') {
                this.particleManager.createParticles(120, 'gas');
            }
            this.uiController.updateStateLabels('gas');
            this.visualUpdater.updateVisualExample('gas', value);
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particleManager.update(this.currentState, this.currentTemp);
        this.particleManager.draw();

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TemperatureSimulator();
});
