const LinkedList = require('./linkedlist');


LinkedList.prototype.findKthToLast = optimal;
// LinkedList.prototype.findKthToLast = mySolution;
// LinkedList.prototype.findKthToLast = recursive;

let list = new LinkedList();
list.add(4);
list.add(3);
list.add(2);
list.add(1);

console.log(list.toString()); //

console.log(list.findKthToLast(0)); // undefined
console.log(list.findKthToLast(1)); // 4
console.log(list.findKthToLast(2)); // 3
console.log(list.findKthToLast(3)); // 2
console.log(list.findKthToLast(4)); // 1
console.log(list.findKthToLast(5)); // undefined


// -----------------------

/**
 *
 * @param k
 * @returns {*}
 */
function optimal(k) {
  let kth;
  let last = this.head;

  // move ahead "last" k-spaces ahead
  for(let i = 0; i < k; i++) {
    if(!last) { return; }
    last = last.next;
  }

  // move both together
  for(kth = this.head; last; last = last.next, kth = kth.next) { }
  return kth && kth.data;
}

/**
 *
 *
 * O (n) and O(n) space
 * @param k
 * @param n
 * @param i
 * @returns {*}
 */
function recursive(k, n = this.head, i = 0) {
  if(n) {
    let res = recursive(k, n.next, i+1);

    if(res.index === i) {
      res.node = n.data;
    }

    if(i === 0) {
      return res.node;
    } else {
      return res;
    }
  } else {
    return {node: undefined, index: i - k};
  }
}


/**
 * Do two rounds one to count and other one to return the kth value from last
 *
 * O(n)
 *
 * @param k
 * @returns {*}
 */
function mySolution(k) {
  let length = 0;
  for(let n = this.head; n; n = n.next) { length++; }

  if(k < 1 || k > length) {
    return;
  }

  let node = this.head;
  for(let i = 0; i < length - k; i++) { node = node.next; }
  return node.data;
};
