module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/app.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  moduleNameMapper: {
    '@root': '<rootDir>/src',
    '@app': '<rootDir>/src/app',
    '@config': '<rootDir>/src/config',
    '@libs': '<rootDir>/src/libs',
  },
};
