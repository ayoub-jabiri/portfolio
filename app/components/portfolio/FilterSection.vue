<template>
    <div
        id="portfolio-filter"
        class="w-fit mx-auto mb-6 border border-[#e4e4e4]"
    >
        <button
            class="md:hidden w-[150px] p-2 flex justify-center items-center gap-3 hover:bg-[#e4e4e4] transition cursor-pointer"
            @click="toggleMobileFilter = true"
        >
            <i class="ri-filter-3-line"></i>
            <span>Filter</span>
        </button>
        <div
            class="flex justify-center items-center gap-5 p-3 max-md:bg-white max-md:fixed top-0 max-md:w-[150px] max-md:h-screen transition-[left_0.3s] md:flex-wrap max-md:flex-col max-md:shadow-md"
            :class="`${toggleMobileFilter ? 'left-0' : 'left-[-150%]'}`"
        >
            <button
                id="close-pop"
                class="md:hidden absolute top-2.5 right-2.5 text-3xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                @click="toggleMobileFilter = false"
            >
                <i class="ri-close-line"></i>
            </button>
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

const toggleMobileFilter = ref(false);

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
