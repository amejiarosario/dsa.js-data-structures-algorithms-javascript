/**
 * Hash Map data structure implementation
 */
class HashMap {

  /**
   * Initialize array that holds the values. Default is size 1,000
   * @param {number} size
   */
  constructor(size = 4) {
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
   * This hash function returns the sum of the char codes.
   * Limitation same characters return the same code regardless of the order
   * @param {any} key
   */
  hash(key) {
    let hashValue = 0;
    const stringKey = key.toString();

    for (let index = 0; index < stringKey.length; index++) {
      const charCode = stringKey.charCodeAt(index);
      hashValue += charCode;
    }

    return hashValue;
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
hashMap.set('art', 0); // <-- collision with rat

console.log(hashMap.array);

assert.equal(hashMap.get('cat'), 2);
assert.equal(hashMap.get('rat'), 7);
assert.equal(hashMap.get('dog'), 1);