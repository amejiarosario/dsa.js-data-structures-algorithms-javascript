// npx jest lab/exercises/10-mixed/maze.spec.js --collectCoverage
const fn = require('./maze');

describe('The Maze', () => {
  const maze = [
    [0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ];

  it('should have path', () => {
    const start = [0, 4];
    const end = [4, 4];
    expect(fn(maze, start, end)).toEqual(true);
  });

  it('should NOT have path', () => {
    const start = [0, 4];
    const end = [3, 2];
    expect(fn(maze, start, end)).toEqual(false);
  });
});
