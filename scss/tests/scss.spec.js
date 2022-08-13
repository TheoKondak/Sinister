<<<<<<< HEAD
// const path = require('path');
// const sassTrue = require('sass-true');
// const glob = require('glob');

// const testPath = `tests/**/*.spec.scss`;

// describe('Sass', () => {
//   const getResults = async () => await glob.sync(path.resolve(process.cwd(), testPath));
//   const testFiles = getResults();

//   // Run on each file with describe() and it() functions
//   testFiles.forEach((file) => sassTrue.runSass({ file: file }, { describe, it }));
// });

const path = require('path');
const sassTrue = require('sass-true');

// const sassFile = path.join(__dirname, 'deleteme.spec.scss');
// sassTrue.runSass({ file: sassFile }, { describe, it });

// const otherFile = path.join(__dirname, 'deleteme02.spec.scss');
// sassTrue.runSass({ file: otherFile }, { describe, it });

const flexFile = path.join(__dirname, 'flex.spec.scss');
sassTrue.runSass({ file: flexFile }, { describe, it });

const spacingFile = path.join(__dirname, 'spacing.spec.scss');
sassTrue.runSass({ file: spacingFile }, { describe, it });

const mq = path.join(__dirname, 'mq.spec.scss');
sassTrue.runSass({ file: mq }, { describe, it });

const mqMin = path.join(__dirname, 'mq-min.spec.scss');
sassTrue.runSass({ file: mqMin }, { describe, it });

const mqMax = path.join(__dirname, 'mq-max.spec.scss');
sassTrue.runSass({ file: mqMax }, { describe, it });

const fontSize = path.join(__dirname, 'font-size.spec.scss');
sassTrue.runSass({ file: fontSize }, { describe, it });

const starts = path.join(__dirname, 'starts.spec.scss');
sassTrue.runSass({ file: starts }, { describe, it });

const ends = path.join(__dirname, 'ends.spec.scss');
sassTrue.runSass({ file: ends }, { describe, it });

const has = path.join(__dirname, 'has.spec.scss');
sassTrue.runSass({ file: has }, { describe, it });

const simpleGrid = path.join(__dirname, 'simple-grid.spec.scss');
sassTrue.runSass({ file: simpleGrid }, { describe, it });
