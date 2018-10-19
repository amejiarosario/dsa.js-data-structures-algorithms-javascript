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

  // collect element up to the middle
  while(fast && fast.next) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  // if odd number of elements
  if(fast) {
    slow = slow.next;
  }

  // compare they are the same as the second half
  while(slow) {
    if(stack.pop() !== slow.data) {
      return false;
    }
    slow = slow.next;
  }

  return true;
};

module.exports = LinkedList;
