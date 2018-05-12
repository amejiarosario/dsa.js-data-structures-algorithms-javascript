function findMax(n) {
  let max;
  let counter = 0;

  for (let i = 0; i < n.length; i++) {
    counter++;
    if(max === undefined || max < n[i]) {
      max = n[i];
    }
  }

  console.log(`n: ${n.length}, counter: ${counter}`);
  return max;
}

const assert = require('assert');
assert.equal(findMax([3, 1, 2]), 3);
assert.equal(findMax([4,5,6,1,9,2,8,3,7]), 9);
assert.equal(findMax([4,2,8,3,7,0,-1]), 8);

