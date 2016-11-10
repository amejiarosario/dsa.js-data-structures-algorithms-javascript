function isOneEditAway(str1, str2) {
  let edit = 0;
  let i1, i2;

  if(Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  for(i1 = 0, i2 = 0; i1 < str1.length && i2 < str2.length && edit <= 1; i1++, i2++) {
    if(str1[i1] === str2[i2]) {
      continue;
    } else {
      edit++;

      if(edit > 1){
        return false;
      } else if(str1.length > str2.length) {
        i2--;
      } else if(str1.length < str2.length) {
        i1--;
      } else {
        continue;
      }
    }
  }

  edit += str1.length - 1 - i1;
  edit += str2.length - 1 - i2;

  return edit <= 1;
}

console.log(isOneEditAway('pale', 'pale')); // true
console.log(isOneEditAway('pale', 'ale')); // true
console.log(isOneEditAway('pale', 'pales')); // true
console.log(isOneEditAway('pale', 'bale')); // true
console.log(isOneEditAway('apple', 'aple')); // true

console.log(isOneEditAway('pale', 'bae')); // false
console.log(isOneEditAway('pale', 'elap')); // false
console.log(isOneEditAway('pale', 'palepalepale')); // false