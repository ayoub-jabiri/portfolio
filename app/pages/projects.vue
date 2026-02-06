<template>
    <section class="py-15" id="portfolio">
        <div class="container">
            <h1 class="text-3xl font-bold text-center mb-8">Projects</h1>
            <FilterSection @sendCategory="updateCategory" />
            <PortfolioProjects :currentCategory="currentCategory" />
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useProjectsStore } from "~/stores/projects";

const title = "Portfolio",
    description = "This is Portfolio Section";

const currentCategory = ref("All");

const projectsStore = useProjectsStore();

onMounted(() => {
    projectsStore.getProjects();
});

// Start Methods

const updateCategory = (data) => {
    currentCategory.value = data;
};
</script>
