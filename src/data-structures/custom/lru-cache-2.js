/**
 * Least Recently Used (LRU) cache.
 * Map + (Hash)Set: O(1)
 * @param {number} capacity - Number of items to hold.
 */
var LRUCache = function(capacity) {
  this.capacity = capacity || 2;
  this.map = new Map();
  this.set = new Set();
  this.size = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1;
  // move to top
  this.set.delete(key);
  this.set.add(key);

  return this.map.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.map.set(key, value);
  // move to top
  this.set.delete(key);
  this.set.add(key);

  if (this.set.size > this.capacity) {
    const leastUsedKey = this.set.values().next().value;
    this.map.delete(leastUsedKey);
    this.set.delete(leastUsedKey);
  }

  this.size = this.map.size;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


/*
  Implement a hashMap cache with a given capacity that once reach deletes the least used element and store the new one.

  ---

  c = new LRUCache(2);
  c.put(1,1);
  c.put(2,2);
  c.put(3,3); // deletes key 1

  c = new LRUCache(2);
  c.put(1,1);
  c.put(2,2);
  c.get(1);
  c.put(3,3); // deletes key 2

*/

module.exports = LRUCache;
