/**
 * 5.2 Binary to String: Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double, print the binary representation.Ifthe number cannot be represented accurately in binary with at most 32 characters, print "ERROR:'
 *
 *
 * @param number  real number between 0 and 1 (e.g., 0.72)
 */
function binaryToString(number) {
  const integer = parseInt(number);
  const decimal = number - integer;
  const string = [];

  string.push(integerToBinaryString(integer));
  string.push(decimalToBinaryString(decimal));

  return string.join('');
}

function integerToBinaryString(number) {
  const string = [];

  while(number > 1) {
    string.push(number % 2);
    number = parseInt(number / 2);
  }
  string.unshift(number);

  return string.join('');
}

function decimalToBinaryString(decimal, overflow = 32) {
  const string = [];
  let binary = 0;

  for(let i=1; binary < decimal; i++) {
    if(i === overflow) {
      throw new Error('overflows 32-bits');
    }

    const exp = Math.pow(2, -i);

    if((binary + exp) <= decimal) {
      binary += exp;
      string.push(1);
    } else {
      string.push(0);
    }
  }

  if(string.length > 0) {
    string.unshift('.');
  }

  return string.join('');
}

module.exports = binaryToString;


// 17 = 7 * 10^0 + 1 * 10^1

// 0.893 = 8*10^-1 + 9*10^-2 + 3*10^-1 
// 0.10010 => 1*2^-1 + 0*2^-2 + 0*2^-3 + 1*2^-4 =


// 0.1 = 0.5

// 0.72 => 0.1011100001010001111010111000010100011110101110000101