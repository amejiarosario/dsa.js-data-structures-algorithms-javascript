const LinkedList = require('./linkedlist');
const Node = require('./node');

LinkedList.prototype.partition = partition;

function partition(value) {
  let left = null, right = null;

  // partition list
  let current = this.head;
  while(current) {
    const next = current.next;
    current.next = null;

    if(current.data < value) {
      left = append(left, current);
    } else {
      right = append(right, current);
    }

    current = next;
  }

  // merge list
  let lastLeft;
  for(lastLeft = left; lastLeft.next; lastLeft = lastLeft.next) {}
  lastLeft.next = right;
  this.head = left;
}


function append(head, node) {
  if(head) { node.next = head; }
  return node;
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