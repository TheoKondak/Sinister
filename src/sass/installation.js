const fs = require('fs');

const pathPrefix = './../../..';

// Folders to create
const paths = ['/scss', '/scss/pages', '/scss/modules'];

// Files to create
const files = [
  {
    path: '/scss/_sinConfig.scss',
    npmLocation: './init/_sinConfig.scss',
  },
  {
    path: '/scss/_sin.scss',
    npmLocation: './init/_sin.scss',
  },
  {
    path: '/scss/custom.scss',
    npmLocation: './init/custom.scss',
  },
  {
    path: '/scss/modules/_index.scss',
    npmLocation: './init/modules/_index.scss',
  },
  {
    path: '/scss/modules/_example.scss',
    npmLocation: './init/modules/_example.scss',
  },
  {
    path: '/scss/pages/_index.scss',
    npmLocation: './init/pages/_index.scss',
  },
  {
    path: '/scss/pages/_example.scss',
    npmLocation: './init/pages/_example.scss',
  },
];

// Create a new directory
const newDirectory = (path) => {
  fs.access(path, (error) => {
    console.log('======');
    console.log('Access to write new folder "' + path + '" granted...');
    console.log('Creating new directory...');
    // To check if the given directory
    // already exists or not
    if (error) {
      // If current directory does not exist
      // then create it
      fs.mkdir(path, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log('New Directory: "' + path + '"  successfully created.');
        }
      });
    } else {
      console.warn('Directory: "' + path + '" already exists.');
    }
  });
};

// Create a new file and load data
const newFile = (filePath, fileLocationData) => {
  fs.access(filePath, (error) => {
    console.log('======');
    console.log('Access to write new file in ".' + filePath + '" granted...');
    console.log('Creating new file...');
    // To check if the given directory
    // already exists or not
    if (error) {
      // If current directory does not exist
      // then create it

      fs.writeFile(
        filePath,
        fs.readFileSync(fileLocationData, 'utf8'), // Read file syncronously
        (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log('New file: ".' + filePath + '" created successfully !!');
          }
        }
      );
    } else {
      console.warn('Directory: ".' + filePath + '" already exists.');
    }
  });
};

// Create Directories
paths.map((path) => newDirectory(pathPrefix + path));

// Create Files
files.map((file) => newFile(pathPrefix + file.path, file.npmLocation));
