const expect = require('chai').expect;
const findRobotPath = require('./robot-path');

describe('findRobotPath', function() {
  it('2 x 2 grid and no obstacles', function () {
    expect(findRobotPath(2, 2)).to.eql([
      {row: 0, column: 1},
      {row: 1, column: 1}
    ]);
  });

  it('2 x 2 grid and an obstacles', function () {
    expect(findRobotPath(2, 2, [{row: 0, column: 1}])).to.eql([
      {row: 1, column: 0},
      {row: 1, column: 1}
    ]);
  });

  it('4 x 6 grid and no obstacles', function () {
    expect(findRobotPath(4, 6)).to.eql([
      {row: 0, column: 1},
      {row: 0, column: 2},
      {row: 0, column: 3},
      {row: 0, column: 4},
      {row: 0, column: 5},
      {row: 1, column: 5},
      {row: 2, column: 5},
      {row: 3, column: 5},
    ]);
  });

  it('6 x 4 grid and with obstacles', function () {
    expect(findRobotPath(6, 4, [{row: 0, column: 1}, {row: 1, column: 2}])).to.eql([
      {row: 1, column: 0},
      {row: 1, column: 1},
      {row: 2, column: 1},
      {row: 2, column: 2},
      {row: 2, column: 3},
      {row: 3, column: 3},
      {row: 4, column: 3},
      {row: 5, column: 3}
    ]);
  });
});