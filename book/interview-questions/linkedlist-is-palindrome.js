// tag::fn[]
function isPalindrome(head) {
  let slow = head;
  let fast = head;
  while (fast) { // use slow/fast pointers to find the middle.
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }

  const reverseList = (node) => { // use 3 pointers to reverse a linked list
    let prev = null;
    let curr = node;
    while (curr) {
      const { next } = curr; // same as: "const next = curr.next;"
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };

  const reversed = reverseList(slow); // head of the reversed half
  for (let i = reversed, j = head; i; i = i.next, j = j.next) if (i.value !== j.value) return false;
  return true;
}
// end::fn[]

// tag::fn2[]
function isPalindromeBrute(head) {
  const arr = [];
  for (let i = head; i; i = i.next) arr.push(i.value); // <1>
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) if (arr[lo++] !== arr[hi--]) return false; // <2>
  return true;
}
// end::fn2[]

module.exports = { isPalindrome, isPalindromeBrute };
