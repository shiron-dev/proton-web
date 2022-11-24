import type { Config } from "jest";
import nextJest from "next/jest";

const createNextJestConfig = nextJest({
  dir: "./",
});

const jestConfig: Config = {
  verbose: true,
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
};

const config = createNextJestConfig(jestConfig);

export default config;
