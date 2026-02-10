<template>
    <div class="grid grid-cols-12 items-stretch gap-5">
        <div
            id="project-box"
            v-for="project in filtredProjects"
            :key="project.sourceCode"
            class="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-4 border border-[#e4e4e4] rounded-md"
        >
            <img
                :src="project.cover"
                :alt="`${project.title} Cover`"
                class="shadow-sm"
            />

            <div class="flex justify-between items-center mt-2">
                <div>
                    <h3 class="font-bold">{{ project.title }}</h3>
                    <span
                        class="block text-[#333] text-sm max-lg:text-center mb-2"
                    >
                        {{ project.category }}
                    </span>
                </div>
                <button
                    class="main-bg text-white w-[30px] h-[30px] rounded-[50%] cursor-pointer"
                    title="Display More Info"
                    @click="handlePopup(project)"
                >
                    <i class="ri-arrow-right-up-long-line"></i>
                </button>
            </div>
        </div>
        <!-- Start Project Pop up -->
        <div
            v-if="togglePopup"
            class="fixed left-0 top-0 w-screen h-screen z-10 p-6 bg-[#0000002b] flex justify-center items-center"
        >
            <div
                class="relative bg-[#f8f8f8] p-6 max-md:pt-[45px] grid grid-cols-12 items-center gap-5 max-md:w-full max-lg:w-[500px] lg:w-[700px] rounded-md"
            >
                <button
                    class="absolute top-2.5 right-2.5 text-3xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                    @click="togglePopup = false"
                >
                    <i class="ri-close-line"></i>
                </button>
                <div class="col-span-12 lg:col-span-6">
                    <img
                        :src="currentProject.cover"
                        :alt="`${currentProject.title} Cover`"
                        class="max-w-[300px] max-lg:mx-auto shadow-sm"
                    />
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <h4 class="text-xl max-lg:text-center font-bold">
                        {{ currentProject.title }}
                    </h4>
                    <span
                        class="block text-[#333] text-sm max-lg:text-center mb-2"
                    >
                        {{ currentProject.category }}
                    </span>
                    <p class="max-lg:text-center mb-4">
                        {{ currentProject.description }}
                    </p>
                    <div
                        id="tech-used"
                        class="flex max-lg:justify-center lg:justify-start items-center gap-1 flex-wrap mb-4"
                    >
                        <span
                            v-for="tech in currentProject.techs"
                            :key="tech"
                            class="block bg-[#e4e4e4] text-black text-sm text-center min-w-[60px] px-2 py-1 rounded-md"
                        >
                            {{ tech }}
                        </span>
                    </div>
                    <div class="flex max-lg:justify-center items-center gap-3">
                        <a
                            :href="currentProject.demo"
                            target="_blank"
                            class="bg-transparent text-[#2196F3] hover:bg-[#2196F3] hover:text-white border border-[#2196F3] main-transition w-[130px] py-2 rounded-md text-center flex justify-center items-center gap-2"
                        >
                            <i class="ri-slideshow-3-line"></i>
                            <span>Live Demo</span>
                        </a>
                        <a
                            v-if="currentProject.sourceCode"
                            :href="currentProject.sourceCode"
                            target="_blank"
                            class="bg-transparent text-[#2196F3] hover:bg-[#2196F3] hover:text-white border border-[#2196F3] main-transition w-[130px] py-2 rounded-md text-center flex justify-center items-center gap-2"
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
</template>

<script setup>
import { ref, computed } from "vue";

// Pinia

const useStore = useProjectsStore();

const { storeProjects } = storeToRefs(useStore);
const { getProjects } = useStore;

// Main Variables

const projects = ref([]);

const currentProject = ref({});

const props = defineProps({
    currentCategory: {
        type: String,
        required: true,
    },
});

let route = useRoute();

const togglePopup = ref(false);

const filtredProjects = computed(() => {
    if (props.currentCategory.toLocaleLowerCase() == "all") {
        return projects.value;
    } else {
        return projects.value.filter((project) =>
            project.techs.includes(props.currentCategory.toLowerCase())
        );
    }
});

// Lifecycle Hooks

onMounted(async () => {
    await getProjects();

    projects.value =
        route.name == "index"
            ? storeProjects.value.slice(0, 6)
            : storeProjects.value;
});

// Start Methods

const handlePopup = (p) => {
    // Toggle Pop up
    togglePopup.value = true;

    currentProject.value = p;
};
</script>
