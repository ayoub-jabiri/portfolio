import { _ as __nuxt_component_0$1 } from './nuxt-link-COjCvffB.mjs';
import { mergeProps, unref, ref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { b as useRoute, _ as _export_sfc } from './server.mjs';
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
import 'pinia';
import 'vue-router';

const _sfc_main$3 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        title: "Home",
        section: "/"
      },
      {
        title: "About",
        section: "#about"
      },
      {
        title: "Services",
        section: "#services"
      },
      {
        title: "Skills",
        section: "#skills"
      },
      {
        title: "Portfolio",
        section: "#portfolio"
      },
      {
        title: "Contact",
        section: "#contact"
      }
    ];
    const toggleNav = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-[#2196F3] py-4 sticky top-0 z-11" }, _attrs))} data-v-1c2f7fe5><div class="container flex justify-between items-center text-white" data-v-1c2f7fe5><div class="logo" data-v-1c2f7fe5>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "text-2xl font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ayoub`);
          } else {
            return [
              createTextVNode("Ayoub")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="md:hidden text-2xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer" data-v-1c2f7fe5><i class="ri-menu-line" data-v-1c2f7fe5></i></button><nav class="${ssrRenderClass(`${toggleNav.value ? "right-0" : "right-[-150%]"}`)}" data-v-1c2f7fe5><div class="md:hidden text-black p-4 flex justify-between items-center border-b border-[#e4e4e4] mb-4" data-v-1c2f7fe5><span class="text-[#2196f3] text-2xl font-bold" data-v-1c2f7fe5>Ayoub</span><button class="text-3xl w-[30px] h-[30px] flex justify-center items-center cursor-pointer" data-v-1c2f7fe5><i class="ri-close-line" data-v-1c2f7fe5></i></button></div><ul class="flex justify-between items-center max-md:gap-3 md:gap-4" data-v-1c2f7fe5><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li data-v-1c2f7fe5>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: link.section,
          class: "main-transition max-md:hover:text-[#2196f3] max-md:hover:bg-[#e4e4e4]",
          onClick: ($event) => toggleNav.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1c2f7fe5"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-[#2196F3] py-4 sticky top-0" }, _attrs))}><div class="container flex justify-between items-center text-white"><div class="logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "text-2xl font-bold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="ri-arrow-left-line"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "ri-arrow-left-line" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/SubHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "SubHeader" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#333] py-12" }, _attrs))}><div class="container"><p class="text-white text-center"> © Copyright ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} | All Rights Reserved to <span class="main-color">Ayoub Jabiri</span></p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "AppFooter" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_SubHeader = __nuxt_component_1;
      const _component_AppFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))}>`);
      if (unref(route).name != "projects") {
        _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(route).name == "projects") {
        _push(ssrRenderComponent(_component_SubHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-D0ZkGEgF.mjs.map
