const expect = require('chai').expect;
const Othello = require('./othello');

describe('Othello', function() {

  it('should start with a default play', function() {
    const game = new Othello();
    const p1 = game.player1;
    const p2 = game.player2;
    const board = game.board;

    expect(board).toEqual('');
  });
});