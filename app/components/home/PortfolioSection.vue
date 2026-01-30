<template>
    <section class="py-15" id="portfolio">
        <div class="container">
            <SectionHead :title="title" :desc="description" />
            <FilterSection @sendCategory="updateCategory" />
            <PortfolioProjects :currentCategory="currentCategory" />
            <nuxt-link
                to="/projects"
                class="main-btn block text-[#2196f3] bg-transparent hover:bg-[#2196f3] hover:text-white border border-[#2196f3] p-3.5 mt-6 mx-auto transition"
            >
                View More
            </nuxt-link>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const title = "Portfolio",
    description = "This is Portfolio Section";

const currentCategory = ref("All");

// Start Methods

const updateCategory = (data) => {
    currentCategory.value = data;
};
</script>
