/*
 8.4 Power Set: Write a method to return all subsets of a set.
 */

const bm = require('../05-bits/00-bit-manipulation');

function getSubsets(set) {
  const length = set.length;
  const subsets = [];

  for(let mask = 0; mask < Math.pow(2, length); mask++) {
    const subset = [];

    set.forEach((element, index) => {
      if(bm.getBit(mask, index) > 0) {
        subset.push(element);
      }
    });

    subsets.push(subset);
  }

  return subsets;
}

module.exports = getSubsets;