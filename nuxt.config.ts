import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: 'Andrew De Forest | Portfolio',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      meta: [
        {
          name: 'description',
          content: `I'm Andrew De Forest — a full-stack web developer crafting fast, functional, and user-friendly web apps.`
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:title', content: 'Andrew De Forest – Full-Stack Web Developer' },
        {
          property: 'og:description',
          content: 'Explore the work, projects, and contact info of Andrew De Forest, a full-stack developer.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://andydeforest.dev' },
        { property: 'og:image', content: 'https://andydeforest.dev/images/og-preview.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Andrew De Forest – Full-Stack Web Developer' },
        {
          name: 'twitter:description',
          content: 'Explore the work, projects, and contact info of Andrew De Forest, a full-stack developer.'
        },
        { name: 'twitter:image', content: 'https://andydeforest.dev/images/og-preview.jpg' },
        { name: 'theme-color', content: '#f9f5f2' },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  },

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts', '@pinia/nuxt'],

  css: ['@/assets/scss/app.scss'],

  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "bulma/sass/utilities/mixins" as mixins;
            @use "@/assets/scss/variables" as *;
          `
        }
      }
    }
  },

  googleFonts: {
    download: false,
    inject: true,
    families: {
      Cabin: [400, 500],
      'Noto+Sans': [900]
    }
  },

  imports: {
    autoImport: true,
    dirs: ['stores'] // auto-import pinia stores
  }
});
