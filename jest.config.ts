/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
  transform: { "^.+.(ts|tsx)$": "babel-jest" },
};

module.exports = config;
