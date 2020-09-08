import { gsap } from "gsap";

const hideLayer = () => {
  const layer = document.querySelector(".layer");
  const tl = gsap.timeline();
  tl.to(layer.children, { y: "-100vh", stagger: 0.05 });
  tl.to(layer, { zIndex: -1 });
  return tl;
};

const showLayer = () => {
  const layer = document.querySelector(".layer");
  const items = [];
  gsap.set(layer, { zIndex: 1 });

  [...layer.children].forEach((item) => {
    items.push(item.children);
  });
  gsap.to(items, { opacity: 1 });
  gsap.to(layer.children, { y: "0", stagger: 0.1 });
};

const animateHero = (tl) => {
  const heroText = document.querySelector(".hero__text");
  const heroActions = document.querySelector(".hero__actions");
  const heroImage = document.querySelector(".hero__image");

  gsap.set([heroActions.children, heroImage], {
    y: "20px",
    x: "20px",
    opacity: 0,
  });

  gsap.set(heroText.children, {
    x: "20px",
    opacity: 0,
  });

  tl.to([heroImage, heroText.children, heroActions.children], {
    x: "0",
    opacity: 1,
    stagger: 0.1,
  });

  tl.to(heroActions.children, { y: "0", opacity: 1, stagger: 0.05 });
};

export { animateHero, hideLayer, showLayer };
