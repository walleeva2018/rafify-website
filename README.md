# পদার্থের অবস্থা / States of Matter

An interactive temperature simulator that visualizes how particles behave in different states of matter (solid, liquid, and gas). Built with vanilla JavaScript and CSS, featuring bilingual support (Bengali/English).

## Features

- 🌡️ Interactive temperature slider (-50°C to 160°C)
- 🎨 Real-time particle simulation showing solid, liquid, and gas states
- 🖼️ Visual examples with animations (ice cube, water, steam)
- 🌍 Bilingual interface (Bengali/English)
- 📱 Responsive design for mobile and desktop
- 🎯 Educational descriptions of particle behavior

## Project Structure

```
rafify/
├── index.html              # Main HTML file
├── README.md              # Project documentation
│
├── css/                   # Stylesheets (modular)
│   ├── base.css          # Base styles and resets
│   ├── header.css        # Header section styles
│   ├── particle-box.css  # Particle simulation box
│   ├── visual-examples.css # Visual examples panel
│   ├── ice-cube.css      # Ice cube visual styles
│   ├── water-glass.css   # Water glass visual styles
│   ├── steam.css         # Steam visual styles
│   ├── controls.css      # Temperature controls
│   └── responsive.css    # Responsive design rules
│
└── js/                    # JavaScript modules
    ├── app.js            # Main application entry point
    ├── constants.js      # Constants and configurations
    ├── particle.js       # Particle class
    ├── particle-manager.js # Particle management
    ├── visual-updater.js # Visual examples updater
    └── ui-controller.js  # UI state management
```

## How It Works

### Temperature Ranges

- **Below 0°C (Solid)**: Particles arrange in a grid pattern and vibrate in place
- **0-100°C (Liquid)**: Particles flow around and settle at the bottom with gravity
- **Above 100°C (Gas)**: Particles spread rapidly throughout the entire space

### Visual Effects

#### Ice Cube (Solid)
- Shows melting effects when temperature approaches 0°C (above -10°C)
- Water droplets start dripping from the ice
- Puddle forms underneath

#### Water (Liquid)
- Glass wobbles with temperature-responsive animation
- Animated waves on the water surface
- Bubbles appear above 70°C (pre-boiling effect)

#### Steam (Gas)
- Multiple steam particles rising continuously
- Particles expand and fade as they rise
- Animation speed increases with temperature

## File Descriptions

### CSS Modules

- **base.css**: Global resets, body styles, and container layout
- **header.css**: Header section with bilingual title and explanation
- **particle-box.css**: Canvas container for particle simulation
- **visual-examples.css**: Side panel for real-world examples
- **ice-cube.css**: Ice cube animation with melting effects
- **water-glass.css**: Water glass with waves and bubbles
- **steam.css**: Rising steam particle animations
- **controls.css**: Temperature slider and state display
- **responsive.css**: Mobile and tablet breakpoints

### JavaScript Modules

- **app.js**: Main application orchestrator
  - Initializes all components
  - Handles animation loop
  - Manages slider events

- **constants.js**: Configuration and data
  - State descriptions (Bengali/English)
  - Color schemes

- **particle.js**: Particle behavior
  - Solid state: Grid positioning and vibration
  - Liquid state: Flow, gravity, and collision
  - Gas state: Rapid movement and expansion

- **particle-manager.js**: Particle lifecycle
  - Creates particles based on state
  - Updates particle positions
  - Renders particles on canvas

- **visual-updater.js**: Visual effects
  - Switches between ice/water/steam
  - Updates melting, bubbling, steam intensity
  - Temperature-responsive animations

- **ui-controller.js**: Interface updates
  - State labels and descriptions
  - Temperature display
  - Color theming

## Usage

Simply open `index.html` in a modern web browser. No build process required!

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server
python -m http.server 8000
# Then visit: http://localhost:8000
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies

- **HTML5 Canvas** for particle rendering
- **CSS3** for animations and visual effects
- **ES6 Modules** for JavaScript organization
- **Vanilla JavaScript** (no frameworks)

## Educational Value

This project demonstrates:
- States of matter (solid, liquid, gas)
- Particle theory and kinetic energy
- Phase transitions (melting, evaporation)
- Temperature effects on molecular behavior

Perfect for science education, interactive learning, and understanding physical states!

## License

MIT License - Feel free to use for educational purposes

## Credits

Created with Bengali language support for bilingual education.
