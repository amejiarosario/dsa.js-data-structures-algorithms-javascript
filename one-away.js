function isOneEditAway(str1, str2) {
  let letters = new Map();
  let sizeDelta = Math.abs(str1.length - str2.length);

  if(sizeDelta > 1) {
    return false;
  }

  for(const char of str1.concat(str2)){
    letters.set(char, (letters.get(char) || 0) + 1);
  }

  const oddLetters = Array.from(letters.values()).filter((v) => v % 2);
  return oddLetters.length < 3;
}

console.log(isOneEditAway('pale', 'pale')); // true
console.log(isOneEditAway('pale', 'ale')); // true
console.log(isOneEditAway('pale', 'pales')); // true
console.log(isOneEditAway('pale', 'bale')); // true
console.log(isOneEditAway('pale', 'bae')); // false
console.log(isOneEditAway('pale', 'elap')); // false