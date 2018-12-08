/* eslint-disable */
// 2d-array

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

  // console.table(data.table);
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
  assert.equal(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
  assert.equal(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
  assert.equal(convert('AB', 1), 'AB');
}

test();
