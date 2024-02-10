

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.lAXAbHm3.js","_app/immutable/chunks/scheduler.tgD2rtmB.js","_app/immutable/chunks/index.FvPb5Ppg.js","_app/immutable/chunks/CommandLink.pjZ9rglb.js","_app/immutable/chunks/singletons.uAw-8ypt.js"];
export const stylesheets = ["_app/immutable/assets/2.t_ATi77R.css","_app/immutable/assets/CommandLink.4zoJlOiY.css"];
export const fonts = [];
