const { isPalindrome, isPalindromeBrute } = require('./linkedlist-is-palindrome');
const { LinkedList } = require('../../src');

const toList = (arr) => new LinkedList(arr).first;

[isPalindrome, isPalindromeBrute].forEach((fn) => {
  describe(`isPalindrome: ${fn.name}`, () => {
    it('should work', () => {
      expect(fn()).toEqual(true);
    });

    it('should work different cases', () => {
      expect(fn(toList([1, 2, 3]))).toEqual(false);
      expect(fn(toList([1, 2, 3, 2, 1]))).toEqual(true);
      expect(fn(toList([1, 1, 2, 1]))).toEqual(false);
      expect(fn(toList([1, 2, 2, 1]))).toEqual(true);
    });
  });
});
