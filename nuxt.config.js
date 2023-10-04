export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css' }
    ],
    script: [
      // { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/supabase'
  ],

  axios: {
    baseURL: 'https://exercisedb.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': process.env.HEADER_KEY,
      'X-RapidAPI-Host': process.env.HEADER_HOST
    }
  },

  auth: {
    strategies: {
      google: {
        clientId: '568918727826-i2gta5g7lj5bmjs2n0ohe3jgia40ut75.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'token id_token',
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
