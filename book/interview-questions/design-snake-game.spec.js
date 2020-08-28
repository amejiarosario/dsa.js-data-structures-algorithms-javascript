const { SnakeGame } = require('./design-snake-game');

describe('Queue: Design Snake Game', () => {
  it('should game over when hits wall', () => {
    const snakeGame = new SnakeGame(4, 2, [[1, 2], [0, 1]]);
    expect(snakeGame.move('R')).toEqual(0); //  0
    expect(snakeGame.move('D')).toEqual(0); //  0
    expect(snakeGame.move('R')).toEqual(1); //  1 (ate food1)
    expect(snakeGame.move('U')).toEqual(1); //  1
    expect(snakeGame.move('L')).toEqual(2); //  2 (ate food2)
    expect(snakeGame.move('U')).toEqual(-1); // -1 (hit wall)
  });

  it('should circle around without eating itself', () => {
    const snakeGame = new SnakeGame(2, 2, [[0, 1], [1, 1], [1, 0]]);
    expect(snakeGame.move('R')).toEqual(1);
    expect(snakeGame.move('D')).toEqual(2);
    expect(snakeGame.move('L')).toEqual(3);
    expect(snakeGame.move('U')).toEqual(3);
    expect(snakeGame.move('R')).toEqual(3);
  });

  it('should game over when hit itself', () => {
    const snakeGame = new SnakeGame(3, 2, [[0, 1], [0, 2], [1, 2], [1, 1]]);
    expect(snakeGame.move('R')).toEqual(1);
    expect(snakeGame.move('R')).toEqual(2);
    expect(snakeGame.move('D')).toEqual(3);
    expect(snakeGame.move('L')).toEqual(4);
    expect(snakeGame.move('U')).toEqual(-1);
  });
});
