// nodemon src/data-structures/hash-maps/hashmap.perf.js
const HashTable = require('./hash-map');
// const asciichart = require ('asciichart');
// const { Series } = require('pandas-js');
const Series = require('./stats');

const dict = new HashTable();

const keys = [];
const values = [];
for (let i = 0; i < 1e5; i++) {
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

// console.log(usage, dict.buckets);

const s = new Series(usage);
console.log('Bucket array distribution', s.describe());
console.log('Bucket array frequencies', s.frequencies);

// console.log({elementsByBucket});
// console.log (asciichart.plot(elementsByBucket));

// Helpers

function makeid() {
  const text = [];
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ñåé😁🖖1234567890!@#$%^&*()_+{}';<>? ";

  for (let i = 0; i < parseInt((Math.random() * 20) + 1, 10); i += 1) {
    text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
  }

  return text.join('');
}
