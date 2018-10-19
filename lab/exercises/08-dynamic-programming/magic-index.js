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
  if(!array || array.length === 0) {
    return -1;
  }

  const middle = parseInt(array.length/2);
  const index = middle + offset;

  if(index === array[middle]) {
    return index;
  } else if(index > array[middle]) {
    return findMagicIndex(array.slice(middle + 1), middle + 1);
  } else {
    return findMagicIndex(array.slice(0, middle), offset);
  }
}

/**
 * O(log n)
 *
 * breaks when elements values are repeated
 *
 * @param array
 * @param start
 * @param end
 * @returns {*}
 */
function findMagicIndex2(array, start = 0, end = (Array.isArray(array) && array.length)) {
  if(!array || end <= start) { return -1; }

  const midIndex = parseInt((start + end)/2);
  const midValue = array[midIndex];

  if(midIndex === midValue) {
    return midValue;
  }

  if(midIndex > midValue) {
    return findMagicIndex2(array, midIndex + 1, end);
  }

  if(midIndex < midValue) {
    return findMagicIndex2(array, 0, midIndex);
  }
}

/**
 * O(log n)
 *
 * Handles cases when elements has repeated values
 *
 * @param array
 * @param start
 * @param end
 * @returns {*}
 */
function findMagicIndexFastRepeated(array, start = 0, end = (Array.isArray(array) && array.length-1)) {
  if(!Array.isArray(array) || end < start) { return -1; }

  const midIndex = parseInt((start + end)/2);
  const midValue = array[midIndex];

  if(midIndex === midValue) {
    return midValue;
  }

  const left = findMagicIndexFastRepeated(array, start, Math.min(midIndex - 1, midValue));
  if(left !== -1) {
    return left;
  }

  const right = findMagicIndexFastRepeated(array, Math.max(midIndex + 1, midValue), end);
  return right;
}

module.exports = findMagicIndexFastRepeated;