module.exports = {
  moduleFileExtensions: ["js"],
  transform: {
    "^.+\\.js?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/.*$": "<rootDir>/src/$1",
    "\\.css$": "identity-obj-proxy"
  },
  testMatch: ["<rootDir>/**/*.test.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
