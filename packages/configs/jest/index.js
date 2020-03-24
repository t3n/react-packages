module.exports = {
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'],
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/setupFile.js'],
};
