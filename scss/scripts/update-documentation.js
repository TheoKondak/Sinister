const fse = require('fs-extra');
const fs = require('fs');

// Copy Documentation to Root
// When new documentation is generated, automatically copy it to the root of sinister.
// First Run Update Version to update the version of the files (including this one)
// Then run `npm run doc` to generate the documentation and copy it to the root directory

// Assets Folder
const srcDir = `documentation/0.6.72-beta.4`;
const destDir = `../`;

fse.copySync(
  srcDir,
  destDir,
  {
    overwrite: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('success!');
    }
  }
);

// index.html file
fs.copyFile('documentation/0.6.72-beta.1/index.html', '../index.html', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});

// css.html file
fs.copyFile('documentation/main.css', '../assets/css/main.css', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});
