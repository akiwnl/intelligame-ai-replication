module.exports = {
  verbose: false,
  testMatch: ['<rootDir>/src/**/test.ts'],
  moduleFileExtensions: ['js', 'mjs', 'ts'],
  // resolve imports relativos com extensão .js para os arquivos .ts (ex.: "../toDate/index.js" -> index.ts)
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
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
