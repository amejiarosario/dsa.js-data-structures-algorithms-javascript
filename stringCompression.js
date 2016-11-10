function stringCompression(s){
  let map = new Map();

  for(const c of s){
    map.set(c, (map.get(c) || 0) + 1);
  }

  let compressed = Array.from(map.entries()).reduce((p, c) => p.concat(c), []).join('');

  return (compressed.length < s.length) ? compressed : s;
}

console.log(stringCompression('abc')); // abc
console.log(stringCompression('abb')); // abb
console.log(stringCompression('aabcccccaaa')); // a2blc5a3