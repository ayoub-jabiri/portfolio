<template>
    <section class="py-15" id="skills">
        <div class="container">
            <SectionHead :title="title" :desc="description" />
            <div id="skills-container" class="grid grid-cols-12 gap-4">
                <div
                    id="skill-box"
                    class="col-span-6 md:col-span-3 lg:col-span-2 flex justify-center items-center flex-col gap-2 p-4 bg-[#e4e4e4] rounded-md hover:bg-[#2196F3] hover:text-white transition"
                    v-for="skill in skills"
                    :key="skill.title"
                >
                    <img
                        :src="skill.icon"
                        :alt="`${skill.title} Icon`"
                        class="w-[50px]"
                    />
                    <h3 class="text-[15px] uppercase">{{ skill.title }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const title = "Skills",
    description = "This is Skills Section";

const skills = [
    {
        icon: "/imgs/html5.png",
        title: "html",
    },
    {
        icon: "/imgs/css3.png",
        title: "css",
    },
    {
        icon: "/imgs/javascript.png",
        title: "javascript",
    },
    {
        icon: "/imgs/sass.png",
        title: "sass",
    },
    {
        icon: "/imgs/pug-js.png",
        title: "pug",
    },
    {
        icon: "/imgs/bootstrap.png",
        title: "bootstrap",
    },
    {
        icon: "/imgs/tailwindcss.png",
        title: "tailwindcss",
    },
    {
        icon: "/imgs/gulp-js.png",
        title: "gulp js",
    },
    {
        icon: "/imgs/jest.png",
        title: "jest",
    },
    {
        icon: "/imgs/git.png",
        title: "git",
    },
    {
        icon: "/imgs/github.png",
        title: "github",
    },
    {
        icon: "/imgs/vue-js.png",
        title: "vue js",
    },
    {
        icon: "/imgs/pinia.png",
        title: "pinia",
    },
    {
        icon: "/imgs/vuetify.png",
        title: "vuetify",
    },
    {
        icon: "/imgs/nuxt-js.png",
        title: "nuxt js",
    },
    {
        icon: "/imgs/typescript.png",
        title: "typescript",
    },
    {
        icon: "/imgs/figma.png",
        title: "figma",
    },
];
</script>
