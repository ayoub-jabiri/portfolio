<template>
    <section class="py-15" id="portfolio">
        <div class="container">
            <SectionHead :title="title" :desc="description" />
            <FilterSection @sendCategory="updateCategory" />
            <PortfolioProjects :currentCategory="currentCategory" />
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
    console.log(currentCategory.value);
};
</script>
