#!/usr/bin/env node

// time node permutation.js

function permutation(str, prefix = '') {
  if(str.length < 1) {
    console.log(prefix);
    return str;
  } else {
    for(const c of str){
      const rem = remaining(str, c);
      permutation(rem, prefix + c);
    }
  }
}

function remaining(str, c){
  return str.replace(c, '');
}

// permutation('a');
// permutation('ab');
permutation('abc');