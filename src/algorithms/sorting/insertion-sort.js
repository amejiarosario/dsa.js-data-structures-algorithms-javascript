function insertionSort(collection) {
  const array = Array.from(collection);

  for (let outer = 0; outer < array.length; outer += 1) {
    const insert = array[outer];
    let inner = outer - 1;
    while (inner >= 0 && array[inner] > insert) {
      array[inner + 1] = array[inner];
      inner -= 1;
    }
    array[inner + 1] = insert;
  }
  return array;
}

module.exports = insertionSort;
