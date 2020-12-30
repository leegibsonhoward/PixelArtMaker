export default {
    "roots": [
      "<rootDir>/src"
    ],
    "moduleNameMapper": {
      "\\.(css|scss)$": "<rootDir>/src/__tests__/__mocks__/styleMock.ts"
    },
    "testMatch": [
      "<rootDir/src/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
  }