
// import path from "path";
// import fs from "fs";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "unspoiled",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, '../cert/ca-key.pem')),
  //     cert: fs.readFileSync(path.resolve(__dirname, '../cert/ca-cert.pem'))
  //   }
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [{ src: "@/plugins/forward-set-cookies.js", mode: "server" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL || "http://localhost:5000/"
  },

  // publicRuntimeConfig: {
  //   API_URL: "http://localhost:5000/"
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    // "@nuxtjs/dotenv",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: process.env.API_URL,
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: "empty",
      };

      // ....
    },
  },
};
