const fs = require('fs');

// Folders to create
const paths = ['./scss', './scss/pages', './scss/modules'];

// Files to create
const files = [
  {
    path: './scss/_sinConfig.scss',
    npmLocation: './node_modules/@get-sinister/sass/_sinConfig.scss',
  },
];

// Create a new directory
const newDirectory = (path) => {
  fs.access(path, (error) => {
    // To check if the given directory
    // already exists or not
    if (error) {
      // If current directory does not exist
      // then create it
      fs.mkdir(path, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log('New Directory: "' + path + '" created successfully !!');
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
            console.log('New Directory: "' + filePath + '" created successfully !!');
          }
        }
      );
    } else {
      console.warn('Directory: "' + filePath + '" already exists.');
    }
  });
};

// Create Directories
paths.map((path) => newDirectory(path));

// Create Files
files.map((file) => newFile(file.path, file.npmLocation));
