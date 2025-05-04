import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DHran5eW.js","_app/immutable/chunks/CWF5TRWV.js","_app/immutable/chunks/BZ7QCYPa.js","_app/immutable/chunks/DGdB0kub.js","_app/immutable/chunks/CjuXEvSG.js","_app/immutable/chunks/BFs4XBpc.js"];
export const stylesheets = ["_app/immutable/assets/0.C1mcrrTS.css"];
export const fonts = [];
