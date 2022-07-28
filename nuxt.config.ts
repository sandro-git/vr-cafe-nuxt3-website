import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/sanity',
      ],
      sanity: {
        projectId: "byaeh17d",
        apiVersion: '2022-03-25'
      },
})
