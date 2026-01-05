<template>
    <div class="section-head text-center mb-6">
        <h2 class="blue-color text-xl uppercase font-bold">{{ title }}</h2>
        <p class="black-color text-3xl font-bold">{{ desc }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
});
</script>
