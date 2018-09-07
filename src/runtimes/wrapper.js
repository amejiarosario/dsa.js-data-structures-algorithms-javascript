#!/usr/bin/env node

// ./wrapper.js ./is-empty.js < array10.txt
// time ./wrapper.js ./is-empty.js < array10.txt
// time ./wrapper.js ./is-empty.js < array1M.txt
// ./wrapper.js ./02-binary-search.js 775 < sortedArray1e1.txt

//
// Articles
//
// https://mathiasbynens.be/notes/javascript-benchmarking

const totalUsage = process.cpuUsage();

// utils

/**
 * Convert object's values from number to string nicely formatted.
 * @param {object} obj
 */
function t(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[key] = val.toLocaleString();
    return acc;
  }, {});
}

/**
 * numerical diff between two objects with matching keys
 * @param {object} obj1
 * @param {object} obj2
 */
function diff(obj1, obj2) {
  return Object.entries(obj1).reduce((acc, [key, val]) => {
    acc[key] = obj2[key] - val;
    return acc;
  }, {});
}
// /utils

// console.log(process.argv);
const args = process.argv.slice(2);
const fargs = args.slice(1).map(a => JSON.parse(a));
console.log({args, fargs});

// const ELEMENTS = 1e10; // 11,803.013ms
// const ELEMENTS = 1e9; // 1,000,000,000-elements: 634.663ms
// console.time(`${ELEMENTS.toLocaleString()}-elements`);
// for (let i = 0; i < ELEMENTS; i++) {}
// console.timeEnd(`${ELEMENTS.toLocaleString()}-elements`);


// spin the CPU for 500 milliseconds
// const now = Date.now();
// while (Date.now() - now < 500);


const chunks = [];
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`.`);
    chunks.push(chunk);
  }
});

process.stdin.on('end', () => {
  const allChunks = JSON.parse(chunks.join(''));
  process.stdout.write(`data: ${allChunks.length.toLocaleString()}\r\n`);

  const startUsage = process.cpuUsage();
  const startMemUsaged = process.memoryUsage();

  // console.profile('MyLabel');
  process.stdout.write(require(args[0]).apply(null, [allChunks, ...fargs]));
  // console.profileEnd('MyLabel');

  console.log('cpu usage', t(process.cpuUsage(startUsage)));
  console.log('mem usage', t(diff(startMemUsaged, process.memoryUsage())));


  // process.stdout.write('end\r\n');
  // console.log('totalCPUusage', t(process.cpuUsage(totalUsage)));
  // console.log(`totalMemUsage`, t(process.memoryUsage())); // https://stackoverflow.com/questions/12023359/what-do-the-return-values-of-node-js-process-memoryusage-stand-for
});


// Improvements

// Run function on a child process with "exec" and kill it if it goes in a infinite loop.
// - https://gist.github.com/kevinohara80/3173692
