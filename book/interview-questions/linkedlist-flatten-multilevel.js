// tag::fn[]
/**
 * Flatten a multi-level to a single level
 * @param {Node} head
 * @return {Node}
 */
function flatten(head) {
  for (let curr = head; curr; curr = curr.next) {
    if (!curr.child) continue;

    let last = curr.child;
    while (last && last.next) last = last.next; // find "child"'s last
    if (curr.next) { // move "next" to "child"'s last postion
      last.next = curr.next;
      curr.next.previous = last;
    }
    curr.next = curr.child; // override "next" with "child".
    curr.child.previous = curr;
    curr.child = null; // clean "child" pointer.
  }

  return head;
}
// end::fn[]

// tag::fn2[]
function flattenBrute(head) {
  const stack = [];
  for (let curr = head; curr; curr = curr.next) {
    if (!curr.next && stack.length) {
      curr.next = stack.pop(); // merge main thread with saved nodes.
      curr.next.previous = curr;
    }
    if (!curr.child) continue;
    if (curr.next) stack.push(curr.next); // save "next" nodes.
    curr.next = curr.child; // override next pointer with "child"
    curr.child.previous = curr;
    curr.child = null; // clear child pointer (was moved to "next").
  }

  return head;
}
// end::fn2[]

module.exports = { flatten, flattenBrute };
