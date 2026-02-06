// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: false },
    vite: {
        plugins: [tailwindcss()],
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css",
                },
            ],
        },
    },
    css: ["./app/assets/css/main.css"],
    modules: ["@pinia/nuxt"],
});
