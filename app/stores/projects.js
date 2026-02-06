import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projectsStore", {
    state: () => ({
        projects: [],
    }),
    actions: {
        async getProjects() {
            let res = await fetch("/json/projects.json");
            let data = await res.json();

            this.projects = data;
        },
    },
});
