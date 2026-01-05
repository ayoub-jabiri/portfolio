<template>
    <section class="py-15 bg-[#f8f8f8]" id="services">
        <div class="container">
            <SectionHead :title="title" :desc="description" />
            <div class="services grid grid-cols-12 items-start gap-5">
                <div
                    class="srv-box col-span-12 md:col-span-6 lg:col-span-4 bg-[#BBDEFB] hover:bg-[#2196f3] hover:text-white transition-all p-5 rounded-[6px] text-center"
                    v-for="service in services"
                    :key="service.title"
                >
                    <span class="block mb-2">{{ service.icon }}</span>
                    <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
                    <p class="text-sm">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const title = "Services",
    description = "This is Services Section";

const services = [
    {
        icon: "icon",
        title: "UI UX Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta.",
    },
    {
        icon: "icon",
        title: "Front End Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta.",
    },
    {
        icon: "icon",
        title: "SEO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta.",
    },
];
</script>
