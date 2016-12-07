const LinkedList = require('./linkedlist');

LinkedList.prototype.isPalindrome = function() {
  const queue = [];
  let i1 = this.head;
  let i2 = this.head;

  if(this.size() === 1) {
    return true;
  }

  queue.push(i1.data);

  // collect element up to the middle
  while(i2.next.next) {
    i1 = i1.next;
    i2 = i2.next.next;
    if(i2.next) { queue.push(i1.data); }
  }

  // compare they are the same as the second half
  while(i1.next) {
    i1 = i1.next;
    if(queue.pop() !== i1.data) {
      return false;
    }
  }

  return true;
};

module.exports = LinkedList;
