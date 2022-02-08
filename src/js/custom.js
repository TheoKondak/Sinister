import { fullScreenMenuGrid } from './sinLoader.js';

//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// Fullscreen Menu Grid
//⚔️⚰️⚰️⚰️⚰️⚰️⚰️⚰️⚔️
// const homeFullScreenMenuGrid = ;

// fullScreenMenuGrid({
//   containerSelector: '#test',
//   backgroundContainerSelector: '.menu-grid--background-container',
//   scaleInDelay: '4000',
//   fadeNewImageDelay: '100',
//   background: [{ dummy: '' }, { home: 'https://vastphotos.com//files/uploads/photos/10684/hero-l.jpg' }, { kitchens: 'https://vastphotos.com/files/uploads/photos/10702/hero-m.jpg' }, { 'modern-kitchens': 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' }, { 'transitional kitchens': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?w=1500&ssl=1' }, { baths: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-10.jpg?w=1500&ssl=1' }, { closets: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-3.jpg?w=1500&ssl=1' }, { about: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-12.jpg?w=1500&ssl=1' }, { contact: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-11.jpg?w=1500&ssl=1' }, { 'request a consultation': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-6.jpg?w=1500&ssl=1' }],
// });

const homeGrid = new fullScreenMenuGrid();

homeGrid.init({
  containerSelector: '#fullScreenImageGrid',
  backgroundContainerSelector: '.menu-grid--background-container',
  defaultImage: '.default-image',
  scaleInDelay: '100',
  fadeAnimationDelay: '140',
  background: [{ dummy: '' }, { home: 'https://vastphotos.com/files/uploads/photos/10702/hero-m.jpg' }, { kitchens: 'https://vastphotos.com//files/uploads/photos/10684/hero-l.jpg' }, { 'modern-kitchens': 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' }, { 'transitional kitchens': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?w=1500&ssl=1' }, { baths: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-10.jpg?w=1500&ssl=1' }, { closets: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-3.jpg?w=1500&ssl=1' }, { about: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-12.jpg?w=1500&ssl=1' }, { contact: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-11.jpg?w=1500&ssl=1' }, { 'request a consultation': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-6.jpg?w=1500&ssl=1' }],
});

// const anotherGrid = new fullScreenMenuGrid();

// anotherGrid.init({
//   containerSelector: '#fullScreenImageGrid-test',
//   backgroundContainerSelector: '.menu-grid--background-container-test',
//   defaultImage: '.default-image-test',
//   scaleInDelay: '100',
//   fadeAnimationDelay: '140',
//   background: [{ dummy: '' }, { homes: 'https://vastphotos.com/files/uploads/photos/10702/hero-m.jpg' }, { kitchensa: 'https://vastphotos.com//files/uploads/photos/10684/hero-l.jpg' }, { 'modern-kitchens': 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' }, { 'transitional kitchens': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?w=1500&ssl=1' }, { baaths: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-10.jpg?w=1500&ssl=1' }, { closeats: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-3.jpg?w=1500&ssl=1' }, { aboaut: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-12.jpg?w=1500&ssl=1' }, { contaact: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-11.jpg?w=1500&ssl=1' }, { 'request a consultation': 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-6.jpg?w=1500&ssl=1' }],
// });

// const newTest = new test();

// newTest.testConstructor('lol');

// const anotherTest = new test();

// anotherTest.testConstructor('lawl');
