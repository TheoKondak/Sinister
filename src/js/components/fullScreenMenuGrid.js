import { getSin } from '../getSin.js';

const data = await getSin(); // Get sin calls the sin.json file options for JS related options.

const backgroundImageContainer = document.querySelector('.menu-grid--background-container');
const backgroundImage = document.querySelector('.menu-grid--background');
const menuItemsArray = []; // An array that will hold all the menu items

document.querySelectorAll('.menu-grid--item').forEach((userItem) => menuItemsArray.push(userItem)); // Find the menu items, add them to the menuItemsArray

export const fullScreenMenuGrid = () => {
  const menuItemsContent = [];
  let menuItemClass = '';

  // For each menu item
  menuItemsArray.forEach((item) => {
    // For each child node
    item.childNodes.forEach((childNode) => {
      // Add class to items
      menuItemClass = typeof childNode.innerText != 'undefined' && childNode.innerText; // For some reason for each item i get undefined. I can't solve it now, but this is a workaround.
    });

    menuItemsContent.push(menuItemClass.toLocaleLowerCase());

    item.classList.add(menuItemClass.toLocaleLowerCase()); // Add a unique class to the menu grid item
  });

  setTimeout(() => {
    console.log('this is the first message');
  }, 5000);
  setTimeout(() => {
    console.log('this is the second message');
  }, 3000);

  menuItemsContent.forEach((menuItem) => {
    const newImage = document.createElement('img');

    for (const menuItemId in data.fullScreenMenuGrid.background) {
      const currentMenuKey = Object.keys(data.fullScreenMenuGrid.background[menuItemId]);
      const currentMenuUrl = Object.values(data.fullScreenMenuGrid.background[menuItemId]);

      if (menuItem == currentMenuKey) {
        setTimeout(function () {
          backgroundImageContainer.classList.add('scale-in');
        }, 100);

        newImage.src = currentMenuUrl;
        backgroundImageContainer.insertBefore(newImage, document.querySelector('.default-image')).classList.add('menu-grid--background', 'hidden', menuItem);
      }

      // ENTERED ITEM
      document.querySelector('.' + menuItem).addEventListener('mouseenter', (e) => {
        newImage.classList.remove('hidden');
        newImage.classList.add('fade-in');
        setTimeout(() => {
          backgroundImageContainer.classList.add('scale-in');
          console.log('lol');
        }, 1000);
      });

      // LEFT ITEM
      document.querySelector('.' + menuItem).addEventListener('mouseleave', (e) => {
        newImage.classList.remove('fade-in');

        newImage.classList.add('hidden');

        backgroundImageContainer.classList.remove('scale-in');
        setTimeout(() => {}, 800);
      });
    }
  });
};
