const LinkedList = require('./linkedlist');
const Node = require('./node');

LinkedList.prototype.partition = partition;

function partition(value) {
  let head = this.head, tail = this.head;

  // partition list
  let current = this.head;
  while(current) {
    const next = current.next;

    if(current.data < value) {
      current.next = head;
      head = current;
    } else {
      tail.next = current;
      tail = current;
    }

    current = next;
  }
  tail.next = null;

  this.head = head;
}

// testing

function test() {
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(10);
  list.add(5);
  list.add(8);
  list.add(5);
  list.add(3);

  console.log(list.toString()); // 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1

  list.partition(5);

  console.log(list.toString()); // 1 -> 2 -> 3 -> 10 -> 5 -> 8 -> 5
}

test();