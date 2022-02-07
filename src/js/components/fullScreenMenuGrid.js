export const fullScreenMenuGrid = (
  data = {
    // Default values
    containerSelector: '.menu-grid--container',
    backgroundContainerSelector: '.menu-grid--background-container',
    scaleInDelay: '4000',
    background: [{ dummy: '' }, { home: 'https://vastphotos.com//files/uploads/photos/10684/hero-l.jpg' }, { kitchens: 'https://vastphotos.com/files/uploads/photos/10702/hero-m.jpg' }, { 'modern-kitchens': 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' }, { 'transitional kitchens': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?w=1500&ssl=1' }, { baths: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-10.jpg?w=1500&ssl=1' }, { closets: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-3.jpg?w=1500&ssl=1' }, { about: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-12.jpg?w=1500&ssl=1' }, { contact: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-11.jpg?w=1500&ssl=1' }, { 'request a consultation': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-6.jpg?w=1500&ssl=1' }],
  }
) => {
  const { containerSelector, backgroundContainerSelector, scaleInDelay } = data; // destructure data

  const moduleContainer = document.querySelector(containerSelector);
  const backgroundImageContainer = moduleContainer.querySelector(backgroundContainerSelector);

  const menuItemsArray = []; // An array that will hold all the menu items
  const menuItemsContent = [];
  let menuItemClass = '';
  moduleContainer.querySelectorAll('.fill-container').forEach((userItem) => menuItemsArray.push(userItem)); // Find the menu items, add them to the menuItemsArray
  // For each menu item
  menuItemsArray.forEach((item) => {
    // For each child node
    item.childNodes.forEach((childNode) => {
      // Add class to items
      menuItemClass = typeof childNode.innerText === 'string' && childNode.innerText; // For some reason for each item i get undefined. I can't solve it now, but this is a workaround.
    });
    menuItemsContent.push(menuItemClass.replace(/\s+/g, '-').toLocaleLowerCase());

    item.classList.add(menuItemClass.replace(/\s+/g, '-').toLocaleLowerCase()); // Add a unique class to the menu grid item
  });

  menuItemsContent.forEach((menuItem) => {
    const newImage = document.createElement('img');

    for (const menuItemId in data.background) {
      const currentMenuKey = Object.keys(data.background[menuItemId]);
      const currentMenuUrl = Object.values(data.background[menuItemId]);

      if (menuItem.replace(/\s+/g, '-').toLocaleLowerCase() === currentMenuKey[0].replace(/\s+/g, '-').toLocaleLowerCase()) {
        setTimeout(function () {
          backgroundImageContainer.classList.add('scale-in');
        }, 100);

        newImage.src = currentMenuUrl;

        backgroundImageContainer.insertBefore(newImage, document.querySelector('.default-image')).classList.add('menu-grid--background', 'hidden', menuItem.replace(/\s+/g, '-').toLocaleLowerCase());
      }

      // ENTERED ITEM
      document.querySelector('.' + menuItem).addEventListener('mouseenter', (e) => {
        setTimeout(() => {
          newImage.classList.remove('hidden');
          newImage.classList.add('fade-in');
        }, 40); // set a delay in ms

        setTimeout(() => {
          backgroundImageContainer.classList.add('scale-in');
        }, scaleInDelay);
      });

      // LEFT ITEM
      document.querySelector('.' + menuItem).addEventListener('mouseleave', (e) => {
        setTimeout(() => {
          newImage.classList.remove('fade-in');

          newImage.classList.add('hidden');
        }, 40); // set a delay in ms

        backgroundImageContainer.classList.remove('scale-in');
        setTimeout(() => {}, 800);
      });
    }
  });
};
