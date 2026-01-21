<template>
    <div
        id="portfolio-filter"
        class="w-fit p-3 mx-auto mb-6 border border-[#e4e4e4] flex justify-center items-center gap-5 flex-wrap"
    >
        <button
            v-for="category in categories"
            :key="category.title"
            class="w-[70px] py-2 rounded-md hover:bg-[#e4e4e4] transition cursor-pointer"
            :class="category.active ? 'bg-[#e4e4e4]' : ''"
            @click="handleCategory"
        >
            {{ category.title }}
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Main Variables

const categories = ref([
    {
        title: "All",
        active: true,
    },
    {
        title: "JS",
        active: false,
    },
    {
        title: "Vue.js",
        active: false,
    },
    {
        title: "Nuxt.js",
        active: false,
    },
]);

const currentCategory = ref("All");

const emit = defineEmits(["sendCategory"]);

// Start Methods

const handleCategory = (e) => {
    // Handle Filter Active Class
    let currentBtnCategory = e.target.textContent;

    for (let category of categories.value) {
        category.title == currentBtnCategory
            ? (category.active = true)
            : (category.active = false);
    }

    // Emitter
    currentCategory.value = currentBtnCategory;
    emit("sendCategory", currentCategory.value);
};
</script>
