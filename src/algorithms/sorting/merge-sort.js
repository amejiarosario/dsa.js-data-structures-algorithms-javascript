// tag::merge[]
/**
 * Merge two arrays in ascending order
 * @param {Array} array1
 * @param {Array} array2
 */
function merge(array1, array2 = []) {
  const mergedLength = array1.length + array2.length;
  const mergedArray = Array(mergedLength);

  for (let index = 0, i1 = 0, i2 = 0; index < mergedLength; index += 1) { // <1>
    if (i2 >= array2.length || (i1 < array1.length && array1[i1] <= array2[i2])) {
      mergedArray[index] = array1[i1]; // <2>
      i1 += 1;
    } else {
      mergedArray[index] = array2[i2]; // <2>
      i2 += 1;
    }
  }

  return mergedArray; // <3>
}
// end::merge[]

// tag::splitSort[]
/**
 * Split array in half recursively until two or less elements are left.
 * Sort these two elements and combine them back using the merge function.
 * @param {Array} array
 */
function splitSort(array) {
  const size = array.length;
  // base case
  if (size < 2) {
    return array;
  } else if (size === 2) {
    return array[0] < array[1] ? array : [array[1], array[0]]; // <2>
  }

  // recursive split in half and merge back
  const half = Math.ceil(size / 2);
  return merge( // <3>
    splitSort(array.slice(0, half)), // <1>
    splitSort(array.slice(half)), // <1>
  );
}
// end::splitSort[]

// tag::sort[]
/**
 * Merge sort
 * Runtime: O(n log n)
 * @param {Array|Set} collection elements to be sorted
 */
function mergeSort(collection) {
  const array = Array.from(collection); // <1>
  return splitSort(array);
}
// end::sort[]

module.exports = mergeSort;
