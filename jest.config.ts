/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  rootDir: __dirname,
  roots: ["<rootDir>/test"],
  setupFiles: [],
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/"],
};
