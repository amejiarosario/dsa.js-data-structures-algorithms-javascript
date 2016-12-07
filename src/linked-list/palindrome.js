const LinkedList = require('./linkedlist');

/**
 * Found is a linkedList elements are a palindrome.
 * assumes that we don't know the size of the list, thus using the two pointers (fast/slow runner).
 * @returns {boolean}
 */
LinkedList.prototype.isPalindrome = function() {
  const stack = [];
  let slow = this.head;
  let fast = this.head;

  if(fast.next === null) {
    return true;
  }

  stack.push(slow.data);

  // collect element up to the middle
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(fast.next) { stack.push(slow.data); }
  }

  // compare they are the same as the second half
  while(slow.next) {
    slow = slow.next;
    if(stack.pop() !== slow.data) {
      return false;
    }
  }

  return true;
};

module.exports = LinkedList;
