function intersectionBad(list1, list2) {
  let i1 = list1.head;
  let i2 = list2.head;
  let intersection = null;

  // virtual link
  list2.tail.next = i1;

  // fast/slow runner from each list
  while(i1 && i2 && i2.next) {
    if(i1 === i2) {
      intersection = i1;
      break;
    }
    i1 = i1.next;
    i2 = i2.next.next;
  }

  // remove virtual link
  list2.tail.next = null;

  return intersection;
}
/**
 *  O(m * n)
 *
 * @param list1
 * @param list2
 * @returns {*}
 */
function intersection2(list1, list2) {
  let intersection = null;

  for(let i1 = list1.head; i1; i1 = i1.next) {
    for(let i2 = list2.head; i2; i2 = i2.next) {
      if(i1 === i2) {
        return i1;
      }
    }
  }

  return intersection;
}

// O(m + n) : using Hash of reference (not value)

/**
 * If there's an intersection both ends are the same.
 *
 * O(n)
 *
 * @param list1
 * @param list2
 */
function intersection(list1, list2) {
  if(list1.tail !== list2.tail) {
    return null;
  }

  let i1 = list1.head;
  let i2 = list2.head;

  if(list1.size() > list2.size()) {
    for(let i = 0; i < list1.size() - list2.size(); i++) { i1 = i1.next; }
  }

  if(list2.size() > list1.size()) {
    for(let i = 0; i < list2.size() - list1.size(); i++) { i2 = i2.next; }
  }

  while(i1 !== i2) {
    i1 = i1.next;
    i2 = i2.next;
  }

  return i1;
}

module.exports = intersection;