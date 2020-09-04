const ListNode = require('../../src/data-structures/linked-lists/node');
// tag::description[]
/**
 * Given two sorted linked lists merge them while keeping the asc order.
 * @examples
 *    mergeTwoLists([2,4,6], [1,3]); // => [1,2,3,4,6]
 *    mergeTwoLists([2,4,6], []); // => [2,4,6]
 *    mergeTwoLists([], [1,3]); // => [1,3]
 *
 * @param {ListNode} l1 - The root node of list 1
 * @param {ListNode} l2 - The root node of list 2
 * @returns {ListNode} - The root of the merged list.
 */
function mergeTwoLists(l1, l2) {
  // end::description[]
  // tag::solution[]
  const sentinel = new ListNode();
  let p0 = sentinel;
  let p1 = l1;
  let p2 = l2;

  while (p1 || p2) {
    if (!p1 || (p2 && p1.value > p2.value)) {
      p0.next = p2;
      p2 = p2.next;
    } else {
      p0.next = p1;
      p1 = p1.next;
    }
    p0 = p0.next;
  }

  return sentinel.next;
}
// end::solution[]


module.exports = { mergeTwoLists };
