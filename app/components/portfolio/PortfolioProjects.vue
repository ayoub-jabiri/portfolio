<template>
    <div class="grid grid-cols-12 items-stretch gap-5">
        <div
            id="project-box"
            v-for="project in projects"
            :key="project.sourceCode"
            class="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-4 border border-[#e4e4e4] rounded-md"
        >
            <img
                :src="project.cover"
                :alt="`${project.title} Cover`"
                class="rounded-md cursor-pointer"
                @click="togglePopup = true"
            />
            <!-- Start Project Pop up -->
            <div
                v-if="togglePopup"
                class="fixed left-0 top-0 w-screen h-screen z-10 p-6 bg-[#0000002b] flex justify-center items-center"
            >
                <div
                    class="relative bg-[#f8f8f8] p-6 max-md:pt-[45px] grid grid-cols-12 gap-5 max-md:w-full max-lg:w-[500px] lg:w-[700px] rounded-md"
                >
                    <button
                        class="absolute top-2.5 right-2.5 text-3xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                        @click="togglePopup = false"
                    >
                        <i class="ri-close-line"></i>
                    </button>
                    <div class="col-span-12 lg:col-span-6">
                        <img
                            :src="project.cover"
                            :alt="`${project.title} Cover`"
                            class="max-w-[300px] max-lg:mx-auto rounded-md shadow-md"
                        />
                    </div>
                    <div class="col-span-12 lg:col-span-6">
                        <h3 class="text-xl max-lg:text-center font-bold mb-2">
                            {{ project.title }}
                        </h3>
                        <p class="max-md:text-center mb-4">
                            {{ project.description }}
                        </p>
                        <div
                            class="flex max-lg:justify-center items-center gap-3"
                        >
                            <a
                                :href="project.demo"
                                target="_blank"
                                class="bg-[#e4e4e4] text-[#777] hover:bg-[#9E9E9E] hover:text-white transition w-[130px] py-2 rounded-md text-center flex justify-center items-center gap-2"
                            >
                                <i class="ri-slideshow-3-line"></i>
                                <span>Live Demo</span>
                            </a>
                            <a
                                v-if="project.demo"
                                :href="project.sourceCode"
                                target="_blank"
                                class="bg-[#e4e4e4] text-[#777] hover:bg-[#9E9E9E] hover:text-white transition w-[130px] py-2 rounded-md text-center flex justify-center items-center gap-2"
                            >
                                <i class="ri-code-line"></i>
                                <span>Source Code</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Project Pop up -->
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
    {
        cover: "/imgs/projects/project-1.webp",
        title: "Website 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque doloremque odio ipsa eum, officia tenetur nostrum unde nesciunt culpa deleniti non necessitatibus! Recusandae quis aperiam asperiores! Nemo ab provident possimus?",
        demo: "https://ayoub-jabiri.github.io/static-template-8",
        sourceCode: "https://github.com/ayoub-jabiri/static-template-8.git",
    },
    {
        cover: "/imgs/projects/project-1.webp",
        title: "Website 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque doloremque odio ipsa eum, officia tenetur nostrum unde nesciunt culpa deleniti non necessitatibus! Recusandae quis aperiam asperiores! Nemo ab provident possimus?",
        demo: "https://ayoub-jabiri.github.io/static-template-8",
        sourceCode: "https://github.com/ayoub-jabiri/static-template-8.git",
    },
    {
        cover: "/imgs/projects/project-1.webp",
        title: "Website 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque doloremque odio ipsa eum, officia tenetur nostrum unde nesciunt culpa deleniti non necessitatibus! Recusandae quis aperiam asperiores! Nemo ab provident possimus?",
        demo: "https://ayoub-jabiri.github.io/static-template-8",
        sourceCode: "https://github.com/ayoub-jabiri/static-template-8.git",
    },
]);

const props = defineProps({
    currentCategory: {
        type: String,
        required: true,
    },
});

const togglePopup = ref(false);
</script>
