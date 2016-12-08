function intersection(list1, list2) {
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

module.exports = intersection;