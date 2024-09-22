import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: ".nav__item.svelte-1hje3ou.svelte-1hje3ou{cursor:default;display:flex;text-align:center;vertical-align:middle;line-height:23px;height:24px;padding:0px 12px;border-radius:2px;background:transparent;border:none;color:white;-webkit-user-drag:none}.nav__item.svelte-1hje3ou.svelte-1hje3ou:hover{background:linear-gradient(\n			to bottom,\n			rgba(255, 255, 255, 0.25) 0%,\n			rgba(255, 255, 255, 0.4) 50%,\n			rgba(255, 255, 255, 0.25) 50%,\n			rgba(255, 255, 255, 0.1) 100%\n		);text-decoration:none;outline:solid thin rgba(0, 0, 0, 0.5);box-shadow:inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5)}.nav__item.svelte-1hje3ou.svelte-1hje3ou:active{outline:solid thin rgba(0, 0, 0, 0.75);box-shadow:inset 0px 0px 8px 0px rgb(0, 87, 91),\n			inset 0px 0px 0px 1px rgba(255, 255, 255, 0.75);background:rgba(234, 234, 234, 0.298)}.nav__item.svelte-1hje3ou:active>span.svelte-1hje3ou{transform:translate(1px, 1px)}.nav__item.svelte-1hje3ou.svelte-1hje3ou{margin-left:2px;margin-right:2px}",
  map: '{"version":3,"file":"Navitem.svelte","sources":["Navitem.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let href = \\"/\\";\\n<\/script>\\n\\n<a draggable=\\"false\\" class=\\"nav__item\\" {href}>\\n\\t<span><slot /></span>\\n</a>\\n\\n<style>\\n\\t.nav__item {\\n\\t\\tcursor: default;\\n\\t\\tdisplay: flex;\\n\\t\\ttext-align: center;\\n\\t\\tvertical-align: middle;\\n\\t\\tline-height: 23px; /* The same as your div height */\\n\\t\\theight: 24px;\\n\\t\\tpadding: 0px 12px;\\n\\t\\tborder-radius: 2px;\\n\\t\\tbackground: transparent;\\n\\t\\tborder: none;\\n\\t\\tcolor: white;\\n\\t\\t-webkit-user-drag: none;\\n\\t}\\n\\t.nav__item:hover {\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\tto bottom,\\n\\t\\t\\trgba(255, 255, 255, 0.25) 0%,\\n\\t\\t\\trgba(255, 255, 255, 0.4) 50%,\\n\\t\\t\\trgba(255, 255, 255, 0.25) 50%,\\n\\t\\t\\trgba(255, 255, 255, 0.1) 100%\\n\\t\\t);\\n\\t\\ttext-decoration: none;\\n\\t\\toutline: solid thin rgba(0, 0, 0, 0.5);\\n\\t\\tbox-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5);\\n\\t}\\n\\t.nav__item:active {\\n\\t\\toutline: solid thin rgba(0, 0, 0, 0.75);\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 0px 0px 8px 0px rgb(0, 87, 91),\\n\\t\\t\\tinset 0px 0px 0px 1px rgba(255, 255, 255, 0.75);\\n\\t\\tbackground: rgba(234, 234, 234, 0.298);\\n\\t}\\n\\t.nav__item:active > span {\\n\\t\\ttransform: translate(1px, 1px);\\n\\t}\\n\\t.nav__item {\\n\\t\\tmargin-left: 2px;\\n\\t\\tmargin-right: 2px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,wCAAW,CACV,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,iBAAiB,CAAE,IACpB,CACA,wCAAU,MAAO,CAChB,UAAU,CAAE;AACd,GAAG,EAAE,CAAC,MAAM,CAAC;AACb,GAAG,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC;AAChC,GAAG,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAChC,GAAG,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC;AACjC,GAAG,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI;AAChC,GAAG,CACD,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtC,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC1D,CACA,wCAAU,OAAQ,CACjB,OAAO,CAAE,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACvC,UAAU,CACT,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC;AACxC,GAAG,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChD,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CACtC,CACA,yBAAU,OAAO,CAAG,mBAAK,CACxB,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,GAAG,CAC9B,CACA,wCAAW,CACV,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,GACf"}'
};
const Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "/" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  $$result.css.add(css$2);
  return `<a draggable="false" class="nav__item svelte-1hje3ou"${add_attribute("href", href, 0)}><span class="svelte-1hje3ou">${slots.default ? slots.default({}) : ``}</span> </a>`;
});
const css$1 = {
  code: ".nav.svelte-157so0h{position:fixed;width:calc(100% - 2px);margin-left:1px;height:32px;background:linear-gradient(to bottom, #87b2c0 0%, #468a9e 50%, #105c77 50%, #529cab 100%);outline:solid thin rgba(0, 0, 0, 0.5);box-shadow:inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5),\n			0px 0px 16px 0px rgb(1, 92, 95);color:white;display:flex;align-items:center;z-index:9}.nav__left.svelte-157so0h,.nav__right.svelte-157so0h{display:flex;box-sizing:border-box;padding:0px 4px}.nav__left.svelte-157so0h{flex-grow:1}",
  map: '{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script>\\n\\timport Navitem from \\"./Navitem.svelte\\";\\n<\/script>\\n\\n<div class=\\"nav\\">\\n\\t<div class=\\"nav__left\\">\\n\\t\\t<Navitem href=\\"/\\">Home</Navitem>\\n\\t\\t<Navitem href=\\"/download\\">Download</Navitem>\\n\\t\\t<Navitem href=\\"/faq\\">FAQ</Navitem>\\n\\t</div>\\n\\t<div class=\\"nav__right\\">\\n\\t\\t<Navitem on:click={() => window.open(\\"https://discord.gg/EfHdHThNGX\\", \\"_blank\\")}\\n\\t\\t\\t>Discord Server</Navitem\\n\\t\\t>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.nav {\\n\\t\\tposition: fixed;\\n\\t\\twidth: calc(100% - 2px);\\n\\t\\tmargin-left: 1px;\\n\\t\\theight: 32px;\\n\\t\\tbackground: linear-gradient(to bottom, #87b2c0 0%, #468a9e 50%, #105c77 50%, #529cab 100%);\\n\\t\\toutline: solid thin rgba(0, 0, 0, 0.5);\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 0px 0px 0px 1px rgba(255, 255, 255, 0.5),\\n\\t\\t\\t0px 0px 16px 0px rgb(1, 92, 95);\\n\\t\\tcolor: white;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tz-index: 9;\\n\\t}\\n\\t.nav__left,\\n\\t.nav__right {\\n\\t\\tdisplay: flex;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tpadding: 0px 4px;\\n\\t}\\n\\t.nav__left {\\n\\t\\tflex-grow: 1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkBC,mBAAK,CACJ,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,gBAAgB,EAAE,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAC1F,OAAO,CAAE,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACtC,UAAU,CACT,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC;AAClD,GAAG,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAChC,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CACV,CACA,yBAAU,CACV,0BAAY,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,GAAG,CAAC,GACd,CACA,yBAAW,CACV,SAAS,CAAE,CACZ"}'
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="nav svelte-157so0h"><div class="nav__left svelte-157so0h">${validate_component(Navitem, "Navitem").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })} ${validate_component(Navitem, "Navitem").$$render($$result, { href: "/download" }, {}, {
    default: () => {
      return `Download`;
    }
  })} ${validate_component(Navitem, "Navitem").$$render($$result, { href: "/faq" }, {}, {
    default: () => {
      return `FAQ`;
    }
  })}</div> <div class="nav__right svelte-157so0h">${validate_component(Navitem, "Navitem").$$render($$result, {}, {}, {
    default: () => {
      return `Discord Server`;
    }
  })}</div> </div>`;
});
const embed = "/_app/immutable/assets/embed.MGAQI7Qm.png";
const css = {
  code: ".content.svelte-x103n5{box-sizing:border-box;padding-top:60px}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Navbar from \\"../components/Navbar.svelte\\";\\nimport \\"../main.css\\";\\nimport embed from \\"$lib/assets/embed.png\\";\\n<\/script>\\n\\n<svelte:head>\\n\\t<meta content={embed} property=\\"og:image\\" />\\n</svelte:head>\\n\\n<Navbar />\\n<div class=\\"content\\">\\n\\t<slot />\\n</div>\\n\\n<style>\\n\\t.content {\\n\\t\\tbox-sizing: border-box;\\n\\t\\tpadding-top: 60px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAeC,sBAAS,CACR,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,IACd"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-5km9qj_START --><meta${add_attribute("content", embed, 0)} property="og:image"><!-- HEAD_svelte-5km9qj_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="content svelte-x103n5">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
