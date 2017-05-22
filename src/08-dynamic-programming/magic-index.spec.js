const expect = require('chai').expect;
const findMagicIndex = require('./magic-index');

describe('findMagicIndex', function() {
  it('all sorted', function () {
    const array = [0, 1, 2, 3, 4, 5, 6, 7];
    expect(findMagicIndex(array)).to.equal(0);
  });

  it('no magic index', function () {
    const array = [10, 100, 240];
    expect(findMagicIndex(array)).to.equal(-1);
  });

  it('values are not distinct', function () {
    // index       0  1  2  3  4
    const array = [1, 2, 3, 3, 5];
    expect(findMagicIndex(array)).to.equal(3);
  });

  it('has negative values', function () {
    // index         0    1   2  3  4  5  6  7  8   9  10
    const array = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
    expect(findMagicIndex(array)).to.equal(7);
  });

  it('should work with 1 element', function () {
    const array = [0];
    expect(findMagicIndex(array)).to.equal(0);
  });

  it('should work with 1 element that is not a magic index', function () {
    const array = [10];
    expect(findMagicIndex(array)).to.equal(-1);
  });

  it('should work with 2 elements', function () {
    const array = [1, 1];
    expect(findMagicIndex(array)).to.equal(1);
  });


  it('should handle null cases', function () {
    expect(findMagicIndex()).to.equal(-1);
  });
});