module.exports = {
    preset: 'ts-jest',
    testEnvironment: "allure-jest/jsdom", //testEnvironment: 'node',
    reporters: [
      'default',
      ['jest-allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      }],
    ],
  };
  
  