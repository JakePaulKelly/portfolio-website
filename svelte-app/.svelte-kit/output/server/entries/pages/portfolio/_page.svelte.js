import { j as ensure_array_like, d as attr, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  const images = [
    {
      id: 1,
      src: "placeholder.jpg",
      alt: "Image 1",
      hoverText: "KCD2 PLACEHOLDER 1"
    },
    {
      id: 2,
      src: "placeholder.jpg",
      alt: "Image 2",
      hoverText: "KCD2 PLACEHOLDER 2"
    },
    {
      id: 3,
      src: "placeholder.jpg",
      alt: "Image 3",
      hoverText: "KCD2 PLACEHOLDER 3"
    },
    {
      id: 4,
      src: "placeholder.jpg",
      alt: "Image 4",
      hoverText: "KCD2 PLACEHOLDER 4"
    },
    {
      id: 5,
      src: "placeholder.jpg",
      alt: "Image 5",
      hoverText: "KCD2 PLACEHOLDER 5"
    },
    {
      id: 6,
      src: "placeholder.jpg",
      alt: "Image 6",
      hoverText: "KCD2 PLACEHOLDER 6"
    },
    {
      id: 7,
      src: "placeholder.jpg",
      alt: "Image 7",
      hoverText: "KCD2 PLACEHOLDER 7"
    },
    {
      id: 8,
      src: "placeholder.jpg",
      alt: "Image 8",
      hoverText: "KCD2 PLACEHOLDER 8"
    },
    {
      id: 9,
      src: "placeholder.jpg",
      alt: "Image 9",
      hoverText: "KCD2 PLACEHOLDER 9"
    }
  ];
  const each_array = ensure_array_like(images);
  $$payload.out += `<div class="seagul svelte-1fwyyt0"></div> <div class="seagul-1 svelte-1fwyyt0"></div> <div class="portfolio_img svelte-1fwyyt0"><div class="reveal svelte-1fwyyt0"><img${attr("src", `${stringify(base)}/portfolio.png`)} alt="Portfolio Image" style="width: 350px" class="flex-image svelte-1fwyyt0" draggable="false"></div></div> <div class="reveal-text svelte-1fwyyt0"><h1 class="svelte-1fwyyt0">Portfolio</h1></div> <div class="sky-background svelte-1fwyyt0"></div> <div class="grid-container svelte-1fwyyt0"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out += `<div class="grid-item svelte-1fwyyt0"><img${attr("src", image.src)}${attr("alt", image.alt)} draggable="false" class="svelte-1fwyyt0"></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
export {
  _page as default
};
