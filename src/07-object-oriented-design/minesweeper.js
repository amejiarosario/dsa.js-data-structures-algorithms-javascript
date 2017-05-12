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
        this.board[column][row] = new Cell(column, row);
      }
    }

    this.setMines(mines);
  }

  getTotalCells() {
    return this.rows * this.columns;
  }

  setMines(mines) {
    this.mines = 0;
    let minesCoordinates = [];

    if(Array.isArray(mines)) {
      minesCoordinates = mines;
    } else {
      // Check if mines exceed the number of cells
      const minesCount = parseInt(mines);

      if(minesCount > this.getTotalCells()) {
        throw new Error(`Number of mines ${minesCount} is larger than the board ${this.getTotalCells()}`);
      }

      // set bombs in order
      let row = 0;
      let col = 0;
      const minesMap = new Map();

      for(let bomb = 0; bomb < minesCount; bomb++ ) {
        if(!this.getCell(col, row)) {
          row = 0;
          col++;
        }

        minesMap.set(`${col},${row++}`, true);
      }

      // shuffle mines position
      const shuffledMines = new Map();

      for(let coord of minesMap.keys()) {
        const r = parseInt(Math.random() * this.rows);
        const c = parseInt(Math.random() * this.columns);

        shuffledMines.set(`${c},${r}`, true);
        if(minesMap.has(`${c},${r}`)) {
          shuffledMines.set(coord, true);
        }
      }

      minesCoordinates = Array.from(shuffledMines.keys()).map((v) => v.split(','));
    }

    minesCoordinates.forEach((v) => {
      const col = parseInt(v[0]);
      const row = parseInt(v[1]);
      const cell = this.getCell(col, row);

      if(!cell) return;
      if(cell.hasBomb()) { throw new Error('This cell already has a bomb!'); }

      cell.setBomb();
      this.mines++;

      // increase adjacent numbers
      this.getAdjacents(col, row).forEach((cell) => cell.increaseNumber());
    });
  }

  getMinesCount() {
    return Array.isArray(this.mines) ? this.mines.length : this.mines;
  }

  getCell(col, row) {
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
        const cell = this.getCell(col + y, row + x);
        if(cell) {
          adjacents.push(cell);
        }
      }
    }

    return adjacents;
  }

  revealNumbers(col, row) {
    this.getAdjacents(col, row).forEach((cell) => {
      if(!cell.isHidden) { return; }

      this.uncovered++;
      cell.discover();

      if(cell.isEmpty()) {
        this.revealNumbers(cell.col, cell.row);
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
    const cell = this.getCell(col, row);
    const value = cell[action]();
    if(action === 'flag') { return; }

    this.uncovered++;

    if(cell.hasBomb()) {
      throw 'Game Over';
    }

    if(cell.isEmpty()) {
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
        const cell = this.board[column][row];
        const val = fn ? (fn instanceof Function ? fn(cell) : cell[fn]) : cell.getValue();
        string += `\t ${val}`;
      }
    }
    return string;
  }
}

/**
 * Cell
 */
class Cell {
  constructor(col, row, value = Cell.EMPTY) {
    this.value = value;
    this.col = col;
    this.row = row;
    this.isFlagged = false;
    this.isHidden = true;
  }

  setBomb() {
    this.value = Cell.BOMB;
  }

  increaseNumber() {
    if(this.value === Cell.BOMB) {
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
    return this.value === Cell.BOMB
  }

  isEmpty() {
    return this.value === Cell.EMPTY;
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

Cell.EMPTY = '.';
Cell.BOMB = '*';

module.exports = Minesweeper;