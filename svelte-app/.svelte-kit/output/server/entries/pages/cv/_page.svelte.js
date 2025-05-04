import { d as attr, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  $$payload.out += `<div class="sky-background"></div> <div class="cv-container svelte-4jqmfq"><h1 class="svelte-4jqmfq">CV</h1> <div class="pdf-frame svelte-4jqmfq"><iframe${attr("src", `${stringify(base)}/example.pdf`)} title="CV" class="svelte-4jqmfq"></iframe></div> <a${attr("href", `${stringify(base)}/example.pdf`)} download="" class="download-btn svelte-4jqmfq">download pdf ᕦ(ᐛ)ᕤ</a></div>`;
}
export {
  _page as default
};
