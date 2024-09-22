import { g as getContext, c as create_ssr_component, d as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { C as CommandLink } from "../../chunks/CommandLink.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".content.svelte-1dz3tlq{width:calc(100vw);display:flex;justify-content:center}.error.svelte-1dz3tlq{max-width:450px;width:100%;box-sizing:border-box;padding:12px}.error__info.svelte-1dz3tlq{white-space:pre-line;outline:solid thin rgba(0, 0, 0, 0.5);box-shadow:inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5);background:linear-gradient(to bottom, #edfff9 0%, #e2eeeb 100%);width:fit-content;padding:4px 8px;border-radius:2px;color:rgb(0, 0, 0);text-shadow:0px 0px 2px rgb(255, 255, 255, 0.5),\n			0px 0px 4px rgb(255, 255, 255, 0.5),\n			0px 0px 6px rgb(255, 255, 255, 0.5),\n			0px 0px 8px rgb(255, 255, 255, 0.5)}",
  map: '{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport CommandLink from \\"../components/CommandLink.svelte\\";\\n<\/script>\\n\\n<div class=\\"content\\">\\n\\t<div class=\\"error\\">\\n\\t\\t<h1>An error has occured</h1>\\n\\t\\t<p>Unfortunately, an error was encountered whilst trying to process your request.</p>\\n\\t\\t<p>\\n\\t\\t\\tIf you believe this is a mistake, please contact us on our <a\\n\\t\\t\\t\\thref=\\"https://discord.gg/EfHdHThNGX\\"\\n\\t\\t\\t\\ttarget=\\"_blank\\">Discord server</a\\n\\t\\t\\t>.\\n\\t\\t</p>\\n\\t\\t<p class=\\"error__info\\">\\n\\t\\t\\tError code: {$page.status}\\n\\t\\t\\tError message: {$page.error?.message}\\n\\t\\t\\tRoute: {$page.url.pathname}\\n\\t\\t</p>\\n\\t\\t<CommandLink title=\\"Go home\\" href=\\"/\\" />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.content {\\n\\t\\twidth: calc(100vw);\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\t.error {\\n\\t\\tmax-width: 450px;\\n\\t\\twidth: 100%;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tpadding: 12px;\\n\\t}\\n\\t.error__info {\\n\\t\\twhite-space: pre-line;\\n\\t\\toutline: solid thin rgba(0, 0, 0, 0.5);\\n\\t\\tbox-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5);\\n\\t\\tbackground: linear-gradient(to bottom, #edfff9 0%, #e2eeeb 100%);\\n\\t\\twidth: fit-content;\\n\\t\\tpadding: 4px 8px;\\n\\t\\tborder-radius: 2px;\\n\\t\\tcolor: rgb(0, 0, 0);\\n\\t\\ttext-shadow:\\n\\t\\t\\t0px 0px 2px rgb(255, 255, 255, 0.5),\\n\\t\\t\\t0px 0px 4px rgb(255, 255, 255, 0.5),\\n\\t\\t\\t0px 0px 6px rgb(255, 255, 255, 0.5),\\n\\t\\t\\t0px 0px 8px rgb(255, 255, 255, 0.5);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBC,uBAAS,CACR,KAAK,CAAE,KAAK,KAAK,CAAC,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAClB,CACA,qBAAO,CACN,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IACV,CACA,2BAAa,CACZ,WAAW,CAAE,QAAQ,CACrB,OAAO,CAAE,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtC,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1D,UAAU,CAAE,gBAAgB,EAAE,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAChE,KAAK,CAAE,WAAW,CAClB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,WAAW,CACV,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC;AACvC,GAAG,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC;AACvC,GAAG,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC;AACvC,GAAG,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC"}'
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="content svelte-1dz3tlq"><div class="error svelte-1dz3tlq"><h1 data-svelte-h="svelte-10th5ak">An error has occured</h1> <p data-svelte-h="svelte-1eafemo">Unfortunately, an error was encountered whilst trying to process your request.</p> <p data-svelte-h="svelte-19mwl77">If you believe this is a mistake, please contact us on our <a href="https://discord.gg/EfHdHThNGX" target="_blank">Discord server</a>.</p> <p class="error__info svelte-1dz3tlq">Error code: ${escape($page.status)}
			Error message: ${escape($page.error?.message)}
			Route: ${escape($page.url.pathname)}</p> ${validate_component(CommandLink, "CommandLink").$$render($$result, { title: "Go home", href: "/" }, {}, {})}</div> </div>`;
});
export {
  Error$1 as default
};
