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
