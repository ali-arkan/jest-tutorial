import { loadFeature, defineFeature } from 'jest-cucumber';

// Load the feature file
const feature = loadFeature('specs/features/basic-scenarios.feature');

// Define the feature
defineFeature(feature, (test) => {
  let calculator;

  // Initialize the calculator before each scenario
  beforeEach(() => {
    calculator = {
      result: 0,
      add: (a, b) => {
        calculator.result = a + b;
      },
      multiply: (a, b) => {
        calculator.result = a * b;
      }
    };
  });

  // Define steps for the scenario "Adding two numbers"
  test('Adding two numbers', ({ given, and, when, then }) => {
    given(/^I have entered (\d+) into the calculator$/, (number) => {
      // Simulate entering numbers into the calculator
      calculator.firstNumber = parseInt(number);
    });

    and(/^I have entered (\d+) into the calculator$/, (number) => {
      // Simulate entering numbers into the calculator
      calculator.secondNumber = parseInt(number);
    });

    when('I press add', () => {
      calculator.add(calculator.firstNumber, calculator.secondNumber);
    });

    then(/^the result should be (\d+) on the screen$/, (expectedResult) => {
      expect(calculator.result).toBe(parseInt(expectedResult));
    });
  });

  // Define steps for the scenario "Multiplying two numbers"
  test('Multiplying two numbers', ({ given, and, when, then }) => {
    given(/^I have entered (\d+) into the calculator$/, (number) => {
      // Simulate entering numbers into the calculator
      calculator.firstNumber = parseInt(number);
    });

    and(/^I have entered (\d+) into the calculator$/, (number) => {
      // Simulate entering numbers into the calculator
      calculator.secondNumber = parseInt(number);
    });

    when('I press multiply', () => {
      calculator.multiply(calculator.firstNumber, calculator.secondNumber);
    });

    then(/^the result should be (\d+) on the screen$/, (expectedResult) => {
      expect(calculator.result).toBe(parseInt(expectedResult));
    });
  });
});
