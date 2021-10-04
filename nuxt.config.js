export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'La Haus más que una inmobiliaria ¡Compra finca raíz a tu ritmo!',
    htmlAttrs: {
      lang: 'es-CO',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '¿Buscas una inmobiliaria? Tenemos una buena noticia, somos mucho más. La tecnología y oferta de finca raíz harán más fácil la compra de tu vivienda nueva.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/main.css', '~assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],

  // Image module
  image: {},

  // I18n module
  i18n: {
    defaultLocale: 'es',
    lazy: true,
    langDir: 'lang/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en', dir: 'ltr' },
      { code: 'es', iso: 'es-CO', file: 'es', dir: 'ltr' },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { baseURL: process.env.API_URL },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
