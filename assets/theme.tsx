import { initScrollSlider } from "scroll-slider";
import { initSlideshowNew } from "slideshow-new";

const initNoJs = () => {
  document
    .querySelectorAll(".no-js-hidden")
    .forEach((element) => element.classList.remove("no-js-hidden"));
};

const initTheme = () => {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    `${window.innerWidth - document.documentElement.clientWidth}px`
  );

  initNoJs();

  initSlideshowNew();
  initScrollSlider();

};

initTheme();

document.addEventListener("shopify:section:load", (e) => {
  const element = e.target as HTMLElement;
  const { type, disabled } = JSON.parse(element.dataset.shopifyEditorSection);

  initTheme();
});


export default initTheme;
