const expect = require('chai').expect;
const LinkedList = require('./palindrome');

describe('LinkedList: isPalindrome', function () {
  let list;

  beforeEach(function () {
    list = new LinkedList();
  });

  it('should return true with "a"', function () {
    list.addLast('a');
    expect(list.isPalindrome()).to.equal(true);
  });

  it('should return true with "aba"', function () {
    list.addLast('a');
    list.addLast('b');
    list.addLast('a');
    expect(list.isPalindrome()).to.equal(true);
  });

  it('should return true with "abba"', function () {
    list.addLast('a');
    list.addLast('b');
    list.addLast('b');
    list.addLast('a');
    expect(list.isPalindrome()).to.equal(true);
  });

  it('should return true with "abcba"', function () {
    list.addLast('a');
    list.addLast('b');
    list.addLast('c');
    list.addLast('b');
    list.addLast('a');
    expect(list.isPalindrome()).to.equal(true);
  });

  it('should return false with "abcab"', function () {
    list.addLast('a');
    list.addLast('b');
    list.addLast('a');
    list.addLast('b');
    expect(list.isPalindrome()).to.equal(false);
  });
});