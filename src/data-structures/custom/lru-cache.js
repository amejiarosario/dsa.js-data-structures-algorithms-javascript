/**
 * Least Recently Used (LRU) cache.
 * Key/Value storage with fixed max number of items.
 * Least recently used items are discarded once the limit is reached.
 * Reading and updating the values mark the items as recently used.
 * @author Adrian Mejia <adrianmejia.com>
 */
class LRUCache extends Map {
  /**
   * @param {number} capacity - The max number of items on the cache
   */
  constructor(capacity) {
    super();
    this.capacity = capacity;
  }

  /**
   * Get value associated with the key. Mark keys as recently used.
   * @param {number} key
   * @returns {number} value or if not found -1
   */
  get(key) {
    if (!super.has(key)) return -1;
    const value = super.get(key);
    this.put(key, value); // re-insert at the top (most recent).
    return value;
  }

  /**
   * Upsert key/value pair. Updates mark keys are recently used.
   * @param {number} key
   * @param {number} value
   * @returns {void}
   */
  put(key, value) {
    if (super.has(key)) super.delete(key);
    super.set(key, value);
    if (super.size > this.capacity) {
      const oldestKey = super.keys().next().value;
      super.delete(oldestKey);
    }
  }
}

module.exports = LRUCache;
