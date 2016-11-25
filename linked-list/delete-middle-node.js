const LinkedList = require('./linkedlist');

// 2.3

LinkedList.prototype.deleteMiddleNode = deleteNode;

let list, node;

// ------ node 2

list = new LinkedList();
list.add(4);
list.add(3);
node = list.add(2);
list.add(1);

list.deleteMiddleNode(node);
console.log(list.toString()); // 1 -> 3 -> 4

// ------ node 3

list = new LinkedList();
list.add(4);
node = list.add(3);
list.add(2);
list.add(1);

list.deleteMiddleNode(node);
console.log(list.toString()); // 1 -> 2 -> 4

// ------ node 1

list = new LinkedList();
list.add(4);
list.add(3);
list.add(2);
node = list.add(1);

list.deleteMiddleNode(node);
console.log(list.toString()); // 2 -> 3 -> 4

// ------ node 4

list = new LinkedList();
node = list.add(4);
list.add(3);
list.add(2);
list.add(1);

list.deleteMiddleNode(node);
console.log(list.toString()); // 1 -> 2 -> 3 -> 4


// -----------------------
list.deleteMiddleNode();

/**
 * O (n)
 * @param node
 */
function deleteNode(node) {
  if(!node || !node.next) { return; }
  const next = node.next;
  node.data = next.data;
  node.next = next.next
}
