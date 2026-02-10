<template>
    <section class="relative bg-[#2196F3] h-[calc(100vh-64px)] text-white">
        <ClientOnly>
            <vue-particles
                id="tsparticles"
                :options="particleOptions"
                class="absolute top-0 left-0 w-full h-full"
            />
        </ClientOnly>
        <div
            class="container h-full flex flex-col justify-center text-center relative"
        >
            <div class="content">
                <h1 class="text-5xl font-bold mb-8">
                    Hello, I am Ayoub Jabiri a <br />
                    Front End Developer
                </h1>
                <a
                    download
                    href="/pdf/ayoub-jabiri-cv-en.pdf"
                    class="main-btn bg-[#ff9800] text-white p-4"
                >
                    Download CV
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const particleOptions = {
    // CRITICAL: Disable fullScreen to keep it inside the section
    fullScreen: { enable: false },

    fpsLimit: 60,
    particles: {
        number: { value: 200, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.3,
        },
        move: { enable: true, speed: 1.5 },
        size: { value: { min: 1, max: 3 } },
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
        },
    },
    background: {
        color: "transparent",
    },
};
</script>
