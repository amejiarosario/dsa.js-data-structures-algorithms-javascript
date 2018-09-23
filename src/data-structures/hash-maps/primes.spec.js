const { nextPrime, isPrime, isOdd } = require('./primes');

describe('Prime Util Tests', () => {
  describe('#isPrime', () => {
    test('2 is prime', () => {
      expect(isPrime(2)).toBe(true);
    });

    test('1 is not prime', () => {
      expect(isPrime(1)).toBe(false);
    });

    test('large prime number', () => {
      expect(isPrime(914021)).toBe(true);
    });

    test('non prime number', () => {
      expect(isPrime(99)).toBe(false);
    });
  });

  describe('#isOdd', () => {
    it('odd number', () => {
      expect(isOdd(1)).toBe(true);
    });

    it('even number', () => {
      expect(isOdd(10)).toBe(false);
    });

    it('zero is an even number', () => {
      expect(isOdd(0)).toBe(false);
    });
  });

  describe('#nextPrime', () => {
    it('should find the next prime of 19', () => {
      expect(nextPrime(38)).toBe(41);
    });

    it('should find the next prime of 11558', () => {
      expect(nextPrime(11558)).toBe(11579);
    });

    it('should find the next prime of large number', () => {
      expect(nextPrime(11579 * 2)).toBe(23159);
    });

    it('should find of negative number', () => {
      expect(nextPrime(-1)).toBe(2);
    });
  });
});
