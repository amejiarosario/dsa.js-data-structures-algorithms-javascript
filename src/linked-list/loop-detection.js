const LinkedList = require('./linkedlist');


LinkedList.prototype.getLoop = loopDetection;

/**
 * O(n) / O(1) -
 * @returns {*}
 */
function loopDetection() {
  let slow = this.head;
  let fast = this.head;

  // first collision will happen k nodes before the beginning of the loop.
  // k it also happen to be the distance from the head to the beginning of the loop
  while(slow && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) { break; }
  }

  // loop detected
  // rewind slow and move both one at time.
  // When they meet together is the beginning of the loop
  if(slow === fast) {
    for(slow = this.head; slow && fast; slow = slow.next, fast = fast.next) {
      if(slow === fast) {
        return slow;
      }
    }
  }

  // no loop detected
  return false;

}

/**
 * O(n) / O(n) - hashmap of addresses
 * @returns {*}
 */
function loopDetection2() {
  var map = new Map();

  for(let i = this.head; i; i = i.next) {
    if(map.has(i)) {
      return i;
    } else {
      map.set(i, 1);
    }
  }

  return false;
}

module.exports = LinkedList;