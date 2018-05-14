class Othello {
  constructor() {
    this.board = new Board(10);
    this.player1 = new Player(Piece.WHITE, this.board);
    this.player2 = new Player(Piece.BLACK, this.board);
  }
}

const Piece = {};

// Piece.WHITE = Symbol('x');
// Piece.BLACK = Symbol('o');
Piece.WHITE = 'x';
Piece.BLACK = 'o';


class Board {
  constructor(size) {
    this.size = size;
    this.board = [];

    for(let y = 0; y < size; y++) {
      const row = [];
      for(let x = 0; x < size; x++) {
        row.push(new Square(x, y));
      }
      this.board.push(row);
    }
  }

  move(color, x, y) {
    const square = this.get(x, y);

    if(square && square.isEmpty()) {
      square.set(color);

      this.turnPieces(square);
      this.checkWinner();

    } else {
      throw new Error(`Illegal move. This square already has a piece on (${x}, ${y})`);
    }
  }

  get(x, y) {
    if(x < this.size && y < this.size) {
      return this.board[y][x];
    } else {
      return new Square();
    }
  }

  getAdjacents(square) {
    const x = square.x;
    const y = square.y;

    return {
      top: this.get(x, y - 1),
      bottom: this.get(x, y + 1),
      right: this.get(x + 1, y),
      left: this.get(x - 1, y)
    };
  }

  turnPieces(square) {
    // check adjacent pieces of other color
    const adjacents = this.getAdjacents(square);

    // check if the adjacent piece is preceded by other piece of different color
    Object.values(adjacents).forEach((adj) => {
      if(!adj.isEmpty() && adj.color !== square.color) {
        if(this.isSurrounded(adj)) {
          adj.color = square.color;
        }
      }
    });
  }

  isSurrounded(square) {
    const adjacents = this.getAdjacents(square);
    const left = adjacents.left.color;
    const right = adjacents.right.color;
    const top = adjacents.top.color;
    const bottom = adjacents.bottom.color;

    return (left && left === right && square.color !== left) ||
      (top && top === bottom && square.color !== top);
  }

  checkWinner() {

  }

  toString() {
    let string = '';

    for(let y = 0; y < this.size; y++) {
      for(let x = 0; x < this.size; x++) {
        string += `\t${this.board[y][x].toString()}`;
      }
      string += '\n';
    }

    return string;
  }
}

class Player {
  constructor(color, board) {
    this.color = color;
    this.board = board;
  }

  play(x, y) {
    this.board.move(this.color, x, y);
  }
}

class Square {
  constructor(x, y) {
    this.color = null;
    this.x = x;
    this.y = y;
  }

  isEmpty() {
    return !this.color;
  }

  set(color) {
    this.color = color;
  }

  toString() {
    return this.color ? this.color.toString() : '.';
  }
}

function main() {
  const game = new Othello();
  const p1 = game.player1;
  const p2 = game.player2;

  // default play
  p1.play(3, 3);
  p2.play(3, 4);
  p1.play(4, 4);
  p2.play(4, 3);

  // Players game
  p1.play(5, 3);
  p2.play(3, 2);

  console.log(game.board.toString());
}

main();

module.exports = Othello;