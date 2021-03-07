/* module.exports = {
    moduleDirectories: [
      'node_modules',
     // add the directory with the test-utils.js file, for example:
     'utils', // a utility folder
      __dirname, // the root directory
    ],
    // ... other options ...
  }

 */

module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
};