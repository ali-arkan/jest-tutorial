function sum(a, b) {
    return a + b;
  }
  
  // Jest test with test.each
  describe('sum function tests', () => {
    test.each([
      [1, 2, 3],
      [5, 5, 10],
      [10, -5, 5]
    ])('adds %d and %d to equal %d', (a, b, expected) => {
      expect(sum(a, b)).toBe(expected);
    });
  });
  


  function multiply(a, b, c) {
    return a * b * c;
  }
  
  describe('multiply function tests', () => {
    test.each([
      [1, 2, 3, 6],
      [2, 3, 4, 24],
      [-1, 5, 2, -10]
    ])('multiplies %d, %d, and %d to equal %d', (a, b, c, expected) => {
      expect(multiply(a, b, c)).toBe(expected);
    });
  });
  