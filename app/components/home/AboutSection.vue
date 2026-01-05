<template>
    <section class="py-15" id="about">
        <div class="container">
            <SectionHead :title="title" :desc="description" />
            <p class="text-center w-[70%] mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                nemo maxime voluptas! Aut nihil recusandae omnis! Consequatur
                tempora, fugiat temporibus est velit dolor, repudiandae nemo quo
                aperiam optio consectetur quia?
            </p>
        </div>
    </section>
</template>

<script setup>
const title = "About me",
    description = "This is About Section";
</script>
