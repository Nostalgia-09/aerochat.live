

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2._jgZv6Pg.js","_app/immutable/chunks/scheduler.tgD2rtmB.js","_app/immutable/chunks/index.FvPb5Ppg.js","_app/immutable/chunks/CommandLink.HtFxytnk.js","_app/immutable/chunks/singletons.OGezfXDu.js"];
export const stylesheets = ["_app/immutable/assets/2.t_ATi77R.css","_app/immutable/assets/CommandLink.4zoJlOiY.css"];
export const fonts = [];
