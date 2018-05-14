function zeroMatrix(matrix) {
  const zeroRows = new Set();
  const zeroCols = new Set();

  for(let m = 0; m < matrix.length; m++) {
    for(let n = 0; n < matrix[m].length; n++) {
      if(matrix[m][n] === 0){
        zeroRows.add(m);
        zeroCols.add(n);
      }
    }
  }

  for(const m of zeroRows) {
    for(let n = 0; n < matrix[m].length; n++) {
      matrix[m][n] = 0;
    }
  }

  for(const n of zeroCols) {
    for(let m = 0; m < matrix.length; m++) {
      matrix[m][n] = 0;
    }
  }

  return matrix;
}

const m5 = [[1, 2, 3, 4, 5, 'a'],
  [6, 7, 8, 9,10, 'b'],
  [11,12,13,14,15,'c'],
  [16,17,18,19,20,'d'],
  [21,22,23,24,0, 'e']];

console.log(zeroMatrix(m5));