<template>
    <section class="py-15" id="portfolio">
        <div class="container">
            <SectionHead :title="title" :desc="description" />
            <FilterSection @sendCategory="updateCategory" />
            <PortfolioProjects />
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const title = "Portfolio",
    description = "This is Portfolio Section";

const currentCategory = ref("");

// Start Methods

const updateCategory = (data) => {
    console.log("parent", data);
};
</script>
