<template>
    <div class="app-layout">
        <AppHeader v-if="route.name != 'projects'" />
        <SubHeader v-if="route.name == 'projects'" />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
const route = useRoute();
</script>
