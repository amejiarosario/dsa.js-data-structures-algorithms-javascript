const DLinkedList = require('../linked-lists/linked-list');
/**
 * Least Recently Used (LRU) cache.
 * Map + Double LinkedList: O(1)
 * @param {number} capacity - Number of items to hold.
 */
class LRUCache extends Map {
  constructor(capacity) {
    super(); // initialize map
    this.capacity = capacity;
    this.list = new DLinkedList();
  }

  get(key) {
    if (!super.has(key)) { return -1; }

    // console.log('get', {key});
    const node = super.get(key);
    this.moveToHead(key, node);

    return node.value.value;
  }

  put(key, value) {
    // console.log('put', {key, value});
    let node;
    if (super.has(key)) {
      node = super.get(key);
      node.value.value = value;
    } else {
      node = this.list.addLast({key, value});
    }
    this.moveToHead(key, node);

    if (this.list.size > this.capacity) {
      const firstNode = this.list.removeFirst();
      super.delete(firstNode.key);
    }
  }

  moveToHead(key, node) {
    // remove node and put it in front
    this.list.removeByNode(node);
    const newNode = this.list.addLast(node.value);
    super.set(key, newNode);
    // console.log('\tlist', Array.from(this.list).map(l => l.node.value));
    // console.log('\tlist', Array.from(this.list).map(l => l.node.value.key));
  }
}

module.exports = LRUCache;
