import { d as attr, e as stringify, f as slot } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-19dnd6t"><div class="footer-content svelte-19dnd6t"><p class="footer-text svelte-19dnd6t">Made with ♥ by</p> <img${attr("src", `${stringify(base)}/sketch logo-w.png`)} alt="Persona" class="footer-persona svelte-19dnd6t" draggable="false"></div> <img${attr("src", `${stringify(base)}/grass4.png`)} alt="Footer Logo" class="footer-image svelte-19dnd6t" draggable="false"></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<a${attr("href", `${stringify(base)}/`)} class="home-button svelte-1fm0u5j"><img${attr("src", `${stringify(base)}/house.svg`)} alt="Home" draggable="false" class="svelte-1fm0u5j"></a> <main><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
