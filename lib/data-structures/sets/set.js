// MySet = require('./lib/data-structures/sets/set');

const HashMap = require('../hash-maps/hash-map');

class MySet {
  constructor() {
    this.map = new HashMap();
  }

  add(value) {
    this.map.set(value);
  }

  has(value) {
    return this.map.has(value);
  }

  get size() {
    return this.map.size;
  }

  delete(value) {
    return this.map.delete(value);
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

