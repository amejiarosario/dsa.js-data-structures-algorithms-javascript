// 1.3 URLi : Write a method to replace all spaces in a string with '%20  You may assume that the string has suf cient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.) EXAMPLE Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"

// Strings are inmutable. You cannot do: s='abc'; s[1]='d';
function urlify(str, length) {
  let string = str.split('');

  for(let k = string.length-1, i=length-1; i >= 0; i--, k--) {
    const char = string[i];
    if(char === ' ') {
      string[k] = '0';
      string[--k] = '2';
      string[--k] = '%';
    } else {
      string[k] = char;
    }
  }

  return string.join('');
}

console.log(urlify('Mr John Smith    ', 13)); // Mr%20John%20Smith
console.log(urlify('Mr John Smith       ', 14)); // Mr%20John%20Smith%20
console.log(urlify(' Mr John Smith      ', 14)); // %20Mr%20John%20Smith