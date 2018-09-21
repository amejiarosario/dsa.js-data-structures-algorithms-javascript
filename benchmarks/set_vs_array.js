const myset = new Set();
const myarray = [];

for (let i = 0; i < 1000 * 1000; i++) {
  myset.add(i);
  myarray.push(i);
}

function reportTime(label, callback) {
  const start = process.hrtime.bigint();

  callback();

  const end = process.hrtime.bigint();
  const ns = end - start;
  const µs = ns / BigInt(1000);
  const sec = parseInt(µs, 10) / 1e6;
  console.log(`${sec.toLocaleString()} sec. for ${label}`);
}


reportTime("Set#has()", () => {
  for (let i = 0; i < 1000 * 1000; i++) {
    const r = Math.floor(Math.random() * 1000 * 1000);
    myset.has(r);
  }
});

reportTime("Array#includes()", () => {
  for (let i = 0; i < 1000 * 1000; i++) {
    const r = Math.floor(Math.random() * 1000 * 1000);
    myarray.includes(r);
  }
});

/*
Benchmark ideas

https://mathiasbynens.be/notes/javascript-benchmarking


time lapsed
operations/sec

https://benchmarkjs.com/

https://jsperf.com/loop-performance-2018 - ops/s
https://jsbench.me/h5jm8evhsk/1 - ops/s

http://jsben.ch/bWfk9 - ms

*/
var hz, period, startTime = new Date, runs = 0; do {
  // Code snippet goes here
  runs++; totalTime = new Date - startTime;
} while (totalTime < 1000);
// convert ms to seconds
totalTime /= 1000;
// period → how long per operation
period = totalTime / runs;
// hz → the number of operations per second
hz = 1 / period;
// can be shortened to // hz = (runs * 1000) / totalTime;
