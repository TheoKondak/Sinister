import { menuBgOnScroll } from './intersectionObservers/menuBgOnScroll.js';
import { fullScreenMenuGrid } from './components/fullScreenMenuGrid.js';
import { getSin } from './getSin.js';
import { help } from './help/help.js';

// Get Data from sin.json
const data = await getSin();
if (typeof data.production === 'boolean') {
  if (!data.production) {
    console.warn('Production mode: False, before going live make sure you set it to true in sin.json');

    //⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
    // HELP
    //⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
    help(data.help);
  }
} else {
  console.warn('"production" in sin.json must be type of boolean, but it is: ' + typeof data.production);
}

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// Menu Background On Scroll
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// menuBgOnScroll.observe(document.querySelector(data.menuBgOnScroll.triggerElement));

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// Fullscreen Menu Grid
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
fullScreenMenuGrid();
