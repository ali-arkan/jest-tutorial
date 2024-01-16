// File: math.test.js

const { addNumbers } = require('./math');

// Mocking the addNumbers function
jest.mock('./math');

describe('Testing addNumbers function', () => {
  it('should mock the addNumbers function', () => {
    // Mocking the implementation of addNumbers
    addNumbers.mockImplementation((a, b) => a * b);

    // Using the mock function
    const result = addNumbers(2, 3);

    // Assertions
    expect(result).toBe(6);

    // Optional: Check how many times the mock function was called
    expect(addNumbers).toHaveBeenCalledTimes(1);

    // Optional: Check with what arguments the mock function was called
    expect(addNumbers).toHaveBeenCalledWith(2, 3);
  });
});
