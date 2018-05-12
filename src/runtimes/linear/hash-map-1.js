/**
 * Hash Map data structure implementation
 */
class HashMap {

  /**
   * Initialize array that holds the values. Default is size 1,000
   * @param {number} size
   */
  constructor(size = 2) {
    this.array = new Array(size);
  }

  /**
   * insert a key/value pair into the hash map
   * @param {any} key
   * @param {any} value
   */
  set(key, value) {
    const index = this.getIndex(key);
    if(this.array[index]) {
      this.array[index].push({key, value});
    } else {
      this.array[index] = [{key, value}];
    }
    return this;
  }

  /**
   * Gets the value out of the hash map
   * @param {any} key
   */
  get(key) {
    const hashIndex = this.getIndex(key);
    for (let index = 0; index < this.array[hashIndex].length; index++) {
      const entry = this.array[hashIndex][index];
      if(entry.key === key) {
        return entry.value
      }
    }
  }

  /**
   * Very bad hash function that causes tons of collisions
   * @param {any} key
   */
  hash(key) {
    return key.toString().length;
  }

  /**
   * Get the array index after applying the hash funtion to the given key
   * @param {any} key
   */
  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.array.length;
    return index;
  }
}

const assert = require('assert');
const hashMap = new HashMap();

hashMap.set('cat', 2);
hashMap.set('rat', 7);
hashMap.set('dog', 1);
hashMap.set('art', 1);

console.log(hashMap.array);

assert.equal(hashMap.get('cat'), 2);
assert.equal(hashMap.get('rat'), 7);
assert.equal(hashMap.get('dog'), 1);