# States of Matter - Nuxt.js Website

An SEO-optimized landing page built with Nuxt.js for the States of Matter interactive temperature simulator. Features bilingual support (Bengali/English) and modern, responsive design.

## Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI**: Beautiful gradient designs with smooth animations
- **Bilingual Support**: Content available in Bengali (বাংলা) and English
- **Performance**: Built with Nuxt 3 for optimal loading and performance
- **Accessibility**: Semantic HTML and ARIA-compliant components

## Project Structure

```
rafify/
├── app.vue              # Main landing page component
├── nuxt.config.ts       # Nuxt configuration with SEO settings
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
│
├── assets/
│   └── css/
│       └── main.css     # Global styles and CSS reset
│
├── public/              # Static assets (favicon, images)
├── server/              # Server-side code
├── .nuxt/               # Build files (auto-generated)
│
└── old-website/         # Original vanilla JS website (backup)
    ├── index.html
    ├── css/
    └── js/
```

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

The site will be available at:
- Local: http://localhost:3000/

## Production

Build the application for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## SEO Features

### Meta Tags
- Complete title and description tags
- Keywords for search engine optimization
- Author and robots directives
- Mobile-optimized viewport settings

### Social Media
- Open Graph tags for Facebook
- Twitter Card tags for Twitter
- Custom theme colors for mobile browsers

### Structured Data
- Schema.org WebApplication markup
- Proper JSON-LD implementation
- Educational application categorization

## Sections

1. **Hero Section**: Eye-catching introduction with animated particle previews
2. **Features Section**: Six key features with icons and descriptions
3. **How It Works**: Explanation of solid, liquid, and gas states
4. **CTA Section**: Call-to-action with link to simulator
5. **Footer**: Copyright and technology stack information

## Customization

### Colors
Edit the CSS variables in [app.vue](app.vue:173-180) or [main.css](assets/css/main.css) to change the color scheme:

```css
:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
  --accent: #06b6d4;
  --text: #1f2937;
  --text-light: #6b7280;
  --bg: #ffffff;
  --bg-light: #f9fafb;
}
```

### SEO Settings
Update meta tags in [nuxt.config.ts](nuxt.config.ts:6-42) to customize SEO information.

## Technologies

- **Nuxt 3**: Vue.js framework for production
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with animations

## Deployment

This Nuxt app can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect repository and deploy
- **Cloudflare Pages**: Connect and deploy
- **Node.js Server**: Use `npm run build` and serve `.output` directory

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Migration Notes

The original vanilla JavaScript website has been backed up to the [old-website/](old-website/) directory. The new Nuxt.js version provides:
- Better SEO capabilities
- Modern framework features
- Improved performance
- Easier maintenance and scalability

## License

MIT License - Feel free to use for educational and commercial purposes.

## Credits

Built with Nuxt.js for the States of Matter interactive simulator project.
