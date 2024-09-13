module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    testRunner:'jasmine2',
    reporters: [
      'default',
      ['jest-allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      }],
    ],
  };
  
  