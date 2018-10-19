const expect = require('chai').expect;
const coins = require('./coins');

describe('coins', function() {
  it('empty', function () {
    expect(coins()).to.include.members([]);
  });

  it('1', function () {
    expect(coins(1)).to.eql([
      [1]
    ]);
  });

  it('6', function () {
    expect(coins(6)).to.eql([
      [5, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 5]
    ]);
  });

  it('10', function () {
    expect(coins(10)).to.eql([
      [10],
      [5, 5],
      [5, 1,1,1,1,1],
      [1,1,1,1,1, 1,1,1,1,1]
    ]);
  });
});

describe('number of ways of representing n cents', function() {
  it('empty', function () {
    expect(coins()).to.eql(0);
  });

  it('1', function () {
    expect(coins(1)).to.eql(1);
  });

  it('6', function () {
    expect(coins(6)).to.eql(2);
  });

  it('10', function () {
    expect(coins(10)).to.eql(4);
  });
});