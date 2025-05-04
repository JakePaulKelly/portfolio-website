import { d as attr, i as attr_style, h as escape_html, c as pop, p as push, e as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  const speechTexts = [
    "𐐘 among us",
    "Teris or Block Blast?",
    "♥",
    "[as]",
    "⍥",
    "☻"
  ];
  let indexSpeech = speechTexts[0];
  $$payload.out += `<div class="sky-background svelte-17ptfp2"></div> <div class="cloud cloud-1 svelte-17ptfp2"></div> <div class="cloud cloud-2 svelte-17ptfp2"></div> <div class="jake_persona svelte-17ptfp2"><div class="reveal svelte-17ptfp2"><img${attr("src", `${stringify(base)}/sketch logo-w.png`)} alt="Jake Persona" style="width: 350px" class="flex-image svelte-17ptfp2"></div> <div class="speech svelte-17ptfp2"${attr_style(`opacity: ${stringify(0)};`)}><p class="speech-text svelte-17ptfp2">${escape_html(indexSpeech)}</p></div></div> <div class="reveal-text svelte-17ptfp2"><h1 class="svelte-17ptfp2">Jake Kelly</h1></div> <div class="about-me-container svelte-17ptfp2"><h2 class="svelte-17ptfp2">About Me</h2> <p class="svelte-17ptfp2">As a versatile and passionate creative professional, I bring together the worlds of front-end web development, graphic design, and concept art into a cohesive, innovative skill set. With a deep understanding of modern web technologies, I craft user interfaces that are not only functional and responsive but also visually engaging. My development work is driven by a designer’s eye, ensuring that each element on the screen serves both a purpose and an aesthetic. Whether I'm building sleek websites, refining UI/UX, or optimizing interactions, my attention to detail and appreciation for form and function stand out in every project.</p> <p class="svelte-17ptfp2">Beyond code, my background in graphic design and concept art fuels a broader creative vision. I approach each project as a storyteller, whether it’s designing a brand identity, illustrating characters and environments, or shaping immersive digital experiences. This fusion of technical skill and artistic intuition allows me to bridge the gap between imagination and execution. Passionate about pushing boundaries, I continuously explore new tools and trends, bringing fresh ideas and bold creativity to everything I create.</p></div> <div class="nav-links-container svelte-17ptfp2"><a${attr("href", `${stringify(base)}/portfolio`)} class="nav-link portfolio-link svelte-17ptfp2"><h2 class="svelte-17ptfp2">Portfolio</h2> <img${attr("src", `${stringify(base)}/portfolio.png`)} alt="Portfolio Logo" class="svelte-17ptfp2"></a> <a${attr("href", `${stringify(base)}/cv`)} class="nav-link cv-link svelte-17ptfp2"><h2 class="svelte-17ptfp2">CV</h2> <img${attr("src", `${stringify(base)}/thumbs up.png`)} alt="CV Logo" class="svelte-17ptfp2"></a></div>`;
  pop();
}
export {
  _page as default
};
