function isStringRotation(s1, s2) {
  if(s1.length !== s2.length) {
    return false;
  }

  let i1, offset;

  for(i1 = 0; i1 < s1.length; i1++) {
    for(offset = 0; i1 + offset < s1.length; offset ++) {
      if(s1[i1 + offset] !== s2[offset]) {
        break;
      }
    }

    if(offset - i1 === s2.length) {
      return true;
    }

    if(s1.length < i1 + offset) {
      return isSubstring(s2.substring(offset), s1.substring(0, offset));
    }
  }
  return false;
}

function isSubstring(s1, s2) {
  return s1.indexOf(s2) || s2.indexOf(s1);
}

console.log(isStringRotation('ab', 'ab'));
console.log(isStringRotation('ba', 'ab'));

console.log(isStringRotation('aab', 'aab'));
console.log(isStringRotation('aba', 'aab'));
console.log(isStringRotation('baa', 'aab'));


console.log(isStringRotation('aaaab', 'aaaab'));
console.log(isStringRotation('aaaba', 'aaaab'));
console.log(isStringRotation('aabaa', 'aaaab'));
console.log(isStringRotation('abaaa', 'aaaab'));
console.log(isStringRotation('baaaa', 'aaaab'));

console.log(isStringRotation('waterbottle', 'bottlewater'));
