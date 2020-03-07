module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],
  moduleNameMapper: {
    "@/(.*)$": "rootDir/src/$1",
  },
  modulePathIgnorePatterns: [],
  resetMocks: false,
  resetModules: false,
  resolver: undefined,
  setupFilesAfterEnv: ['<rootDir>__test__/setupTests.ts'],
  // rootDir: undefined,
  // roots: [
  //   "<rootDir>"
  // ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};
