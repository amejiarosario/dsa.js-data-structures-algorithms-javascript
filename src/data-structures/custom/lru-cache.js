/**
 * Least Recently Used (LRU) cache.
 * (ordered) Map: O(1)
 * @param {number} capacity - Number of items to hold.
 */
class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    const value = this.map.get(key);
    if (value) {
      this.moveToTop(key);
      return value;
    }
    return -1;
  }

  put(key, value) {
    this.map.set(key, value);
    this.rotate(key);
  }

  rotate(key) {
    this.moveToTop(key);
    while (this.map.size > this.capacity) {
      const it = this.map.keys(); // keys are in insertion order.
      this.map.delete(it.next().value);
    }
  }

  moveToTop(key) {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
    }
  }

  get size() {
    return this.map.size;
  }
}

module.exports = LRUCache;
