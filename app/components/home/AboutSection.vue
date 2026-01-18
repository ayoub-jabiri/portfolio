<template>
    <section class="py-15" id="about">
        <div class="container">
            <div class="grid grid-cols-12 justify-center items-center">
                <div class="col-span-12 lg:col-span-6">
                    <img
                        src="/imgs/about.jpg"
                        alt=""
                        class="w-[500px] mx-auto"
                    />
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <SectionHead
                        :title="title"
                        :desc="description"
                        class="lg:text-left"
                    />
                    <p
                        class="max-lg:text-center lg:text-justify max-lg:mx-auto"
                    >
                        I am a front-end developer specializing in
                        high-performance, user-friendly interfaces connected to
                        complex backend systems, using contemporary frameworks
                        like Vue.js. I focus on creating scalable, accessible,
                        and responsive web applications, excelling in
                        collaborative settings, and prioritizing style,
                        performance optimization, and adherence to industry
                        standards for speed, security, and SEO, all while
                        committed to lifelong learning in the web ecosystem.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const title = "About me",
    description = "This is About Section";
</script>
