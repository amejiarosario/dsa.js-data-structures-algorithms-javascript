const expect = require('chai').expect;
const Minesweeper = require('./minesweeper');

describe('Minesweeper', function() {

  it('should start with undiscover cells', function() {
    const game = new Minesweeper(2, 2, 2);
    expect(game.board.toString()).to.equal(`
	 ?	 ?
	 ?	 ?`);
  });

  it('should start with undiscover cells', function() {
    const game = new Minesweeper(2, 2, 2);
    expect(game.board.toString('value')).to.not.equal(`
	 .	 .
	 .	 .`);
  });

  it('should set numbers properly', function () {
    const game = new Minesweeper(2, 2, [[0, 0]]);
    expect(game.board.toString('value')).to.equal(`
	 *	 1
	 1	 1`);
  });

  it('should set numbers properly', function () {
    const game = new Minesweeper(4, 4, [[0, 0], [1, 1]]);
    expect(game.board.toString('value')).to.equal(`
	 *	 2	 1	 .
	 2	 *	 1	 .
	 1	 1	 1	 .
	 .	 .	 .	 .`);
  });

  describe('Game', function () {
    var board;

    beforeEach(function () {
      const game = new Minesweeper(8, 8, [[0, 0], [1, 1], [2, 2], [1, 3], [5, 5]]);
      board = game.board;
    });

    it('should set numbers properly', function () {
      expect(board.toString('value')).to.equal(`
	 *	 2	 2	 1	 1	 .	 .	 .
	 2	 *	 3	 *	 1	 .	 .	 .
	 1	 2	 *	 2	 1	 .	 .	 .
	 .	 1	 1	 1	 .	 .	 .	 .
	 .	 .	 .	 .	 1	 1	 1	 .
	 .	 .	 .	 .	 1	 *	 1	 .
	 .	 .	 .	 .	 1	 1	 1	 .
	 .	 .	 .	 .	 .	 .	 .	 .`);
    });

    it('should display empty board', function () {
      expect(board.toString()).to.equal(`
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?`);
    });

    it('should throw game over', function () {
      expect(() => board.play(0, 0)).to.throw(/game over/i);
      expect(board.toString()).to.equal(`
	 *	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?`);
    });

    it('should reveal number', function () {
      expect(board.play(1, 2)).to.equal(3);
      expect(board.toString()).to.equal(`
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 3	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?`);
    });

    it('should reveal empty cells until a numbers are found', function () {
      const value = board.play(7, 0);
      expect(value).to.equal('.');
      expect(board.toString()).to.equal(`
	 ?	 ?	 ?	 ?	 1	 .	 .	 .
	 ?	 ?	 ?	 ?	 1	 .	 .	 .
	 1	 2	 ?	 2	 1	 .	 .	 .
	 .	 1	 1	 1	 .	 .	 .	 .
	 .	 .	 .	 .	 1	 1	 1	 .
	 .	 .	 .	 .	 1	 ?	 1	 .
	 .	 .	 .	 .	 1	 1	 1	 .
	 .	 .	 .	 .	 .	 .	 .	 .`);
    });

    it('should flag bombs', function () {
      const value = board.play(5, 5, 'flag');
      expect(board.toString()).to.equal(`
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 F	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?
	 ?	 ?	 ?	 ?	 ?	 ?	 ?	 ?`);
    });

    it('should win', function () {
      board.play(0, 1);
      board.play(0, 2);
      board.play(0, 3);

      board.play(1, 0);
      board.play(1, 2);

      expect(() => board.play(7, 0)).to.throw(/you won/i);

      expect(board.toString()).to.equal(`
	 ?	 2	 2	 1	 1	 .	 .	 .
	 2	 ?	 3	 ?	 1	 .	 .	 .
	 1	 2	 ?	 2	 1	 .	 .	 .
	 .	 1	 1	 1	 .	 .	 .	 .
	 .	 .	 .	 .	 1	 1	 1	 .
	 .	 .	 .	 .	 1	 ?	 1	 .
	 .	 .	 .	 .	 1	 1	 1	 .
	 .	 .	 .	 .	 .	 .	 .	 .`);
    });
  });
});