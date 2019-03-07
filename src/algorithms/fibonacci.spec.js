const implementations = [
  'fibonacci',
  'fibonacci-recursive',
  'fibanacci-dynamic-programming',
];

implementations.forEach((fileName) => {
  const getFibonacci = require(`./${fileName}`); // eslint-disable-line

  describe(`#getFibonacci (file: ${fileName})`, () => {
    it('should return first two fib numbers', () => {
      expect(getFibonacci(0)).toBe(0);
      expect(getFibonacci(1)).toBe(1);
    });

    it('should calculate 3rd fib number', () => {
      expect(getFibonacci(2)).toBe(1);
    });

    it('should calculate 4rd fib number', () => {
      expect(getFibonacci(3)).toBe(2);
    });

    it('should calculate 13th fib number', () => {
      expect(getFibonacci(12)).toBe(144);
    });
  });
});
