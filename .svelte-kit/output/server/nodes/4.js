

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.xfxiwqTI.js","_app/immutable/chunks/scheduler.DOjC0atF.js","_app/immutable/chunks/index.D13opEun.js"];
export const stylesheets = ["_app/immutable/assets/4.Dq3887SV.css"];
export const fonts = [];
