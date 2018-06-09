/**
 * Set implemented with Map (JS built-in) or a HashMap to have sublinear times on all operations
 */
class HSet {
  /**
   * Initialize (Hash)map for the set
   * @param {Map|HashMap} Type data structure for the set
   */
  constructor(Type = Map) {
    this.hashMap = new Type();
  }

  /**
   * Add a new value
   * @param {any} value
   */
  add(value) {
    this.hashMap.set(value);
  }

  /**
   * check if value is already on the set
   * @param {any} value
   */
  has(value) {
    return this.hashMap.has(value);
  }

  /**
   * Get size of the set
   */
  get size() {
    return this.hashMap.size;
  }

  /**
   * Delete a value from the set
   * @param {any} value
   */
  delete(value) {
    return this.hashMap.delete(value);
  }

  /**
   * Return all values on the set as an array
   */
  entries() {
    return Array.from(this.hashMap.keys());
  }
}

module.exports = HSet;

