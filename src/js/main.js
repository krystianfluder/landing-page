import "../scss/main.scss";

import { animateHero, hideLayer } from "./animations";
import { initListeners } from "./listeners";

initListeners();

// init animation

const tl = hideLayer();
animateHero(tl);
