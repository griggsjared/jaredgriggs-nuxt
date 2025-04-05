import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/google-fonts'],
  css: [
    '@/assets/styles.css',
  ],
  image: {
    dir: './assets/',
    densities: [1]
  },
  googleFonts: {
    families: {
      Figtree: {
        wght: '300..900'
      }
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
