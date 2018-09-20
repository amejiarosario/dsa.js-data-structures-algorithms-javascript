// nodemon src/data-structures/hash-maps/hashmap.perf.js
const Series = require('./stats');
const assert = require('assert');
const readline = require('readline');
const fs = require('fs');
const en2048 = 'src/data-structures/hash-maps/data/english.txt';
const en10k = 'src/data-structures/hash-maps/data/google-10000-english.txt';
const all24k = 'src/data-structures/hash-maps/data/00-combined.txt';

const file = all24k;
const dsPath = './hash-map-2';
const HashTable = require(dsPath);

function runTest() {
  // const dict = new Map();
  const dict = new HashTable();

  console.log(`${dict.constructor.name} from ${dsPath}`);
  console.time('SET');
  for (let i = 0; i < keys.length; i++) {
    dict.set(keys[i], keys[i]);
  }
  console.timeEnd('SET');

  console.time('GET');
  for (let i = 0; i < keys.length; i++) {
    const val = dict.get(keys[i]);
    assert.equal(val, keys[i]);
  }
  console.timeEnd('GET');
}


const keys = [];

const rl = readline.createInterface({
  input: fs.createReadStream(file),
  crlfDelay: Infinity,
});
rl.on('line', (line) => {
  keys.push(line);
}).on('close', () => {
  console.log(`${keys.length} words from ${file}`);
  runTest();
});
