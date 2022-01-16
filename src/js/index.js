import { menuBgOnScroll } from './intersectionObservers/menuBgOnScroll.js';
import { getSin } from './getSin.js';

// Get Data from sin.json
const data = await getSin();

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// Menu Background On Scroll
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
menuBgOnScroll.observe(document.querySelector(data.menuBgOnScroll.triggerElement));
