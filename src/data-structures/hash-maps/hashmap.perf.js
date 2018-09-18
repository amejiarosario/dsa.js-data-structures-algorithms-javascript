const HashTable = require('./hash-map');
// const asciichart = require ('asciichart');
// const { Series } = require('pandas-js');

const dict = new HashTable();

const keys = [];
const values = [];
for (let i = 0; i < 1e1; i++) {
  keys.push(makeid());
  values.push(parseInt(Math.random()*1e2));
}

console.time('SET');
for (let i = 0; i < keys.length; i++) {
  dict.set(keys[i], values[i]);
}
console.timeEnd('SET');

console.time('GET');
for (let i = 0; i < keys.length; i++) {
  const val = dict.get(keys[i]);
}
console.timeEnd('GET');

// distibution
const usage = dict.buckets.reduce((array, el, index) => {
  array[index] = el.length;
  return array;
}, Array(dict.buckets.length).fill(0));

console.log(usage, dict.buckets);

const ds = new Series(usage);
console.log({
  length: usage.length,
  max: Math.max.apply(null, usage),
  min: Math.min.apply(null, usage),
  count: ds.length,
  mean: ds.mean(),
  std: ds.std(),
  variance: ds.variance(),
});

// console.log({elementsByBucket});
// console.log (asciichart.plot(elementsByBucket));

// Helpers

function makeid() {
  const text = [];
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ñåé😁🖖1234567890!@#$%^&*()_+{}';<>?";

  for (let i = 0; i < 5; i++) {
    text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
  }

  return text.join('');
}
