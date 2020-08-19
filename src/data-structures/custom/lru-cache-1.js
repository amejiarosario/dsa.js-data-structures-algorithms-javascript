/**
 * Least Recently Used (LRU) cache.
 * Map + Array: O(n)
 * @param {number} capacity - Number of items to hold.
 */
const LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
  this.cache = [];
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  const value = this.map.get(key);
  if (value) {
    this.moveToTop(key);
    return value;
  }
  return -1;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  this.map.set(key, value);
  this.rotate(key);
};

LRUCache.prototype.rotate = function (key) {
  this.moveToTop(key);
  while (this.cache.length > this.capacity) {
    const keyToDelete = this.cache.shift();
    this.map.delete(keyToDelete);
  // console.log({keyToDelete})
  }
};

LRUCache.prototype.moveToTop = function (key) {
  const index = this.cache.indexOf(key);
  if (index > -1) {
    this.cache.splice(index, 1);
  }
  this.cache.push(key);
};
