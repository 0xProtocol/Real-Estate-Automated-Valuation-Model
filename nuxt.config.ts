// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    build: {
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

    css: [
        '@/assets/css/main.css',
    ],
});