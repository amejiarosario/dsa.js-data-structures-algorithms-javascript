function hasPath(maze, start, destination) {
  const queue = [start];
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // right, left, up, down,

  for (const curr of queue) {
    let [currRow, currCol] = curr;
    if (destination[0] === currRow && destination[1] === currCol) return true;
    maze[currRow][currCol] = 2; // mark as visited.

    // console.log({
    //   currRow, currCol, maze, queue,
    // });

    for (const [nextRow, nextCol] of directions) {
      [currRow, currCol] = curr; // reset to start point
      while (currRow >= 0 && currRow < maze.length && currCol >= 0 && currCol < maze[currRow].length && maze[currRow][currCol] !== 1) {
        currRow += nextRow;
        currCol += nextCol;
      }
      // step back one position to go before the wall.
      currRow -= nextRow;
      currCol -= nextCol;
      // check if it hasn't been visited
      if (maze[currRow][currCol] === 0) queue.push([currRow, currCol]);
      // console.log('*', { currRow, currCol, queue });
    }
  }

  return false;
}

module.exports = hasPath;

/* /
const start = [0, 4];
const end = [3, 2];
const maze = [
  [0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];
hasPath(maze, start, end);
// */
