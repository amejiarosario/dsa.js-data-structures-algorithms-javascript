const expect = require('chai').expect;
const binaryToString = require('./02-binary-to-string');

describe('Bit Manipulation: binaryToString', function() {
  it('should convert 10 to binary', function() {
    expect(binaryToString(10)).to.equal('1010');
  });

  it('should convert 7 to binary', function() {
    expect(binaryToString(7)).to.equal('111');
  });

  it('should convert 0 to binary', function() {
    expect(binaryToString(0)).to.equal('0');
  });

  it('should convert 0.5 to binary', function() {
    expect(binaryToString(0.5)).to.equal('0.1');
  });

  it('should convert 0.5625 to binary', function() {
    expect(binaryToString(0.5625)).to.equal('0.1001');
  });

  it('should convert 0.72 to binary', function() {
    expect(() => binaryToString(0.72)).to.throw(Error);
    expect(() => binaryToString(0.5)).to.not.throw(Error);
  });
});