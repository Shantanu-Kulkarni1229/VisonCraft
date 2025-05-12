module.exports = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  testMatch: [
    '**/tests/**/*.test.js'
  ],
  setupFiles: ['dotenv/config'],
  testTimeout: 30000
};