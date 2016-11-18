const LinkedList = require('./linkedlist');

LinkedList.prototype.findKthToLast = function(k) {
  let length = 0;
  for(let n = this.head; n; n = n.next) { length++; }

  if(k < 1 || k > length) {
    return null;
  }

  let node = this.head;
  for(let i = 0; i < length - k; i++) { node = node.next; }
  return node.data;
};

let list = new LinkedList();
list.add(4);
list.add(3);
list.add(2);
list.add(1);

console.log(list.toString()); //

console.log(list.findKthToLast(0)); // null
console.log(list.findKthToLast(1)); // 4
console.log(list.findKthToLast(2)); // 3
console.log(list.findKthToLast(3)); // 2
console.log(list.findKthToLast(4)); // 1
console.log(list.findKthToLast(5)); // null