const ListNode = require('../../src/data-structures/linked-lists/node');
// tag::description[]
/**
 * Given two sorted linked lists merge them while keeping the asc order.
 * @examples
 *    mergeTwoLists([2,4,6], [1,3]); // => [1,2,3,4,6]
 *    mergeTwoLists([2,4,6], []); // => [2,4,6]
 *    mergeTwoLists([], [1,3]); // => [1,3]
 * @param {number[]} prices - Array with daily stock prices
 */
function mergeTwoLists(l1, l2) {
  // end::description[]
  // tag::solution[]
  const l0 = new ListNode();
  let i0 = l0;
  let i1 = l1;
  let i2 = l2;

  while (i1 || i2) {
    if (!i1 || (i2 && i1.value > i2.value)) {
      i0.next = i2;
      i2 = i2.next;
    } else {
      i0.next = i1;
      i1 = i1.next;
    }

    i0 = i0.next;
  }

  return l0.next;
}
// end::solution[]


module.exports = { mergeTwoLists };
