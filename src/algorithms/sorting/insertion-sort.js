const { swap } = require('./sorting-common');

function insertionSort(collection) {
  const array = Array.from(collection);

  for (let outer = 0; outer < array.length; outer += 1) {
    const insert = array[outer];
    let inner = outer - 1;
    while (inner >= 0 && array[inner] > insert) {
      swap(array, inner + 1, inner);
      inner -= 1;
    }
  }
  return array;
}

module.exports = insertionSort;
