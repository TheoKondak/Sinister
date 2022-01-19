import { getSin } from '../getSin.js';

const data = await getSin(); // Get sin calls the sin.json file options for JS related options.

const container = document.querySelector('.menu-grid--container'); // Parent Container to which the background image will be attached
const backgroundImageContainer = document.querySelector('.menu-grid--background-container');
const backgroundImage = document.querySelector('.menu-grid--background');
const menuItemsArray = []; // An array that will hold all the menu items

document.querySelectorAll('.menu-grid--item').forEach((userItem) => menuItemsArray.push(userItem)); // Find the menu items, add them to the menuItemsArray

export const fullScreenMenuGrid = () => {
  const menuItemsContent = [];
  let menuItemClass = '';

  menuItemsArray.forEach((item) => {
    // For each menu item

    item.childNodes.forEach((childNode) => {
      // For each child node
      menuItemClass = typeof childNode.innerText != 'undefined' && childNode.innerText; // For some reason for each item i get undefined. I can't solve it now, but this is a workaround.
    });

    menuItemsContent.push(menuItemClass.toLocaleLowerCase());

    item.classList.add(menuItemClass.toLocaleLowerCase()); // Add a unique class to the menu grid item
  });

  menuItemsContent.forEach((menuItem) => {
    const newImage = document.createElement('img');

    // ENTERED ITEM
    document.querySelector('.' + menuItem).addEventListener('mouseenter', (e) => {
      for (const menuItemId in data.fullScreenMenuGrid.background) {
        const currentMenuKey = Object.keys(data.fullScreenMenuGrid.background[menuItemId]);
        const currentMenuUrl = Object.values(data.fullScreenMenuGrid.background[menuItemId]);

        if (menuItem == currentMenuKey) {
          setTimeout(function () {
            // container.style.backgroundImage = "url('" + currentMenuUrl + "')"; // Old Aproach for background-image properties
            // backgroundImage.src = backgroundImageContainer; // Works with Image HTML element
            backgroundImageContainer.classList.add('scale-in');
          }, 100);
          newImage.src = currentMenuUrl;
          backgroundImageContainer.insertBefore(newImage, document.querySelector('.default-image')).classList.add('menu-grid--background', 'fade-in');
        }
      }
    });

    // LEFT ITEM
    document.querySelector('.' + menuItem).addEventListener('mouseleave', (e) => {
      backgroundImage.classList.remove('fade-in');
      backgroundImageContainer.classList.remove('scale-in');
      backgroundImage.classList.add('fade-out');

      setTimeout(() => {
        backgroundImageContainer.removeChild(newImage);
      }),
        3800;
    });
  });
};
