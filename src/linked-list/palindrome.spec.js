const LinkedList = require('./palindrome');

describe('LinkedList: isPalindrome', function () {
  let list;

  beforeEach(function () {
    list = new LinkedList();
  });

  it('should pass', function () {
    list.addLast('a');
    expect(list.isPalindrome()).toBe(true);
  });
});