import { getSin } from '../getSin.js';
// Inspiration from Kevin Powell
// Video: https://www.youtube.com/watch?v=T8EYosX4NOo
// Source: https://github.com/kevin-powell/slide-in-with-intersection-observer/blob/master/start/js/observers.js
// Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const data = await getSin(); // Get sin calls the sin.json file options for JS related options.
const menuBgOnScrollOptions = data.menuBgOnScroll;
const target = document.querySelector(menuBgOnScrollOptions.target);

if (typeof menuBgOnScrollOptions.target === 'string') {
  const targetFirstChar = menuBgOnScrollOptions.target.charAt(0); // To find out if its an html tag, class or id
} else {
  console.warn('"target" in sin.json must be type of string.');
  console.warn('Example "navbar", ".navbar", "#navbar"');
}

const className = menuBgOnScrollOptions.className;

export const menuBgOnScroll = new IntersectionObserver(function (entries, menuBgOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      if (!target) {
        console.error('target in sin.json cannot be empty');
      } else {
        target.classList.add(className);
      }
    } else {
      target.classList.remove(className);
    }
    return;
  });
}, menuBgOnScrollOptions.observerOptions);
