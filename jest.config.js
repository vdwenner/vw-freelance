// jest.setup.js
const originalWarn = console.warn;

console.warn = (...args) => {
  if (args[0].includes('React Router Future Flag Warning') || args[0].includes('DeprecationWarning')) {
    return;
  }
  originalWarn(...args);
};
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
  };
  