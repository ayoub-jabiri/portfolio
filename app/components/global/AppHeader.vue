<template>
    <header class="bg-[#2196F3] py-4 sticky top-0 z-11">
        <div class="container flex justify-between items-center text-white">
            <div class="logo">
                <nuxt-link to="/" class="text-2xl font-bold">Ayoub</nuxt-link>
            </div>
            <button
                class="md:hidden text-2xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                @click="toggleNav = true"
            >
                <i class="ri-menu-line"></i>
            </button>
            <nav :class="`${toggleNav ? 'right-0' : 'right-[-150%]'}`">
                <div
                    class="md:hidden text-black p-4 flex justify-between items-center border-b border-[#e4e4e4] mb-4"
                >
                    <span class="text-[#2196f3] text-2xl font-bold">Ayoub</span>
                    <button
                        class="text-3xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                        @click="toggleNav = false"
                    >
                        <i class="ri-close-line"></i>
                    </button>
                </div>
                <ul
                    class="flex justify-between items-center max-md:gap-3 md:gap-4"
                >
                    <li v-for="link in links" :key="link.title">
                        <nuxt-link
                            :to="link.section"
                            class="main-transition max-md:hover:text-[#2196f3] max-md:hover:bg-[#e4e4e4]"
                            @click="toggleNav = false"
                        >
                            {{ link.title }}
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";

const links = [
    {
        title: "Home",
        section: "/",
    },
    {
        title: "About",
        section: "#about",
    },
    {
        title: "Services",
        section: "#services",
    },
    {
        title: "Skills",
        section: "#skills",
    },
    {
        title: "Portfolio",
        section: "#portfolio",
    },
    {
        title: "Contact",
        section: "#contact",
    },
];

const toggleNav = ref(false);
</script>

<style scoped>
@media (max-width: 767px) {
    nav {
        position: fixed;
        top: 0;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        transition: right 0.3s;
    }
    nav ul {
        color: #000;
        flex-direction: column;
    }
    nav ul li {
        width: 100%;
    }
    nav ul li a {
        display: block;
        width: 80%;
        padding: 1rem;
        margin: 0 auto;
        border-bottom: 1px solid #e4e4e4;
    }
}
</style>
