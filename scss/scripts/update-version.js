// 👇️ if using ES6 imports uncomment next line
// import { readFile, writeFile, writeFileSync, promises as fsPromises } from 'fs';
const { readFile, writeFile, promises: fsPromises } = require('fs');

// How to Update Sinister version
// 1 Run: npm run version-update 0.6.70-beta.3

// Options
const oldVersion = process.env.npm_package_version; // Get npm package version from package.json
const newVersion = process.argv.slice(2); // Get new package version from command arguement

const files = ['.sassdocrc', 'sin-core/misc/_warning-message-start.scss', 'sin-core/misc/_warning-message-eof.scss', 'scripts/update-documentation.js']; // Files that will be updated

const updateVersion = (oldVersion = oldVersion, newVersion = newVersion, files = files) => {
  files.forEach((file) => {
    console.log('====');
    console.log('Opening file: ' + file);
    console.log('====');
    readFile(file, 'utf-8', function (err, contents) {
      if (err) {
        console.log(err);
        return;
      }
      const replaced = contents.replace(oldVersion, newVersion);
      console.log('----');
      console.log('Replacing: ' + oldVersion + ' with ' + newVersion + ' in ' + file);
      console.log('Writing File');

      writeFile(file, replaced, 'utf-8', function (err) {
        console.log(err);
      });
    });
  });
};

updateVersion(oldVersion, newVersion, files);
