module.exports = {
  collectCoverageFrom: ["**/*.{js,jsx}", "!**/*.d.ts", "!**/node_modules/**"],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/components/$1",
    "^pages/(.*)$": "<rootDir>/pages/$1",
    // "^contentlayer/generated/(.*)$": "<rootDir>/.contentlayer/generated/$1",
    "contentlayer/generated": "<rootDir>/.contentlayer/generated",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
