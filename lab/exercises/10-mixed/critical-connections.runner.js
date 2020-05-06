const assert = require('assert');

// const criticalConnections = require('./critical-connections');
const criticalConnections = require('./critical-connections');
const data = require('./critical-connections.data');

assert.deepEqual(criticalConnections(4, [
  [0, 1],
  [1, 2],
  [2, 0],
  [1, 3],
]), [[1, 3]]);

const { n, connections } = data.test1000;
assert.deepEqual(criticalConnections(n, connections), []);

console.log('All tests passed!');
