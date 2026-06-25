import { _ as _export_sfc, a as __nuxt_component_0$2 } from './server.mjs';
import { mergeProps, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$8 } from './PortfolioProjects-VcUtxTH6.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-COjCvffB.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$7 = {
  __name: "LandingSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-[#2196F3] h-[calc(100vh-64px)] text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="container h-full flex flex-col justify-center text-center relative z-10"><div class="content"><h1 class="text-5xl font-bold mb-8"> Hello, I am Ayoub Jabiri a <br> Full Stack Developer </h1><a download href="/pdf/ayoub-jabiri-cv-en.pdf" class="main-btn bg-[#ff9800] text-white p-4"> Download CV </a></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/LandingSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$7, { __name: "LandingSection" });
const _sfc_main$6 = {
  __name: "SectionHead",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-head text-center mb-6" }, _attrs))}><h2 class="blue-color text-xl uppercase font-bold">${ssrInterpolate(__props.title)}</h2><p class="black-color text-3xl font-bold">${ssrInterpolate(__props.desc)}</p></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SectionHead.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/imgs/about.jpg");
const title$3 = "About me", description$3 = "This is About Section";
const _sfc_main$5 = {
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-15",
        id: "about"
      }, _attrs))}><div class="container"><div class="grid grid-cols-12 justify-center items-center"><div class="col-span-12 lg:col-span-6"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-[500px] mx-auto"></div><div class="col-span-12 lg:col-span-6">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        title: title$3,
        desc: description$3,
        class: "lg:text-left"
      }, null, _parent));
      _push(`<p class="max-lg:text-center lg:text-justify max-lg:mx-auto"> I am a full stack developer specializing in high-performance, user-friendly interfaces connected to complex backend systems, using contemporary frameworks. I focus on creating scalable, accessible, and responsive web applications, excelling in collaborative settings, and prioritizing style, performance optimization, and adherence to industry standards for speed, security, and SEO, all while committed to lifelong learning in the web ecosystem. </p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/AboutSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const title$2 = "Services", description$2 = "This is Services Section";
const _sfc_main$4 = {
  __name: "ServicesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        icon: `
            <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 95.51" style="enable-background:new 0 0 122.88 95.51" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v78.87c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,95.51,0,91.77,0,87.19 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M12.6,26.95h96.77v41.08H12.6V26.95L12.6,26.95z M32.21,38.67h5.98v12.44 c0,1.23-0.18,2.4-0.54,3.49c-0.36,1.1-0.92,2.06-1.68,2.88c-0.76,0.82-1.56,1.4-2.4,1.73c-1.16,0.46-2.56,0.7-4.19,0.7 c-0.94,0-1.97-0.07-3.09-0.21c-1.11-0.14-2.05-0.42-2.8-0.85c-0.75-0.42-1.43-1.02-2.05-1.8c-0.62-0.78-1.05-1.58-1.28-2.41 c-0.37-1.33-0.56-2.5-0.56-3.53V38.67h5.98v12.74c0,1.14,0.29,2.03,0.88,2.66c0.59,0.64,1.4,0.96,2.44,0.96 c1.02,0,1.83-0.32,2.42-0.95c0.58-0.63,0.88-1.52,0.88-2.68V38.67L32.21,38.67z M42.39,38.67h6.01v20.89h-6.01V38.67L42.39,38.67z M55.59,38.32h2.72l-4.89,21.59h-2.72L55.59,38.32L55.59,38.32z M72.82,38.67h5.98v12.44c0,1.23-0.18,2.4-0.54,3.49 c-0.36,1.1-0.92,2.06-1.68,2.88c-0.76,0.82-1.56,1.4-2.4,1.73c-1.16,0.46-2.56,0.7-4.19,0.7c-0.94,0-1.97-0.07-3.09-0.21 c-1.11-0.14-2.05-0.42-2.8-0.85c-0.75-0.42-1.43-1.02-2.05-1.8c-0.62-0.78-1.05-1.58-1.28-2.41c-0.37-1.33-0.55-2.5-0.55-3.53 V38.67h5.98v12.74c0,1.14,0.29,2.03,0.88,2.66c0.59,0.64,1.4,0.96,2.44,0.96c1.02,0,1.83-0.32,2.42-0.95 c0.58-0.63,0.88-1.52,0.88-2.68V38.67L72.82,38.67z M81.43,38.67h6.61l3.43,6.43l3.33-6.43h6.52L95.3,48.79l6.59,10.77h-6.74 l-3.8-6.71l-3.83,6.71h-6.69l6.68-10.89L81.43,38.67L81.43,38.67z M66.87,83.68c-1.78,0-3.22-1.57-3.22-3.5 c0-1.94,1.44-3.5,3.22-3.5h39.65c1.78,0,3.22,1.57,3.22,3.5c0,1.94-1.44,3.5-3.22,3.5H66.87L66.87,83.68z M14.96,83.68 c-1.76,0-3.19-1.57-3.19-3.5c0-1.94,1.43-3.5,3.19-3.5h36.76c1.76,0,3.19,1.57,3.19,3.5c0,1.94-1.43,3.5-3.19,3.5H14.96 L14.96,83.68z M117.97,20.1H5.29V88c0,0.64,0.25,1.2,0.67,1.63c0.43,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67 c0.43-0.43,0.67-0.99,0.67-1.63V20.1H117.97L117.97,20.1z M106.64,6.16c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C102.54,8,104.38,6.16,106.64,6.16L106.64,6.16z M78.8,6.16c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C74.69,8,76.53,6.16,78.8,6.16L78.8,6.16z M92.72,6.16 c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,8,90.45,6.16,92.72,6.16L92.72,6.16z"/></g></svg>
        `,
        title: "UI UX Design",
        desc: "I design user-friendly interfaces in Figma that emphasize user experience and brand identity, focusing on accessible and research-driven layouts to create seamless digital experiences."
      },
      {
        icon: `
            <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 115.39" style="enable-background:new 0 0 122.88 115.39" xml:space="preserve"><style type="text/css"><![CDATA[
	.st0{fill-rule:evenodd;clip-rule:evenodd;}
]]></style><g><path class="st0" d="M102.79,7.11l2.59,3.41c0.68,0.9,0.51,2.19-0.39,2.87l-2.75,2.09c0.5,1.33,0.82,2.75,0.95,4.2l3.13,0.43 c1.12,0.15,1.9,1.19,1.75,2.31l-0.58,4.25c-0.15,1.12-1.19,1.91-2.31,1.75l-3.42-0.47c-0.61,1.33-1.39,2.55-2.31,3.64l1.92,2.52 c0.68,0.9,0.5,2.19-0.4,2.87l-3.41,2.59c-0.9,0.68-2.19,0.5-2.87-0.39l-2.09-2.75c-1.34,0.5-2.75,0.82-4.21,0.95l-0.43,3.13 c-0.15,1.12-1.19,1.9-2.31,1.75l-4.25-0.58c-1.12-0.15-1.9-1.19-1.75-2.31l0.47-3.42c-1.32-0.61-2.55-1.39-3.64-2.3l-2.52,1.91 c-0.9,0.68-2.19,0.51-2.87-0.39l-2.59-3.41c-0.68-0.9-0.51-2.19,0.39-2.87l2.75-2.09c-0.5-1.34-0.82-2.75-0.95-4.2l-3.13-0.43 c-1.12-0.15-1.91-1.19-1.75-2.31l0.58-4.25c0.16-1.12,1.19-1.9,2.31-1.75l3.42,0.47c0.61-1.32,1.39-2.55,2.3-3.64l-1.91-2.52 C71.83,7.28,72,5.99,72.9,5.31l3.41-2.59c0.9-0.68,2.19-0.51,2.87,0.39l2.09,2.75c1.33-0.5,2.75-0.82,4.2-0.95l0.43-3.13 c0.15-1.12,1.19-1.91,2.31-1.76l4.25,0.58c1.12,0.15,1.91,1.19,1.75,2.31l-0.47,3.42c1.33,0.61,2.55,1.39,3.65,2.31l2.52-1.91 C100.81,6.04,102.1,6.21,102.79,7.11L102.79,7.11L102.79,7.11L102.79,7.11z M30.58,56.09h60.94c1.16,0,2.22,0.48,2.99,1.25l0,0 l0.01,0.01l0.01,0.01l0,0c0.77,0.77,1.24,1.83,1.24,2.99v50.79c0,1.17-0.48,2.23-1.25,3c-0.77,0.77-1.83,1.25-3,1.25H30.58 c-1.16,0-2.22-0.47-3-1.25l-0.01-0.01l0,0l-0.01-0.01c-0.77-0.77-1.24-1.83-1.24-2.99v-50.8c0.01-1.17,0.49-2.23,1.25-3 c0.05-0.04,0.09-0.09,0.14-0.13C28.48,56.52,29.48,56.09,30.58,56.09L30.58,56.09L30.58,56.09z M37.46,104.21 c-0.88,0-1.6-0.79-1.6-1.75c0-0.97,0.72-1.76,1.6-1.76h18.45c0.88,0,1.6,0.79,1.6,1.76c0,0.97-0.72,1.76-1.6,1.76H37.46 L37.46,104.21L37.46,104.21z M63.51,104.21c-0.89,0-1.62-0.79-1.62-1.75c0-0.97,0.72-1.76,1.62-1.76h19.9 c0.89,0,1.62,0.79,1.62,1.76c0,0.97-0.72,1.76-1.62,1.76H63.51L63.51,104.21L63.51,104.21z M36.27,75.74h48.56v19.01H36.27V75.74 L36.27,75.74L36.27,75.74z M91.94,71.31c-0.14,0.02-0.27,0.03-0.41,0.03H30.58c-0.14,0-0.28-0.01-0.41-0.03v39.82 c0,0.11,0.05,0.21,0.11,0.29l0,0l0.01,0.01c0.07,0.07,0.17,0.11,0.29,0.11h60.94c0.11,0,0.21-0.04,0.29-0.12 c0.07-0.08,0.13-0.18,0.13-0.29V71.31L91.94,71.31L91.94,71.31z M54.66,61.57c1.52,0,2.76,1.24,2.76,2.76 c0,1.52-1.24,2.76-2.76,2.76c-1.52,0-2.76-1.24-2.76-2.76C51.9,62.81,53.14,61.57,54.66,61.57L54.66,61.57L54.66,61.57z M45.01,61.57c1.53,0,2.76,1.24,2.76,2.76c0,1.52-1.24,2.76-2.76,2.76c-1.52,0-2.76-1.24-2.76-2.76 C42.25,62.81,43.49,61.57,45.01,61.57L45.01,61.57L45.01,61.57z M35.37,61.57c1.53,0,2.76,1.24,2.76,2.76 c0,1.52-1.24,2.76-2.76,2.76c-1.52,0-2.76-1.24-2.76-2.76C32.61,62.81,33.85,61.57,35.37,61.57L35.37,61.57L35.37,61.57z M60.53,11.46c-1.83-0.14-3.68-0.12-5.51,0.06c-5.63,0.54-11.1,2.59-15.62,6.1c-5.23,4.05-9.2,10.11-10.73,18.14l-0.48,2.51 l-2.5,0.44c-2.45,0.43-4.64,1.02-6.56,1.77c-1.86,0.72-3.52,1.61-4.97,2.66c-1.16,0.84-2.16,1.78-3.01,2.8 c-2.63,3.15-3.85,7.1-3.82,11.1c0.03,4.06,1.35,8.16,3.79,11.53c0.91,1.25,1.96,2.4,3.16,3.4c1.22,1.01,2.59,1.85,4.13,2.48 c0.87,0.36,1.8,0.66,2.77,0.9v7.49c-2-0.36-3.84-0.9-5.56-1.61c-2.27-0.94-4.28-2.15-6.05-3.63c-1.68-1.4-3.15-2.99-4.4-4.72 C1.84,68.28,0.04,62.66,0,57.06c-0.04-5.66,1.72-11.29,5.52-15.85c1.23-1.48,2.68-2.84,4.34-4.04c1.93-1.4,4.14-2.58,6.64-3.55 c1.72-0.67,3.56-1.23,5.5-1.68c2.2-8.74,6.89-15.47,12.92-20.14c5.64-4.37,12.43-6.92,19.42-7.59c3.67-0.35,7.39-0.19,11.03,0.49 c-0.08,0.33-0.15,0.66-0.19,1l-0.01,0.06c-0.07,0.57-0.1,1.14-0.07,1.72c-0.77,0.3-1.49,0.71-2.14,1.21l-0.03,0.02 C61.96,9.44,61.14,10.38,60.53,11.46L60.53,11.46L60.53,11.46z M113.44,30.66c0.56,0.51,1.1,1.04,1.63,1.61 c1.07,1.15,2.08,2.45,3.03,3.9c3.2,4.92,4.84,11.49,4.77,17.92c-0.07,6.31-1.77,12.59-5.25,17.21c-2.27,3.01-5.18,5.47-8.67,7.42 c-2.39,1.34-5.08,2.45-8.01,3.35v-7.75c1.58-0.59,3.05-1.25,4.4-2c2.63-1.47,4.78-3.26,6.39-5.41c2.5-3.33,3.73-8.04,3.78-12.87 c0.06-5.07-1.18-10.16-3.59-13.86c-0.69-1.07-1.45-2.03-2.25-2.89c-0.31-0.33-0.62-0.64-0.94-0.94c0.05-0.5,0.07-1.01,0.04-1.52 c0.77-0.3,1.49-0.71,2.14-1.21l0.03-0.02C111.97,32.81,112.83,31.81,113.44,30.66L113.44,30.66L113.44,30.66z M88.08,12.8 c4.61,0.63,7.83,4.88,7.2,9.49c-0.63,4.61-4.88,7.84-9.49,7.21c-4.61-0.63-7.84-4.88-7.2-9.49C79.23,15.4,83.47,12.17,88.08,12.8 L88.08,12.8L88.08,12.8L88.08,12.8z"/></g></svg>
        `,
        title: "Full Stack Web Development",
        desc: "I build responsive web applications, focusing on clean, scalable code for fast load times and consistent execution across devices."
      },
      {
        icon: `
            <?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 83.92" style="enable-background:new 0 0 122.88 83.92" xml:space="preserve"><g><path d="M76.38,0c10.1,0,19.26,4.11,25.9,10.72c6.63,6.63,10.72,15.77,10.72,25.89c0,7.39-2.2,14.29-5.96,20.04l15.85,17.27 l-10.93,9.99L96.66,67.1c-5.8,3.87-12.79,6.12-20.28,6.12c-8.34,0-16.04-2.8-22.2-7.5c-3.84,3.87-7.51,7.55-10.6,10.64L22.35,55.39 L7.43,69.88L0,62.45v0l22.48-21.85c7.02,7.02,13.96,13.96,21.05,20.96l3.29-3.32c-4.44-6.06-7.05-13.52-7.05-21.62 c0-10.1,4.11-19.26,10.72-25.89C57.12,4.08,66.26,0,76.38,0L76.38,0z M52.44,52.57l14.63-14.77l-8.71-8.71l24.5-0.22v24.72 l-8.37-8.37c-4.2,4.25-9.49,9.6-14.83,14.99c4.73,3.45,10.57,5.5,16.87,5.5c7.91,0,15.09-3.22,20.27-8.41 c5.19-5.19,8.41-12.36,8.41-20.27c0-7.91-3.22-15.09-8.41-20.27h0c-5.19-5.19-12.36-8.41-20.27-8.41c-7.91,0-15.09,3.22-20.27,8.41 c-5.19,5.19-8.41,12.36-8.41,20.27C47.85,42.75,49.54,48.09,52.44,52.57L52.44,52.57z"/></g></svg>
        `,
        title: "SEO",
        desc: "I optimize site architecture and performance to enhance search rankings and organic visibility, focusing on Core Web Vitals, semantic HTML, and technical SEO for improved discoverability and functionality."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-15",
        id: "services"
      }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        title: title$2,
        desc: description$2
      }, null, _parent));
      _push(`<div class="services grid grid-cols-12 items-stretch gap-5"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<div class="srv-box col-span-12 md:col-span-6 lg:col-span-4 bg-[#BBDEFB] hover:bg-[#2196f3] hover:text-white group main-transition p-5 rounded-md text-center"><span class="w-[60px] h-[60px] flex justify-center items-center mx-auto mb-2 group-hover:fill-white">${service.icon ?? ""}</span><h3 class="text-xl font-bold mb-2">${ssrInterpolate(service.title)}</h3><p class="text-sm">${ssrInterpolate(service.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ServicesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const title$1 = "Skills", description$1 = "This is Skills Section";
const _sfc_main$3 = {
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      {
        icon: "/imgs/skills/html5.png",
        title: "html"
      },
      {
        icon: "/imgs/skills/css3.png",
        title: "css"
      },
      {
        icon: "/imgs/skills/javascript.png",
        title: "javascript"
      },
      {
        icon: "/imgs/skills/sass.png",
        title: "sass"
      },
      {
        icon: "/imgs/skills/pug-js.png",
        title: "pug"
      },
      {
        icon: "/imgs/skills/bootstrap.png",
        title: "bootstrap"
      },
      {
        icon: "/imgs/skills/tailwindcss.png",
        title: "tailwindcss"
      },
      {
        icon: "/imgs/skills/gulp-js.png",
        title: "gulp js"
      },
      {
        icon: "/imgs/skills/jest.png",
        title: "jest"
      },
      {
        icon: "/imgs/skills/git.png",
        title: "git"
      },
      {
        icon: "/imgs/skills/github.png",
        title: "github"
      },
      {
        icon: "/imgs/skills/vue-js.png",
        title: "vue js"
      },
      {
        icon: "/imgs/skills/pinia.png",
        title: "pinia"
      },
      {
        icon: "/imgs/skills/vuetify.png",
        title: "vuetify"
      },
      {
        icon: "/imgs/skills/nuxt-js.png",
        title: "nuxt js"
      },
      {
        icon: "/imgs/skills/typescript.png",
        title: "typescript"
      },
      {
        icon: "/imgs/skills/figma.png",
        title: "figma"
      },
      {
        icon: "/imgs/skills/react.png",
        title: "react"
      },
      {
        icon: "/imgs/skills/redux.png",
        title: "redux"
      },
      {
        icon: "/imgs/skills/next.png",
        title: "next.js"
      },
      {
        icon: "/imgs/skills/node.png",
        title: "node.js"
      },
      {
        icon: "/imgs/skills/express.png",
        title: "express.js"
      },
      {
        icon: "/imgs/skills/mongodb.png",
        title: "mongodb"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-15",
        id: "skills"
      }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        title: title$1,
        desc: description$1
      }, null, _parent));
      _push(`<div id="skills-container" class="grid grid-cols-12 gap-4"><!--[-->`);
      ssrRenderList(skills, (skill) => {
        _push(`<div id="skill-box" class="col-span-6 md:col-span-3 lg:col-span-2 flex justify-center items-center flex-col gap-2 p-4 bg-[#e4e4e4] rounded-md hover:bg-[#2196F3] hover:text-white main-transition"><img${ssrRenderAttr("src", skill.icon)}${ssrRenderAttr("alt", `${skill.title} Icon`)} class="w-[50px]"><h3 class="text-[15px] uppercase">${ssrInterpolate(skill.title)}</h3></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SkillsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const title = "Portfolio", description = "This is Portfolio Section";
const _sfc_main$2 = {
  __name: "PortfolioSection",
  __ssrInlineRender: true,
  setup(__props) {
    const currentCategory = ref("All");
    const updateCategory = (data) => {
      currentCategory.value = data;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHead = _sfc_main$6;
      const _component_FilterSection = _sfc_main$1$1;
      const _component_PortfolioProjects = _sfc_main$8;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-15",
        id: "portfolio"
      }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        title,
        desc: description
      }, null, _parent));
      _push(ssrRenderComponent(_component_FilterSection, { onSendCategory: updateCategory }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioProjects, { currentCategory: currentCategory.value }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/projects",
        class: "main-btn block text-[#2196f3] bg-transparent hover:bg-[#2196f3] hover:text-white border border-[#2196f3] p-3.5 mt-6 mx-auto main-transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View More `);
          } else {
            return [
              createTextVNode(" View More ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/PortfolioSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        icon: '<i class="ri-mail-line"></i>',
        title: "Email",
        desc: "ayoubjabiri.business@gmail.com",
        url: "mailto:ayoubjabiri.business@gmail.com",
        color: "#ea4335"
      },
      {
        icon: '<i class="ri-linkedin-fill"></i>',
        title: "Linkdedin",
        desc: "ayoub-jabiri",
        url: "https://www.linkedin.com/in/ayoub-jabiri-2552202a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        color: "#0a66c2"
      },
      {
        icon: '<i class="ri-github-fill"></i>',
        title: "GitHub",
        desc: "ayoub-jabiri",
        url: "https://github.com/ayoub-jabiri",
        color: "#333"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-15",
        id: "contact"
      }, _attrs))} data-v-0246b56b><div class="container" data-v-0246b56b><h2 class="text-white text-3xl text-center font-bold mb-4" data-v-0246b56b> Got a Project! Let&#39;s Talk </h2><div class="grid grid-cols-12 gap-3 max-lg:text-center items-center" data-v-0246b56b><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<div class="col-span-12 md:col-span-6 lg:col-span-4 bg-transparent text-white border border-white main-transition p-4 text-center rounded-md hover:bg-[#333] hover:text-white hover:border-white" data-v-0246b56b><span class="text-3xl" data-v-0246b56b>${link.icon ?? ""}</span><h3 data-v-0246b56b>${ssrInterpolate(link.title)}</h3><a${ssrRenderAttr("href", link.url)} class="underline" data-v-0246b56b>${ssrInterpolate(link.desc)}</a></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0246b56b"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingSection = __nuxt_component_0;
  const _component_AboutSection = _sfc_main$5;
  const _component_ServicesSection = _sfc_main$4;
  const _component_SkillsSection = _sfc_main$3;
  const _component_PortfolioSection = _sfc_main$2;
  const _component_ContactSection = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LandingSection, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ServicesSection, null, null, _parent));
  _push(ssrRenderComponent(_component_SkillsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_PortfolioSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DEgmSgML.mjs.map
