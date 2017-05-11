/**
 * 7.10 Minesweeper: Design and implement a text-based Minesweeper game. Minesweeper is the classic single-player computer game where an NxN grid has B mines (or bombs) hidden across the grid. The remaining cells are either blank or have a number behind them. The numbers reflect the number of bombs in the surrounding eight cells.The user then uncovers a cell. If it is a bomb, the player loses. If it is a number, the number is exposed. If it is a blank cell, this cell and all adjacent blank cells (up to and including the surrounding numeric cells) are exposed. The player wins when all non-bomb cells are exposed. The player can also flag certain places as potential bombs. This doesn't affect game play, other than to block the user from accidentally clicking a cell that is thought to have a bomb. (Tip for the reader: if you're not familiar with this game, please playa few rounds online first.)
 */
class Minesweeper {
  constructor(rows, columns, mines) {
    this.board = new Board(rows, columns, mines);
  }
}

class Board {
  constructor(rows, columns, mines) {
    this.rows = rows;
    this.columns = columns;
    this.board = [];
    this.uncovered = 0;

    for(let column = 0; column < columns; column++) {
      this.board[column] = [];

      for(let row = 0; row < rows; row++ ){
        this.board[column][row] = new Square(column, row);
      }
    }

    this.setMines(mines);
  }

  setMines(mines) {
    this.mines = 0;
    let minesCoordinates = [];

    if(Array.isArray(mines)) {
      minesCoordinates = mines;
    } else {
      for(let bomb = 0; bomb < parseInt(mines); bomb++ ) {
        const row = parseInt(Math.random() * this.rows);
        const col = parseInt(Math.random() * this.columns);
        minesCoordinates.push([col, row]);
      }
    }

    minesCoordinates.forEach((v) => {
      const col = v[0];
      const row = v[1];
      const square = this.getSquare(col, row);

      if(!square) return;

      square.setBomb();
      this.mines++;

      // increase adjacent numbers
      this.getAdjacents(col, row).forEach((square) => square.increaseNumber());
    });
  }

  getMinesCount() {
    return Array.isArray(this.mines) ? this.mines.length : this.mines;
  }

  getSquare(col, row) {
    if(col < 0 || col >= this.columns || row < 0 || row >= this.rows) {
      return;
    } else {
      return this.board[col][row];
    }
  }

  getAdjacents(col, row) {
    const adjacents = [];

    for(let y = -1; y < 2; y++ ) {
      for(let x = -1; x < 2; x++) {
        if(x === y && x === 0) {
          continue;
        }
        const square = this.getSquare(col + y, row + x);
        if(square) {
          adjacents.push(square);
        }
      }
    }

    return adjacents;
  }

  revealNumbers(col, row) {
    this.getAdjacents(col, row).forEach((square) => {
      if(!square.isHidden) { return; }

      this.uncovered++;
      square.discover();

      if(square.isEmpty()) {
        this.revealNumbers(square.col, square.row);
      }
    });
  }

  /**
   *
   * @param col
   * @param row
   * @param action discover or flag
   * @returns {*}
   */
  play(col, row, action = 'discover') {
    const square = this.getSquare(col, row);
    const value = square[action]();
    if(action === 'flag') { return; }

    this.uncovered++;

    if(square.hasBomb()) {
      throw 'Game Over';
    }

    if(square.isEmpty()) {
      this.revealNumbers(col, row);
    }

    if(this.uncovered === (this.rows * this.columns - this.mines)) {
      throw 'You won!';
    }

    return value;
  }

  hasWin() {
    return this.board.reduce((acc, col) => acc && col.reduce((acc, row) => {
      return row.isHidden ? row.hasBomb() : false;
    }, true), true);
  }

  toString(fn) {
    let string = '';


    for(let column = 0; column < this.board.length; column++ ) {
      string += '\n';
      for(let row = 0; row < this.board[column].length; row++ ) {
        const square = this.board[column][row];
        const val = fn ? (fn instanceof Function ? fn(square) : square[fn]) : square.getValue();
        string += `\t ${val}`;
      }
    }
    return string;
  }
}

class Square {
  constructor(col, row, value = Square.EMPTY) {
    this.value = value;
    this.col = col;
    this.row = row;
    this.isFlagged = false;
    this.isHidden = true;
  }

  setBomb() {
    this.value = Square.BOMB;
  }

  increaseNumber() {
    if(this.value === Square.BOMB) {
      return;
    }

    if(Number.isInteger(this.value)) {
      ++this.value;
    } else {
      this.value = 1;
    }

    return this.value;
  }

  hasBomb() {
    return this.value === Square.BOMB
  }

  isEmpty() {
    return this.value === Square.EMPTY;
  }

  discover() {
    this.isHidden = false;
    return this.value;
  }

  flag() {
    this.isFlagged = true;
  }

  getValue() {
    return this.isFlagged ? 'F' : (this.isHidden ? '?' : this.value);
  }
}

Square.EMPTY = '.';
Square.BOMB = '*';

module.exports = Minesweeper;