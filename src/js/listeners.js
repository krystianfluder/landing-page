import { buyNowListener } from "./payments";
import { hideLayer, showLayer } from "./animations";

const initListeners = () => {
  const layer = document.querySelector(".layer");

  layer.addEventListener("click", () => {
    hideLayer();
  });

  const heroReadmoreButton = document.getElementById("hero-readmore");
  heroReadmoreButton.addEventListener("click", () => {
    document.querySelector("#benefits").scrollIntoView({
      behavior: "smooth",
    });
  });

  const navigationOpenButton = document.querySelector("#navigation-open");

  navigationOpenButton.addEventListener("click", () => {
    showLayer();
  });

  buyNowListener();
};

export { initListeners };
