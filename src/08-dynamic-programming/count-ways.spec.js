const expect = require('chai').expect;
const countWays = require('./count-ways');

describe('countWays', function() {
  it('1 stair', function () {
    expect(countWays(1)).to.equal(1);
  });

  it('2 stairs', function () {
    expect(countWays(2)).to.equal(2);
  });

  it('3 stairs', function () {
    expect(countWays(3)).to.equal(4);
    // 111
    // 12
    // 21
    // 3
  });

  it('10 stairs', function () {
    expect(countWays(10)).to.equal(274);
  });

  xit('100 stairs', function () {
    expect(countWays(100)).to.equal(3);
  });

  xit('1000 stairs', function () {
    expect(countWays(100)).to.equal(3);
  });
});
