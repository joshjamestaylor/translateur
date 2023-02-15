// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    app: {
       //baseURL: '/projects/translateur/dist/'
    },
    runtimeConfig: {
      // Keys within public, will be also exposed to the client-side
      public: {
        TRANSLATE_API_KEY: 'AIzaSyCdsq8n5azkLNpLc045i9rYOngjbyL57CY',
      }
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      
})
