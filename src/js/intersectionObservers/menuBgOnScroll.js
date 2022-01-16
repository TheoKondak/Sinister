import { getSin } from '../getSin.js';
// Inspiration from Kevin Powell
// Video: https://www.youtube.com/watch?v=T8EYosX4NOo
// Source: https://github.com/kevin-powell/slide-in-with-intersection-observer/blob/master/start/js/observers.js
// Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const data = await getSin(); // Get sin calls the sin.json file options for JS related options.
const menuBgOnScrollOptions = data.menuBgOnScroll;

const target = document.querySelector(menuBgOnScrollOptions.target);

export const menuBgOnScroll = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      target.classList.add('nav-scrolled');
      console.log('Add Nav Scrolled');
    } else {
      target.classList.remove('nav-scrolled');
      console.log('Remove Nav Scrolled');
    }
  });
}, menuBgOnScrollOptions.observerOptions);
