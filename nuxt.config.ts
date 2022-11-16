
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    ssr: true,
    css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify'],
        // @ts-ignore
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    serverMiddleware: [
        // Will register file from project server-middleware directory to handle /api/* requests
        '~/server-middleware/index.ts'
    ],

    /*css: [
        '@/assets/css/main.css',
    ],*/
});