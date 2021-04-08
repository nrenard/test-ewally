/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

const config: any = {
  roots: ['<rootDir>/src'],

  clearMocks: true,

  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  coverageProvider: 'v8',

  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  coverageDirectory: 'coverage',

  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
