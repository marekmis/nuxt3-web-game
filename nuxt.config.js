// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "min-h-screen",
      },
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "theme-color", content: "#ffffff" },
        { property: "og:title", content: "Marek Mis | Frontend Developer" },
        {
          property: "og:description",
          content:
            "Frontend Developer with a passion for good design and ❤️ Vue.js",
        },
        {
          property: "og:image",
          content: "https://marekmis.com/og/lets-ride-1260x630-v1.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/meta/favicon.ico",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/meta/favicon.svg",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/meta/apple-icon-180x180.png",
        },
        {
          rel: "manifest",
          href: "/meta/site.webmanifest",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  experimental: {
    viewTransition: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-gtag",
    "@vueuse/nuxt",
    "@nuxtjs/device",
  ],
  sourcemap: {
    server: true,
    client: true,
  },
});
