const expect = require('chai').expect;
const SetOfStacks = require('./set-of-stacks');

describe('Stacks: SetOfStacks', function () {
  let stack;

  beforeEach(function () {
    stack = new SetOfStacks(2);
  });

  describe('.push', function () {
    it('should hold an element', function () {
      stack.push(1);
      expect(stack.sets[0][0]).to.equal(1);
    });

    it('should store overflowed elements on the next stack', function () {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.sets[1][0]).to.equal(3);
    });
  });

  describe('.pop', function () {
    it('should handle poping from empty stack', function () {
      expect(stack.pop()).to.equal(undefined);
    });

    it('should pop an element', function () {
      stack.push(1);
      expect(stack.pop()).to.equal(1);
    });

    it('should pop an element from second stack set', function () {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.pop()).to.equal(2);
    });
  });

  describe('.popAt', function () {
    it('should handle empty', function () {
      expect(stack.popAt(1)).to.equal(undefined);
    });

    it('should from first set even when has data on second set', function () {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.popAt(0)).to.equal(2);
      expect(stack.popAt(0)).to.equal(1);
      expect(stack.popAt(0)).to.equal(undefined);
      expect(stack.pop()).to.equal(3);
      expect(stack.pop()).to.equal(undefined);
    });
  });
});
