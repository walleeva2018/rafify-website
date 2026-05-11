// Visual example updater
export class VisualUpdater {
    updateVisualExample(state, temp) {
        this.switchActiveVisual(state);

        if (state === 'solid') {
            this.updateIceCube(temp);
        } else if (state === 'liquid') {
            this.updateWater(temp);
        } else if (state === 'gas') {
            this.updateSteam(temp);
        }
    }

    switchActiveVisual(state) {
        const visualItems = document.querySelectorAll('.visual-item');
        visualItems.forEach(item => {
            if (item.dataset.state === state) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    updateIceCube(temp) {
        const iceCube = document.getElementById('iceCube');
        if (!iceCube) return;

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

    updateWater(temp) {
        const waterLevel = document.getElementById('waterLevel');
        if (!waterLevel) return;

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

    updateSteam(temp) {
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
