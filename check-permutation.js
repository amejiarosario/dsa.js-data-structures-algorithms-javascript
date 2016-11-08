/*
1.2 Check Permutation: Given two strings,
write a method to decide if one is a permutation of the other.
*/
function checkPermutation(a, b){
  if(a.length !== b.length) return false;

  chars = new Map();

  a.split('').forEach((c) => chars.set(c, 1));

  for(const c of b){
    if(chars.get(c) !== 1) return false;
  }
  return true;
}

console.log(checkPermutation('123', '231'));
console.log(checkPermutation('123', '456'));
console.log(checkPermutation('123', '4231'));
console.log(checkPermutation('4231', '123'));
console.log(checkPermutation('God', 'dog'));
console.log(checkPermutation('God ', 'dog'));