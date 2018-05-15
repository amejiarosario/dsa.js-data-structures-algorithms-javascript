// MySet = require('./lib/data-structures/sets/set');

const HashMap = require('../hash-maps/hash-map');

class MySet {
  constructor() {
    this.hashMap = new HashMap();
  }

  add(value) {
    this.hashMap.set(value);
  }

  has(value) {
    return this.hashMap.has(value);
  }

  get size() {
    return this.hashMap.size;
  }

  delete(value) {
    return this.hashMap.delete(value);
  }

  entries() {
    return this.hashMap.keys.reduce((acc, key) => {
      if(key !== undefined) {
        acc.push(key.content);
      }
      return acc
    }, []);
  }
}

module.exports = MySet;

const assert = require('assert');
// const set = new Set();
const set = new MySet();

set.add('one');
set.add('uno');
set.add('one');

assert.equal(set.has('one'), true);
assert.equal(set.has('dos'), false);

assert.equal(set.size, 2);
// assert.deepEqual(Array.from(set), ['one', 'uno']);

assert.equal(set.delete('one'), true);
assert.equal(set.delete('one'), false);
assert.equal(set.has('one'), false);
assert.equal(set.size, 1);

