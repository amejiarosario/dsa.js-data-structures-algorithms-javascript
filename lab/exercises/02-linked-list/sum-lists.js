const LinkedList = require('./linkedlist');

function sumLists(list1, list2, {isForwardOrder} = {isForwardOrder: false}) {
  if(isForwardOrder) {
    return sumListsForwardOrder(list1, list2);
  } else {
    return sumListsReverseOrder(list1, list2);
  }
}

function sumListsReverseOrder(list1, list2) {
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

function sumListsForwardOrder(list1, list2) {
  const result = new LinkedList();
  let values = [];
  let num = 0;

  // TODO: assert list length are the same

  for(let l1 = list1.head, l2 = list2.head; l1 && l2; l1 = l1.next, l2 = l2.next) {
    // TODO: validate data from both list are numbers
    values.push(l1.data + l2.data);
  }

  for(let i = 0; i < values.length; i++) {
    num += values[i] * Math.pow(10, values.length - i - 1);
  }

  num.toString().split('').reduce((list, e) => { list.addLast(e); return list; }, result);

  return result;
}

function test1() {
  const list1 = new LinkedList();
  list1.addFirst(6);
  list1.addFirst(1);
  list1.addFirst(7);


  const list2 = new LinkedList();
  list2.addFirst(2);
  list2.addFirst(9);
  list2.addFirst(5);


  console.log(list1.toString()); // 7 -> 1 -> 6
  console.log(list2.toString()); // 5 -> 9 -> 2
  console.log(sumLists(list1, list2).toString()); // 2 -> 1 -> 9 = 912
}

function test2() {
  const list1 = new LinkedList();
  list1.addLast(6);
  list1.addLast(1);
  list1.addLast(7);


  const list2 = new LinkedList();
  list2.addLast(2);
  list2.addLast(9);
  list2.addLast(5);


  console.log(list1.toString()); // 6 -> 1 -> 7
  console.log(list2.toString()); // 2 -> 9 -> 5
  console.log(sumLists(list1, list2, {isForwardOrder: true}).toString()); // 9 -> 1 -> 2 = 912
}

test1();
test2();
