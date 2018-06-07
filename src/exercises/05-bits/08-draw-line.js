/**
 * 5.8 Draw Line: A monochrome screen is stored as a single array of bytes, allowing eight consecutive pixels to be stored in one byte. The screen has width w, where w is divisible by 8 (that is, no byte will be split across rows).
 * The height of the screen, of course, can be derived from the length of the array and the width.Implement a function that draws a horizontal line from (x1, y) to (x2, y).
 *
 The method signature should look something like:
 drawLine(byte[] screen, int width, int xl, int x2, int y)

 Hints: #366, #381, #384, #391
 */

const bm = require('./00-bit-manipulation');

/**
 *
 * @param screen array of bytes
 * @param width {integer} in bytes
 * @param x1 integer
 * @param x2 integer
 * @param y integer
 */
function drawLine(screen, width, x1, x2, y){
  // validations
  if(x2 <= x1 || x1 < 0) { return screen; }

  const i1 =  y * screen.length/(width/8) + parseInt(x1/8);
  const i2 =  y * screen.length/(width/8) + parseInt((x2 - 1)/8);

  // console.log(i1, i2, screen.length/(width/8));

  for(let i = i1; i <= i2; i++) {
    if(i1 === i2) {
      screen[i] = bm.setBitsRange(screen[i], (8 - x2 % 9), (8 - x1 % 8));
    } else if (i === i1) {
      screen[i] = bm.setBitsRange(screen[i], 0, (8 - x1 % 8));
      // console.log(i, screen[i], 0, (8 - x1));
    } else if (i === i2) {
      screen[i] = bm.setBitsRange(screen[i], (8 - x2 % 8), 8);
      // console.log(i, screen[i], (8 - x2 % 8), 8);
    } else {
      screen[i] = bm.setBitsRange(screen[i], 0, 8);
      // console.log(i, screen[i], 0, 8);
    }
  }

  return screen;
}

module.exports = drawLine;