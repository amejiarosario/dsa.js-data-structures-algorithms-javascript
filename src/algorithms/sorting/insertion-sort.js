const { swap } = require('./sorting-common');

function insertionSort(collection) {
  const array = Array.from(collection);

  for (let outer = 1; outer < array.length; outer += 1) {
    let inner = outer - 1;
    while (inner >= 0 && array[outer] < array[inner]) {
      inner -= 1;
    }
    if (outer !== inner + 1) {
      const [insert] = array.splice(outer, 1);
      array.splice(inner + 1, 0, insert);
    }
  }
  return array;
}

module.exports = insertionSort;
