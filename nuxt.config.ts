// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: false },
    vite: {
        plugins: [tailwindcss() as any],
        build: {
            sourcemap: false,
        },
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    nitro: {
        preset: "github-pages",
    },
    app: {
        baseURL: "/portfolio/", // Example: '/my-portfolio/'
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css",
                },
            ],
        },
    },
    css: ["@/assets/css/main.css"],
    modules: ["@pinia/nuxt"],
});
