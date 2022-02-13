import { FullScreenMenuGrid } from './sinLoader.js';
import { CheckOverflow } from './sinLoader.js';

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// Fullscreen Menu Grid
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
const homeGrid = new FullScreenMenuGrid();

homeGrid.init({
  containerSelector: '#fullScreenImageGrid',
  backgroundContainerSelector: '.menu-grid--background-container',
  defaultImage: '.default-image',
  scaleInDelay: '100',
  fadeAnimationDelay: '140',
  background: [{ dummy: '' }, { home: 'https://vastphotos.com/files/uploads/photos/10702/hero-m.jpg' }, { kitchens: 'https://vastphotos.com//files/uploads/photos/10684/hero-l.jpg' }, { 'modern-kitchens': 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' }, { 'transitional kitchens': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?w=1500&ssl=1' }, { baths: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-10.jpg?w=1500&ssl=1' }, { closets: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-3.jpg?w=1500&ssl=1' }, { about: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-12.jpg?w=1500&ssl=1' }, { contact: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-11.jpg?w=1500&ssl=1' }, { 'request a consultation': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-6.jpg?w=1500&ssl=1' }],
});

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// Check Overflow
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
CheckOverflow('#fullScreenImageGrid');
// CheckOverflow('.i-want-to-become-sticky');
