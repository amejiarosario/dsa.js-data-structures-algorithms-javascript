class Othello {
  constructor() {
    this.board = new Board(8);
    this.player1 = new Player(Piece.WHITE, this.board);
    this.player2 = new Player(Piece.BLACK, this.board);
  }
}

class Piece {

}

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
        row.push(new Square());
      }
      this.board.push(row);
    }
  }

  move(color, x, y) {
    const square = this.board[y][x];

    if(square.isEmpty()) {
      square.set(color);
    } else {
      // throw new Error(`Illegal move. This square already has a piece on (${x}, ${y})`);
    }
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
  constructor() {
    this.color = null;
  }

  isEmpty() {
    return this.color === null;
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
  p1.play(4, 4);
  p2.play(3, 4);
  p2.play(4, 3);

  console.log(game.board.toString());
}

main();