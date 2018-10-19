const expect = require('chai').expect;
const permutations = require('./permutations');

describe('permutations', function() {
  it('empty', function () {
    expect(permutations()).to.eql(['']);
  });

  it('1', function () {
    expect(permutations('a')).to.eql(['a']);
  });

  it('2', function () {
    expect(permutations('ab')).to.eql(['ab', 'ba']);
  });

  it('3', function () {
    expect(permutations('abc')).to.eql(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });

  it('4', function () {
    expect(permutations('abcd')).to.eql([
      "abcd",
      "abdc",
      "acbd",
      "acdb",
      "adbc",
      "adcb",
      "bacd",
      "badc",
      "bcad",
      "bcda",
      "bdac",
      "bdca",
      "cabd",
      "cadb",
      "cbad",
      "cbda",
      "cdab",
      "cdba",
      "dabc",
      "dacb",
      "dbac",
      "dbca",
      "dcab",
      "dcba"
    ]);
  });

  it('5', function () {
    expect(permutations('abcde').length).to.eql(120);
  });


  it('9', function () {
    expect(permutations('abcdefghi').length).to.eql(362880);
  });

  it('10', function () {
    expect(permutations('abcdefghij').length).to.eql(3628800);
  }).timeout(30e3);
});