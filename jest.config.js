module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  moduleNameMapper: {
    '@root': '<rootDir>/src',
    '@app': '<rootDir>/src/app',
    '@config': '<rootDir>/src/config',
    '@libs': '<rootDir>/src/libs',
  },
};
