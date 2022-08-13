// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/private/var/folders/xv/yhn4k6yd0kv8fgq5vmkffrvr0000gn/T/jest_dx",

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['sin-core/**/*.{scss}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "babel",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text-summary', 'html'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  	
};

module.exports = config;
