const LinkedList = require('./linkedlist');

function sumLists(list1, list2, isForwardOrder = false) {
  const result = new LinkedList();
  let reminder = 0;

  // TODO: assert list length are the same

  for(let l1 = list1.head, l2 = list2.head; l1 && l2; l1 = l1.next, l2 = l2.next) {
    // TODO: validate data from both list are numbers
    const value = l1.data + l2.data + reminder;
    reminder = parseInt(value / 10);
    result.addLast(value % 10);
  }
  return result;
}

function test() {
  const list1 = new LinkedList();
  list1.add(6);
  list1.add(1);
  list1.add(7);


  const list2 = new LinkedList();
  list2.add(2);
  list2.add(9);
  list2.add(5);


  console.log(list1.toString());
  console.log(list2.toString());
  console.log(sumLists(list1, list2).toString());
}

test();
