const expect = require('chai').expect;
const bm = require('./00-bit-manipulation');

describe('Bit Manipulation', function() {
  describe('Get Bit', function () {
    it('should get the first bit when 0', function () {
      expect(bm.getBit(0b1010, 0).toString(2)).to.equal((0).toString(2));
    });

    it('should get the first bit when 1', function () {
      expect(bm.getBit(0b1011, 0).toString(2)).to.equal((1).toString(2));
    });

    it('should get the last bit when 0', function () {
      expect(bm.getBit(0b0011, 3).toString(2)).to.equal((0).toString(2));
    });

    it('should get the last bit when 1', function () {
      expect(bm.getBit(0b1010, 3).toString(2)).to.equal((1).toString(2));
    });
  });

  describe('Set Bit', function () {
    it('should set the first bit when 0', function () {
      expect(bm.setBit(0b1010, 0).toString(2)).to.equal((0b1011).toString(2));
    });

    it('should set the first bit when 1', function () {
      expect(bm.setBit(0b1011, 0).toString(2)).to.equal((0b1011).toString(2));
    });

    it('should set the last bit when 0', function () {
      expect(bm.setBit(0b0011, 3).toString(2)).to.equal((0b1011).toString(2));
    });

    it('should set the last bit when 1', function () {
      expect(bm.setBit(0b1010, 3).toString(2)).to.equal((0b1010).toString(2));
    });
  });

  describe('Clear Bit', function () {
    it('should set the first bit when 0', function () {
      expect(bm.clearBit(0b1010, 0).toString(2)).to.equal((0b1010).toString(2));
    });

    it('should set the first bit when 1', function () {
      expect(bm.clearBit(0b1011, 0).toString(2)).to.equal((0b1010).toString(2));
    });

    it('should set the last bit when 0', function () {
      expect(bm.clearBit(0b0011, 3).toString(2)).to.equal((0b0011).toString(2));
    });

    it('should set the last bit when 1', function () {
      expect(bm.clearBit(0b1010, 3).toString(2)).to.equal((0b0010).toString(2));
    });
  });

  describe('Update Bit', function () {
    it('should set the first bit when 0', function () {
      expect(bm.updateBit(0b1010, 0, 0).toString(2)).to.equal((0b1010).toString(2));
      expect(bm.updateBit(0b1010, 0, 1).toString(2)).to.equal((0b1011).toString(2));
    });

    it('should set the first bit when 1', function () {
      expect(bm.updateBit(0b1011, 0, 0).toString(2)).to.equal((0b1010).toString(2));
      expect(bm.updateBit(0b1011, 0, 1).toString(2)).to.equal((0b1011).toString(2));
    });

    it('should set the last bit when 0', function () {
      expect(bm.updateBit(0b0011, 3, 0).toString(2)).to.equal((0b0011).toString(2));
      expect(bm.updateBit(0b0011, 3, 1).toString(2)).to.equal((0b1011).toString(2));
    });

    it('should set the last bit when 1', function () {
      expect(bm.updateBit(0b1010, 3, 0).toString(2)).to.equal((0b0010).toString(2));
      expect(bm.updateBit(0b1010, 3, 1).toString(2)).to.equal((0b1010).toString(2));
    });
  });
});