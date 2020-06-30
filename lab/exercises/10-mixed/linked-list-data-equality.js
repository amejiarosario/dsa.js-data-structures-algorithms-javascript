/**
 * Given two linked list, determine if they have the same data

    **Input:**
    L1: he → ll → o

    L2: hel → l → o

    **Output:**

    True

    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
      }
    }

 * @param {Node} l1 - The list 1.
 * @param {Node} l2 - The list 2.
 */
function hasSameData(l1, l2) {
  if (l1 !== l2 && (!l1 || !l2)) return false;
  let p1 = l1;
  let p2 = l2;
  let i1 = 0;
  let i2 = 0;

  while (p1 && p2) {
    // console.log({v1: p1.value[i1], v2: p2.value[i2], i1, i2})
    if (p1.value[i1] !== p2.value[i2]) return false;
    i1++;
    i2++;
    if (i1 >= p1.value.length) {
      p1 = p1.next;
      i1 = 0;
    }
    if (i2 >= p2.value.length) {
      p2 = p2.next;
      i2 = 0;
    }
  }

  return true;
}

module.exports = hasSameData;
