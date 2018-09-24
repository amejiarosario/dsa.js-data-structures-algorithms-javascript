// nodemon benchmarks/hashmap.perf.js
/* eslint-disable */


/**
 * Using Benchmark.js
 * @example
 * - https://benchmarkjs.com/
 * - https://github.com/bootstraponline-archive/livepreview_benchmark/blob/gh-pages/public/js/benchmarkjs/test.js#L14-16
 */
const Series = require('./stats');
const assert = require('assert');
const readline = require('readline');
var Benchmark = require('benchmark');
const fs = require('fs');
const filePath = 'benchmarks/data/';
const en2048 = `${filePath}english.txt`;
const en10k = `${filePath}google-10000-english.txt`;
const all24k = `${filePath}00-combined.txt`;
const en250k = `${filePath}dict.txt`;

const file = en2048;
// const dsPath = './hash-map-2';
// const dsPath = './hash-map-3';
// const dsPath = './hash-map-4';
const dsPath = 'src/data-structures/hash-maps/hash-map';
// const HashTable = require(dsPath);
const keys = [];
const values = [];

function reportTime(label, callback) {
  const start = process.hrtime.bigint();

  callback();

  const end = process.hrtime.bigint();
  const ns = end - start;
  const µs = ns / BigInt(1000);
  const sec = parseInt(µs, 10) / 1e6;
  console.log(`${sec.toLocaleString()} sec. for ${label}`);
}

function runTest() {
  const map = new Map();
  // const dict = new HashTable();

  reportTime('Map#set', () => {
    for (let i = 0; i < keys.length; i++) {
      map.set(keys[i], keys[i]);
    }
    console.log('set.keys.length', keys.length);
  });

  reportTime('Map#get', () => {
    for (let i = 0; i < keys.length; i++) {
      const val = map.get(keys[i]);
      assert.equal(val, keys[i]);
    }
    console.log('get.keys.length', keys.length);
  });
}

const rl = readline.createInterface({
  input: fs.createReadStream(file),
  crlfDelay: Infinity,
});

rl.on('line', (line) => {
  keys.push(line);
  values.push(`${line}-${Math.random()}`);
}).on('close', () => {
  // inserting a duplicated key with different value
  // keys.push(keys[0]);
  // values.push(`${keys[0]}-${Math.random()}`);

  console.log(`${keys.length.toLocaleString()} words from ${file}`);
  // runTest();
  useBenchmark();
});

function testMapOperations(map) {
  // set
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], values[i]);
  }
  // get
  for (let i = 0; i < keys.length; i++) {
    const val = map.get(keys[i]);
    assert.equal(val, values[i]);
  }
  // update
  map.set(keys[0], 'test');
  assert.equal(map.get(keys[0]), 'test');
  // delete
  for (let i = 0; i < keys.length; i++) {
    map.delete(keys[i], values[i]);
    assert.equal(map.get(keys[i]), undefined);
  }
}

function printSortedResults(benchmark) {
  console.log('\n======== Results ========');
  const results = Object.values(benchmark).filter(b => b && b.name);
  const sortedResults = results.sort((a, b) => b.hz - a.hz);
  sortedResults.forEach((b) => {
    console.log(`${b.hz.toLocaleString()} ops/s with ${b.name}`);
  });
}

function useBenchmark() {
  var suite = new Benchmark.Suite;
  const NaiveHMLength = require('../src/data-structures/hash-maps/hash-map-1');
  const HashMapSmallBucket = require('../src/data-structures/hash-maps/hash-map-2');
  const HashMap3 = require('../src/data-structures/hash-maps/hash-map-3');
  const HashMap4 = require('../src/data-structures/hash-maps/hash-map-4');
  const HashMap = require('../src/data-structures/hash-maps/hashmap');

  // // Map (built-in) x 2,257 ops/sec ±2.42% (75 runs sampled)
  // suite.add('Map (built-in)', function() {
  //   const map = new Map();
  //   testMapOperations(map);
  // }, { onComplete: () => {
  //   if (map.collisions) {
  //     console.log('\tcollisions', map.collisions);
  //   }
  // }})

  let map;

  suite

  /*
    ======== Results ========
    2,653.472 ops/s with Map (built-in)
    469.016 ops/s with HashMap
    355.064 ops/s with HashMap3
    66.808 ops/s with HashMap4
  */

  // .add('Map (built-in)', function() {
  //   const map = new Map();
  //   testMapOperations(map);
  // })

  // HashMap3 x 543 ops/sec ±1.53% (84 runs sampled)
  .add('HashMap3', function() {
    map = new HashMap3();
    testMapOperations(map);
  })

  // HashMap4 x 302 ops/sec ±2.09% (75 runs sampled)
  .add('HashMap4', function() {
    map = new HashMap4();
    testMapOperations(map);
  })

  .add('HashMap', function() {
    map = new HashMap();
    testMapOperations(map);
  })

  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
    if (map && map.collisions) {
      console.log('\tcollisions', map.collisions);
    }
  })
  .on('error', function(event) {
    console.log(event.target.error);
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    // console.log('Slowest is ' + this.filter('slowest').map('name'));
    printSortedResults(this);
  })
  // run async
  .run({ 'async': true });
}
