import { _ as _sfc_main$1, a as _sfc_main$2 } from './PortfolioProjects-VcUtxTH6.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'pinia';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const currentCategory = ref("All");
    const updateCategory = (data) => {
      currentCategory.value = data;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FilterSection = _sfc_main$1;
      const _component_PortfolioProjects = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-15",
        id: "portfolio"
      }, _attrs))}><div class="container"><h1 class="text-3xl font-bold text-center mb-8">Projects</h1>`);
      _push(ssrRenderComponent(_component_FilterSection, { onSendCategory: updateCategory }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioProjects, { currentCategory: currentCategory.value }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-CQuKlnwC.mjs.map
