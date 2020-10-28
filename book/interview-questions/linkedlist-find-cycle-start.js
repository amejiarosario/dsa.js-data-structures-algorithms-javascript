// tag::fn[]
/**
 * Find where the cycle starts or null if no loop.
 * @param {Node} head - The head of the list
 * @returns {Node|null}
 */
function findCycleStart(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next; // slow moves 1 by 1.
    fast = fast.next.next; // slow moves 2 by 2.
    if (fast === slow) { // detects loop!
      slow = head; // reset pointer to begining.
      while (slow !== fast) { // find intersection
        slow = slow.next;
        fast = fast.next; // move both pointers one by one this time.
      }
      return slow; // return where the loop starts
    }
  }
  return null; // not found.
}
// end::fn[]

// tag::brute[]
function findCycleStartBrute(head) {
  const visited = new Set();
  let curr = head;
  while (curr) {
    if (visited.has(curr)) return curr;
    visited.add(curr);
    curr = curr.next;
  }
  return null;
}
// end::brute[]

module.exports = { findCycleStart, findCycleStartBrute };
