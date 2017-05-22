/*
 8.3 Magic Index: A magic index in an array A[1. .. n-1] is defined to be an index such that A[ i]
 i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
 FOLLOW UP
 What if the values are not distinct?
 */


/**
 * O(n)
 * @param array
 * @returns {number|*}
 */
function findMagicIndexSlow(array) {
  if(!Array.isArray(array)) { return -1; }
  return array.findIndex((e, i) => e === i);
}

/**
 * O(log n) however, breaks with repeated values
 * @param array
 * @param offset
 * @returns {number}
 */
function findMagicIndex(array, offset = 0) {
  const middle = parseInt(array.length/2);
  const index = middle + offset;

  if(array.length === 0) {
    return -1;
  } else if(index === array[middle]) {
    return index;
  } else if(index > array[middle]) {
    return findMagicIndex(array.slice(middle + 1), middle + 1);
  } else {
    return findMagicIndex(array.slice(0, middle), offset);
  }
}


module.exports = findMagicIndex;