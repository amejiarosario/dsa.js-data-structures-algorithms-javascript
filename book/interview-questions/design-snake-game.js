const { Queue } = require('../../src/index');

// tag::description[]
/**
 * The snake game stars with a snake of length 1 at postion 0,0.
 * Only one food position is shown at a time. Once it's eaten the next one shows up.
 * The snake can move in four directions up, down, left and right.
 * If the snake go out of the boundaries (width x height) the game is over.
 * If the snake hit itself the game is over.
 * When the game is over, the `move` method returns -1 otherwise, return the current score.
 *
 * @example
 *  const snakeGame = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
 *  snakeGame.move('R'); //  0
 *  snakeGame.move('D'); //  0
 *  snakeGame.move('R'); //  0
 *  snakeGame.move('U'); //  1
 *  snakeGame.move('L'); //  2
 *  snakeGame.move('U'); // -1
 */
class SnakeGame {
// end::description[]
// tag::solution[]

  // end::solution[]
  // tag::description[]
  /**
   * Initialize game with grid's dimension and food order.
   * @param {number} width - The screen width (grid's columns)
   * @param {number} height - Screen height (grid's rows)
   * @param {number[]} food - Food locations.
   */
  constructor(width, height, food) {
    // end::description[]
    // tag::solution[]
    this.width = width;
    this.height = height;
    this.food = new Queue(food);
    this.snake = new Queue([[0, 0]]);
    this.tail = new Set([[0, 0]]);
    this.dirs = {
      U: [-1, 0], D: [1, 0], R: [0, 1], L: [0, -1],
    };
    // end::solution[]
    // tag::description[]
  }
  // end::description[]

  // tag::description[]
  /**
   * Move snake 1 position into the given direction.
   * It returns the score or game over (-1) if the snake go out of bound or hit itself.
   * @param {string} direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down.
   * @returns {number} - The current score (snake.length - 1).
   */
  move(direction) {
    // end::description[]
    // tag::solution[]
    let [r, c] = this.snake.back(); // head of the snake
    [r, c] = [r + this.dirs[direction][0], c + this.dirs[direction][1]];

    // check wall collision
    if (r < 0 || c < 0 || r >= this.height || c >= this.width) return -1;

    const [fr, fc] = this.food.front() || []; // peek
    if (r === fr && c === fc) {
      this.food.dequeue(); // remove eaten food.
    } else {
      this.snake.dequeue(); // remove snake's if not food was eaten
      this.tail.delete(this.tail.keys().next().value);
    }

    // check collision with snake's tail
    if (this.tail.has(`${r},${c}`)) return -1; // O(1)

    this.snake.enqueue([r, c]); // add new position
    this.tail.add(`${r},${c}`);

    return this.snake.size - 1; // return score (length of the snake - 1)
    // end::solution[]
    // tag::description[]
  }
}
// end::description[]

module.exports = { SnakeGame };
