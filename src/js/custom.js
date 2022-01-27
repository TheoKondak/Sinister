import { fullScreenMenuGrid } from './sinLoader.js';

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// Fullscreen Menu Grid
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
const homeFullScreenMenuGrid = {
  containerSelector: '.menu-grid--container',
  backgroundContainerSelector: '.menu-grid--background-container',
  itemSelector: '.menu-grid--item',
  delay: '200',
  background: [{ dummy: '' }, { home: 'https://vastphotos.com//files/uploads/photos/10684/hero-l.jpg' }, { kitchens: 'https://vastphotos.com/files/uploads/photos/10702/hero-m.jpg' }, { 'modern-kitchens': 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' }, { 'transitional kitchens': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?w=1500&ssl=1' }, { baths: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-10.jpg?w=1500&ssl=1' }, { closets: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-3.jpg?w=1500&ssl=1' }, { about: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-12.jpg?w=1500&ssl=1' }, { contact: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-11.jpg?w=1500&ssl=1' }, { 'request a consultation': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-6.jpg?w=1500&ssl=1' }],
};

fullScreenMenuGrid(homeFullScreenMenuGrid);
