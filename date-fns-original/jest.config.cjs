module.exports = {
  verbose: false,
  testMatch: ['<rootDir>/src/**/test.ts'],
  moduleFileExtensions: ['js', 'mjs', 'ts'],
  testPathIgnorePatterns: [
    '<rootDir>/index.index.index.index.index.index.index.index.index.index.index.index.index.index.test.js',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
    "^.+\\.js$": "babel-jest"
  }
}
