/* eslint-disable */
// 2d-array; time: O(n); space: O(n^2)

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let data = {
      col: 0,
      row: 0,
      index: 0,
      table: [],
      word: s,
      numRows
  }

  while (data.index < s.length) {
      data = goDown(data);
      data = goDiagonal(data);
  }

  console.table(data.table);
  return data.table.map(row => row.join('')).join('');
};

function goDown({ col, row, index, table, word, numRows }) {
  // console.log('goDown', { col, row, index})
  // console.table(table);
  let i;
  for(i = 0; row < numRows; i++) {
      table[row] = table[row] || [];
      table[row][col] = word[index + i];
      row++;
  }
  return { col, row: (row - 1), index: (index + i), table, word, numRows };
}

function goDiagonal({ col, row, index, table, word, numRows }) {
  // console.log('goDiagonal', { col, row, index})
  // console.table(table);
  let i;
  if (row) {
    for(i = 0; row !=0; i++) {
      row--;
      col++;
      table[row] = table[row] || [];
      table[row][col] = word[index + i];
    }
    row++;
    index += i;
  } else {
    col++;
  }

  return { col, row, index, table, word, numRows };
}

const assert = require('assert');
function test() {
  assert.equal(convert('PAYPALISHIRING', 1), 'PAYPALISHIRING');
  assert.equal(convert('PAYPALISHIRING', 2), 'PYAIHRNAPLSIIG');
  assert.equal(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
  assert.equal(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
}
test();

/*
char* convert(char* s, int numRows) {
  if (numRows == 1) {
      return s;
  }
  int len = strlen(s);
  char *buf = (char *) malloc(sizeof(char) * (len + 1));
  int i = 0;
  for (int row = 0; row < numRows; row++) {
      int step = (numRows - 1) * 2;
      int j = 0;
      while (j + row < len) {
          buf[i++] = s[j + row];
          j += step;
          if (row > 0 && row < numRows - 1 && j - row < len) {
              buf[i++] = s[j - row];
          }
      }
  }
  buf[len] = '\0';
  return buf;
}
*/

// function convert(s, numRows) {
//   if (numRows === 1) { return s; }

//   let buffer;
//   let i = 0;
//   for(let row = 0; row < numRows; row++) {
//     const step = (numRows - 1 ) * 2; // Characters in row 0 are located at indexes
//   }
// }
