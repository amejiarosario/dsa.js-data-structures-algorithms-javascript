/* eslint-disable */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const count = getCount(nums); // O(n)
  const frequenciesToNumbers = invertMapKeyValues(count); // O(n)

  // print the last k most frequent
  const descendingFrequencies = Array.from(frequenciesToNumbers.keys()).sort((a, b) => b - a);
  const valuesByFrequencencies = descendingFrequencies.reduce((array, key) => {
    return array.concat(frequenciesToNumbers.get(key));
  },[]);

  // console.log(JSON.stringify({freqToNum: Array.from(freqToNum), f, v}));

  return valuesByFrequencencies.slice(0, k);
};

/**
 * Get repeated number count
 * Runtime: O(n)
 * @param {array} nums
 * @returns {Map} counts
 */
function getCount(nums) {
  const counts = new Map();

  for(let n of nums) {
    if(counts.has(n)) {
      counts.set(n, 1 + counts.get(n));
    } else {
      counts.set(n, 1);
    }
  }

  return counts;
}

/**
 * Invert key and values in a Map.
 * Similar to _.invert (https://lodash.com/docs/4.17.11#invert)
 * @param {*} map
 */
function invertMapKeyValues(map) {
  const inverted = new Map();

  for(let [key, value] of map.entries()) {
    if (inverted.has(value)) {
      inverted.set(value, inverted.get(value).concat(key));
    } else {
      inverted.set(value, [key]);
    }
  }

  return inverted;
}

/*
< O(n log n) - linear or log

*/

// hashmap

// ---

const assert = require('assert');
function test() {
  assert.deepEqual(topKFrequent([1], 1), [1]);
  assert.deepEqual(topKFrequent([1,1,1,2,2,3], 2), [1, 2]);
  assert.deepEqual(topKFrequent([3, 1, 4, 4, 5, 2, 6, 1], 2), [1, 4]);
  assert.deepEqual(topKFrequent([7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], 4).sort(), [5, 11, 7, 10].sort());
  assert.deepEqual(topKFrequent([
    5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5
  ], 7).sort(), [
    4,-1,2,-5,-8,8,0
  ].sort());
}
test();


/*
{
  freqToNum: Map {
    12 => [4],
    10 => [-1],
    8 => [2],
    7 => [-5],
    6 => [-8, 8, 0],
    5 => [5, -3, -9, 6],
      4 => [1, -7, 10, -2],
      3 => [-4],
      2 => [3, 7],
      1 => [9, -6]
  },
  f: [8, 7, 6, 5, 4, 3, 2, 12, 10, 1],
  v: [2, -5, -8, 8, 0, 5, -3, -9, 6, 1, -7, 10, -2, -4, 3, 7, 4, -1, 9, -6]
}

other solutions: https://leetcode.com/submissions/detail/202508293/
*/
