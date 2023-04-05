export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    enableGlobalAppMiddleware: true,
  },
  runtimeConfig: {
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    },
  },
})
