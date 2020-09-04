// const ListNode = require('../../src/data-structures/linked-lists/node');

// tag::description[]
/**
 * Check if two lists has the same string data.
 * Note: each lists can be huge, they have up to 10 million nodes.
 *
 * @examples
 *    hasSameData(['he', 'll', 'o'], ['hel', 'lo']); // true
 *    hasSameData(['hel', 'lo'], ['hi']); // false
 *
 * @param {ListNode} l1 - The root node of list 1.
 * @param {ListNode} l2 - The root node of list 2.
 * @returns {boolean} - true if has same data, false otherwise.
 */
function hasSameData(l1, l2) {
  // end::description[]
  // tag::solution[]
  let p1 = l1;
  let p2 = l2;
  let i1 = -1;
  let i2 = -1;

  const findNextPointerIndex = (p, i) => {
    let node = p;
    let index = i;
    while (node && index >= node.value.length) {
      node = node.next;
      index = 0;
    }
    return [node, index];
  };

  while (p1 && p2) {
    [p1, i1] = findNextPointerIndex(p1, i1 + 1);
    [p2, i2] = findNextPointerIndex(p2, i2 + 1);
    if ((p1 && p2 && p1.value[i1] !== p2.value[i2])
      || ((!p1 || !p2) && p1 !== p2)) return false;
  }
  return true;
}
// end::solution[]

// tag::hasSameDataBrute1[]
function hasSameDataBrute1(l1, l2) {
  function toString(node) {
    const str = [];
    for (let curr = node; curr; curr = curr.next) {
      str.push(curr.value);
    }
    return str.join('');
  }

  // console.log({s1: toString(l1), s2: toString(l2) });
  return toString(l1) === toString(l2);
}
// end::hasSameDataBrute1[]

function hasSameData1(l1, l2) {
  let p1 = l1;
  let p2 = l2;

  let i1 = 0;
  let i2 = 0;

  while (p1 || p2) {
    if (!p1 || !p2 || p1.value[i1] !== p2.value[i2]) return false;

    if (i1 < p1.value.length - 1) i1++;
    else {
      p1 = p1.next;
      i1 = 0;
    }

    if (i2 < p2.value.length - 1) i2++;
    else {
      p2 = p2.next;
      i2 = 0;
    }
  }
  return true;
}

module.exports = { hasSameData, hasSameDataBrute1, hasSameData1 };
