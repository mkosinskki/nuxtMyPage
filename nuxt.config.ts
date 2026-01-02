import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
  ],

  site: {
    url: 'https://www.marcinkosinski.dev',
  },

  googleFonts: {
    families: {
      Anton: true,
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Rubik: '300..900',
    },
    display: 'swap', 
    prefetch: true, 
    preconnect: true,
  }
});