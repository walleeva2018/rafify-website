// UI Controller for state labels and descriptions
import { stateDescriptions, stateColors } from './constants.js';

export class UIController {
    constructor() {
        this.stateLabel = document.getElementById('stateLabel');
        this.stateLabelEn = document.getElementById('stateLabelEn');
        this.stateDescription = document.getElementById('stateDescription');
        this.particleInfo = document.querySelector('.particle-info .info-text');
        this.tempDisplay = document.getElementById('tempDisplay');
    }

    updateStateLabels(state) {
        if (!this.stateLabel || !this.stateLabelEn || !this.stateDescription || !this.particleInfo) {
            return;
        }

        const description = stateDescriptions[state];
        const color = stateColors[state];

        this.stateLabel.textContent = description.bengali;
        this.stateLabelEn.textContent = description.english;
        this.stateDescription.textContent = description.description;
        this.particleInfo.textContent = description.particleInfo;

        this.stateLabel.style.color = color;
        this.stateLabelEn.style.color = color;
        this.stateDescription.style.borderLeftColor = color;
    }

    updateTemperature(temp) {
        if (this.tempDisplay) {
            this.tempDisplay.textContent = temp + '°C';
        }
    }
}
