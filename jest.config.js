module.exports = {
    ...require('react-scripts/config/jest/jest-config'),
    transform: {},
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    extensionsToTreatAsEsm: ['.js', '.jsx', '.ts', '.tsx'],
    testPathIgnorePatterns: ["/node_modules/", "**/node_modules/"]
  };