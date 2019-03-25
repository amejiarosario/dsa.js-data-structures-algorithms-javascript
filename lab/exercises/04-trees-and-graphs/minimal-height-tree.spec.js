const expect = require('chai').expect;
const minimalHeightTree = require('./minimal-height-tree');

describe('Trees: minimal height', function () {

  describe('minimalHeightTree', function () {
    it('creates tree with 1 element', function () {
      const array = [1];
      expect(minimalHeightTree(array).toArray()).to.eql([1]);
    });

    it('creates binary tree 2 elements', function () {
      const array = [1, 2];
      expect(minimalHeightTree(array).toArray()).to.eql([2, 1]);
    });

    it('keeps tree balanced with ascending array', function () {
      const array = [1, 2, 3];
      expect(minimalHeightTree(array).toArray()).to.eql([2, 1, 3]);
    });

    it('keeps tree balanced with ascending array with 4 element', function () {
      const array = [1, 2, 3, 4];
      expect(minimalHeightTree(array).toArray()).to.eql([3, 2, 4, 1]);
    });

    it('keeps tree balanced with ascending array with 5 element', function () {
      const array = [1, 2, 3, 4, 5];
      expect(minimalHeightTree(array).toArray()).to.eql([4, 3, 5, 1, 2]);
    });

    it('keeps tree balanced with ascending array with 6 element', function () {
      const array = [1, 2, 3, 4, 5, 6];
      expect(minimalHeightTree(array).toArray()).to.eql([4, 3, 6, 1, 3, 5]);
    });

    it('keeps tree balanced with ascending array with 7 element', function () {
      const array = [1, 2, 3, 4, 5, 6, 7];
      expect(minimalHeightTree(array).toArray()).to.eql([5, 2, 6, 1, 3, 4, 7]);
    });
  });
});