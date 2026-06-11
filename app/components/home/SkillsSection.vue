<template>
    <section class="py-15" id="skills">
        <div class="container">
            <SectionHead :title="title" :desc="description" />
            <div id="skills-container" class="grid grid-cols-12 gap-4">
                <div
                    id="skill-box"
                    class="col-span-6 md:col-span-3 lg:col-span-2 flex justify-center items-center flex-col gap-2 p-4 bg-[#e4e4e4] rounded-md hover:bg-[#2196F3] hover:text-white main-transition"
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
        icon: "/imgs/skills/html5.png",
        title: "html",
    },
    {
        icon: "/imgs/skills/css3.png",
        title: "css",
    },
    {
        icon: "/imgs/skills/javascript.png",
        title: "javascript",
    },
    {
        icon: "/imgs/skills/sass.png",
        title: "sass",
    },
    {
        icon: "/imgs/skills/pug-js.png",
        title: "pug",
    },
    {
        icon: "/imgs/skills/bootstrap.png",
        title: "bootstrap",
    },
    {
        icon: "/imgs/skills/tailwindcss.png",
        title: "tailwindcss",
    },
    {
        icon: "/imgs/skills/gulp-js.png",
        title: "gulp js",
    },
    {
        icon: "/imgs/skills/jest.png",
        title: "jest",
    },
    {
        icon: "/imgs/skills/git.png",
        title: "git",
    },
    {
        icon: "/imgs/skills/github.png",
        title: "github",
    },
    {
        icon: "/imgs/skills/vue-js.png",
        title: "vue js",
    },
    {
        icon: "/imgs/skills/pinia.png",
        title: "pinia",
    },
    {
        icon: "/imgs/skills/vuetify.png",
        title: "vuetify",
    },
    {
        icon: "/imgs/skills/nuxt-js.png",
        title: "nuxt js",
    },
    {
        icon: "/imgs/skills/typescript.png",
        title: "typescript",
    },
    {
        icon: "/imgs/skills/figma.png",
        title: "figma",
    },
    {
        icon: "/imgs/skills/react.png",
        title: "react",
    },
    {
        icon: "/imgs/skills/redux.png",
        title: "redux",
    },
    {
        icon: "/imgs/skills/next.png",
        title: "next.js",
    },
    {
        icon: "/imgs/skills/node.png",
        title: "node.js",
    },
    {
        icon: "/imgs/skills/express.png",
        title: "express.js",
    },
    {
        icon: "/imgs/skills/mongodb.png",
        title: "mongodb",
    },
];
</script>
