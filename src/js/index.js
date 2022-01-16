import { menuBgOnScroll } from './intersectionObservers/menuBgOnScroll.js';
import { getSin } from './getSin.js';
import { help } from './help/help.js';

// Get Data from sin.json
const data = await getSin();

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// HELP
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
help(data.help);

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// Menu Background On Scroll
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
menuBgOnScroll.observe(document.querySelector(data.menuBgOnScroll.triggerElement));
