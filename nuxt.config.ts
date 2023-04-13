export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    enableGlobalAppMiddleware: true,
  },
  runtimeConfig: {
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
    API_ROUTE_SECRET: process.env.API_ROUTE_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
