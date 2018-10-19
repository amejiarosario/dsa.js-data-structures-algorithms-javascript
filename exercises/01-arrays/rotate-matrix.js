/*
 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
 write a method to rotate the image by 90 degrees. Can you do this in place?
*/
function rotateMatrix(matrix){
  const n = matrix.length;

  for(let layer = 0; layer < n / 2; layer++) {
    for(let offset = 0; offset < n - 2*layer - 1; offset++) {
      // save top
      const t = matrix[layer][layer + offset];
      // move left to top
      matrix[layer][layer + offset] = matrix[n - 1 - layer - offset][layer];
      // move bottom to left
      matrix[n - 1 - layer - offset][layer] = matrix[n - 1 - layer][n - 1 - layer - offset];
      // move right to bottom
      matrix[n - 1 - layer][n - 1 - layer - offset] = matrix[layer + offset][n - 1 - layer];
      // move saved top to right
      matrix[layer + offset][n - 1 - layer] = t;
    }
  }

  return matrix;
};

const m1 = [[0]];

const m2 = [[1, 2],
            [3, 4]];

const m3 = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]];

const m4 = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10,11,12],
            [13,14,15,16]];

const m5 = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9,10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25]];

console.log(rotateMatrix(m1)); // [ [ 0 ] ]
console.log(rotateMatrix(m2)); // [ [ 3, 1 ], [ 4, 2 ] ]
console.log(rotateMatrix(m3)); // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

console.log(rotateMatrix(m4));
/*
 [ [ 13, 9, 5, 1 ],
   [ 14, 10, 6, 2 ],
   [ 15, 11, 7, 3 ],
   [ 16, 12, 8, 4 ] ]
 */

console.log(rotateMatrix(m5));
/*
[ [ 21, 16, 11, 6, 1 ],
  [ 22, 17, 12, 7, 2 ],
  [ 23, 18, 13, 8, 3 ],
  [ 24, 19, 14, 9, 4 ],
  [ 25, 20, 15, 10, 5 ] ]
*/