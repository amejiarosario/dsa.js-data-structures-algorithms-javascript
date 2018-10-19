function selectionSort(collection) {
  const array = Array.from(collection);
  
  for (let outer = 0; outer < array.length; outer++) {
    let selection = array[outer];

    for (let inner = outer + 1; inner < array.length; inner++) {
      const element = array[inner];

      if(element < selection) {
        swap(array, outer, inner);
        selection = array[outer];
      }
    }
  }

  return array;
}

function swap(array, from, to) {
  [array[from], array[to]] = [array[to], array[from]];
}

module.exports = selectionSort;
