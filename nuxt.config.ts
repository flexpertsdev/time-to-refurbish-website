export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3147
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Playfair Display': [400, 500, 600, 700, 800, 900]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },

  app: {
    head: {
      title: 'Time To Refurbish Ltd - Professional Building & Renovation Services Bromley',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Expert building renovation, refurbishment & extension services in Bromley. Bathroom renovations, home extensions, electrical & plumbing. 16+ 5-star reviews. Call 07883 300410' },
        { name: 'keywords', content: 'building renovation bromley, refurbishment services bromley, bathroom renovation bromley, home extensions bromley, building contractors bromley, property renovation south london, Time To Refurbish' },
        { property: 'og:title', content: 'Time To Refurbish Ltd - Professional Building Services Bromley' },
        { property: 'og:description', content: 'Expert building renovation and refurbishment services in Bromley. Bathroom renovations, extensions, and complete property refurbishment.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_GB' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#2c3e50' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Time To Refurbish Ltd',
            'description': 'Professional building renovation and refurbishment services in Bromley',
            'telephone': '07883300410',
            'email': 'timetorefurbish@gmail.com',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Bromley',
              'addressRegion': 'Greater London',
              'addressCountry': 'GB'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '51.4062',
              'longitude': '0.0149'
            },
            'openingHours': 'Mo-Fr 08:00-18:00, Sa 09:00-16:00',
            'priceRange': '££-£££',
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '5',
              'reviewCount': '16'
            }
          })
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  
  runtimeConfig: {
    public: {
      siteUrl: 'https://timetorefurbish.co.uk',
      siteName: 'Time To Refurbish Ltd',
      siteDescription: 'Professional building renovation and refurbishment services in Bromley',
      language: 'en-GB'
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/',
        '/about',
        '/services',
        '/services/kitchens',
        '/services/bathrooms',
        '/services/wardrobes',
        '/services/renovations',
        '/services/spa',
        '/services/smart-home',
        '/portfolio',
        '/contact',
        '/privacy',
        '/terms'
      ]
    }
  }
})
