function stringCompression(s){
  let compressed = s.split('').reduce(function (p, c) {
    if(p.length > 0 && p[p.length-1][0] === c){
      p[p.length-1][1]++;
    } else {
      p.push([c, 1]);
    }
    return p;
  }, []).reduce((a, b) => a.concat(b), []).join('');

  return (compressed.length < s.length) ? compressed : s;
}

console.log(stringCompression('abc')); // abc
console.log(stringCompression('abb')); // abb
console.log(stringCompression('aabcccccaaa')); // a2blc5a3