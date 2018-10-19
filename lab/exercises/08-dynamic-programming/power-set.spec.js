const expect = require('chai').expect;
const getSubsets = require('./power-set');

describe('getSubsets', function() {
  it('1 stair', function () {
    const set = [1, 2, 3];
    expect(getSubsets(set)).to.eql([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3]
    ]);
  });
});