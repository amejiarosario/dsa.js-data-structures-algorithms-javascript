// tag::snippet[]
/**
 *
 * @param {Array} input array of objects with the shape {value, weight}
 * @param {Number} max maximum weight for knapsack
 */
function solveFractionalKnapsack(input, max) {
  let weight = 0;
  let value = 0;
  const items = [];

  // sort by value/weight ratio
  input.sort((a, b) => a.value/a.weight - b.value/b.weight); // eslint-disable-line

  while (input.length && weight < max) {
    const bestRatioItem = input.pop();

    if (weight + bestRatioItem.weight <= max) {
      // take item as a whole
      bestRatioItem.proportion = 1;
      items.push(bestRatioItem);
      weight += bestRatioItem.weight;
      value += bestRatioItem.value;
    } else {
      // take a fraction of the item
      bestRatioItem.proportion = (max - weight) / bestRatioItem.weight;
      items.push(bestRatioItem);
      weight += bestRatioItem.proportion * bestRatioItem.weight;
      value += bestRatioItem.proportion * bestRatioItem.value;
    }
  }

  return {
    weight,
    value,
    items,
  };
}
// end::snippet[]

module.exports = solveFractionalKnapsack;
