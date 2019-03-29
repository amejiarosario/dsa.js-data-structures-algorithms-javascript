/**
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 * It should support the following operations: get and put.

    get(key) - Get the value (will always be positive) of the key
        if the key exists in the cache, otherwise return -1.
    put(key, value) - Set or insert the value if the key is not already present.
        When the cache reached its capacity, it should invalidate the least
        recently used item before inserting a new item.

    Follow up:
    Could you do both operations in O(1) time complexity?

    Example:

    LRUCache cache = new LRUCache( 2);

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    cache.get(2);       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    cache.get(1);       // returns -1 (not found)
    cache.get(3);       // returns 3
    cache.get(4);       // returns 4

 *  https://leetcode.com/problems/lru-cache/description/
 *  https://leetcode.com/submissions/detail/178329173/
 *
 * @param {number} capacity
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
      const it = this.map.keys();
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
}

module.exports = LRUCache;
