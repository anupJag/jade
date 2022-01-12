module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
    "^.+\\.css$": `${process.cwd()}/config/jest/cssTransform.js`,
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": `${process.cwd()}/config/jest/fileTransform.js`
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  coverageReporters: ['html'],
  setupFilesAfterEnv: [`${process.cwd()}/config/jest/setupTests.js`],
};
