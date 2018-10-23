const { swap } = require('./sorting-common');

function insertionSort(collection) {
  const array = Array.from(collection);

  for (let outer = 1; outer < array.length; outer += 1) {
    const insert = array[outer];

    for (let inner = outer - 1; inner >= 0; inner -= 1) {
      const element = array[inner];

      if (insert < element) {
        swap(array, inner, outer);
      }
    }
  }
  return array;
}

module.exports = insertionSort;
