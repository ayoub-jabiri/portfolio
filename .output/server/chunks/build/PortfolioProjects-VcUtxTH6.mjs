import { ref, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { storeToRefs, defineStore } from 'pinia';
import { b as useRoute } from './server.mjs';

const _sfc_main$1 = {
  __name: "FilterSection",
  __ssrInlineRender: true,
  emits: ["sendCategory"],
  setup(__props, { emit: __emit }) {
    const categories = ref([
      {
        title: "All",
        active: true
      },
      {
        title: "JS",
        active: false
      },
      {
        title: "Vue.js",
        active: false
      },
      {
        title: "Nuxt.js",
        active: false
      }
    ]);
    const toggleMobileFilter = ref(false);
    ref("All");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "portfolio-filter",
        class: "w-fit mx-auto mb-6 border border-[#e4e4e4]"
      }, _attrs))}><button class="md:hidden w-[150px] p-2 flex justify-center items-center gap-3 hover:bg-[#e4e4e4] main-transition cursor-pointer"><i class="ri-filter-3-line"></i><span>Filter</span></button><div class="${ssrRenderClass([`${toggleMobileFilter.value ? "left-0" : "left-[-150%]"}`, "flex justify-center items-center gap-5 p-3 max-md:bg-white max-md:fixed top-0 z-50 max-md:w-[150px] max-md:h-screen main-transition md:flex-wrap max-md:flex-col max-md:shadow-md"])}"><button id="close-pop" class="md:hidden absolute top-2.5 right-2.5 text-3xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer"><i class="ri-close-line"></i></button><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<button class="${ssrRenderClass([category.active ? "bg-[#e4e4e4]" : "", "w-[70px] py-2 rounded-md hover:bg-[#e4e4e4] main-transition cursor-pointer"])}">${ssrInterpolate(category.title)}</button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/FilterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useProjectsStore = defineStore("projectsStore", {
  state: () => ({
    storeProjects: []
  }),
  actions: {
    async getProjects() {
      let res = await fetch("/json/projects.json");
      let data = await res.json();
      this.storeProjects = data.projects.reverse();
    }
  }
});
const _sfc_main = {
  __name: "PortfolioProjects",
  __ssrInlineRender: true,
  props: {
    currentCategory: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const useStore = useProjectsStore();
    const { storeProjects } = storeToRefs(useStore);
    const { getProjects } = useStore;
    const projects = ref([]);
    const currentProject = ref({});
    const props = __props;
    useRoute();
    const togglePopup = ref(false);
    const filtredProjects = computed(() => {
      if (props.currentCategory.toLocaleLowerCase() == "all") {
        return projects.value;
      } else {
        return projects.value.filter(
          (project) => project.techs.includes(props.currentCategory.toLowerCase())
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 items-stretch gap-5" }, _attrs))}><!--[-->`);
      ssrRenderList(filtredProjects.value, (project) => {
        _push(`<div id="project-box" class="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-4 border border-[#e4e4e4] rounded-md"><img${ssrRenderAttr("src", project.cover)}${ssrRenderAttr("alt", `${project.title} Cover`)} class="shadow-sm"><div class="flex justify-between items-center mt-2"><div><h3 class="font-bold">${ssrInterpolate(project.title)}</h3><span class="block text-[#333] text-sm max-lg:text-center mb-2">${ssrInterpolate(project.category)}</span></div><button class="main-bg text-white w-[30px] h-[30px] rounded-[50%] cursor-pointer" title="Display More Info"><i class="ri-arrow-right-up-long-line"></i></button></div></div>`);
      });
      _push(`<!--]-->`);
      if (togglePopup.value) {
        _push(`<div class="fixed left-0 top-0 w-screen h-screen z-10 p-6 bg-[#0000002b] flex justify-center items-center"><div class="relative bg-[#f8f8f8] p-6 max-md:pt-[45px] grid grid-cols-12 items-center gap-5 max-md:w-full max-lg:w-[500px] lg:w-[700px] rounded-md"><button class="absolute top-2.5 right-2.5 text-3xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer"><i class="ri-close-line"></i></button><div class="col-span-12 lg:col-span-6"><img${ssrRenderAttr("src", currentProject.value.cover)}${ssrRenderAttr("alt", `${currentProject.value.title} Cover`)} class="max-w-[300px] max-lg:mx-auto shadow-sm"></div><div class="col-span-12 lg:col-span-6"><h4 class="text-xl max-lg:text-center font-bold">${ssrInterpolate(currentProject.value.title)}</h4><span class="block text-[#333] text-sm max-lg:text-center mb-2">${ssrInterpolate(currentProject.value.category)}</span><p class="max-lg:text-center mb-4">${ssrInterpolate(currentProject.value.description)}</p><div id="tech-used" class="flex max-lg:justify-center lg:justify-start items-center gap-1 flex-wrap mb-4"><!--[-->`);
        ssrRenderList(currentProject.value.techs, (tech) => {
          _push(`<span class="block bg-[#e4e4e4] text-black text-sm text-center min-w-[60px] px-2 py-1 rounded-md">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div><div class="flex max-lg:justify-center items-center gap-3"><a${ssrRenderAttr("href", currentProject.value.demo)} target="_blank" class="bg-transparent text-[#2196F3] hover:bg-[#2196F3] hover:text-white border border-[#2196F3] main-transition w-[130px] py-2 rounded-md text-center flex justify-center items-center gap-2"><i class="ri-slideshow-3-line"></i><span>Live Demo</span></a>`);
        if (currentProject.value.sourceCode) {
          _push(`<a${ssrRenderAttr("href", currentProject.value.sourceCode)} target="_blank" class="bg-transparent text-[#2196F3] hover:bg-[#2196F3] hover:text-white border border-[#2196F3] main-transition w-[130px] py-2 rounded-md text-center flex justify-center items-center gap-2"><i class="ri-code-line"></i><span>Source Code</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/PortfolioProjects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=PortfolioProjects-VcUtxTH6.mjs.map
