// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'States of Matter - Interactive Temperature Simulator | পদার্থের অবস্থা',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'Interactive educational simulator demonstrating how particles behave in solid, liquid, and gas states. Learn about states of matter with real-time temperature control and bilingual support (Bengali/English).' },
        { name: 'keywords', content: 'states of matter, physics simulation, temperature simulator, educational tool, particle behavior, solid liquid gas, science education, bilingual education' },
        { name: 'author', content: 'Rafify' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'States of Matter - Interactive Temperature Simulator' },
        { property: 'og:description', content: 'Interactive educational simulator demonstrating how particles behave in solid, liquid, and gas states.' },
        { property: 'og:site_name', content: 'States of Matter' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'States of Matter - Interactive Temperature Simulator' },
        { name: 'twitter:description', content: 'Interactive educational simulator demonstrating how particles behave in solid, liquid, and gas states.' },

        // Mobile
        { name: 'theme-color', content: '#2563eb' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
