const expect = require('chai').expect;
const Stack = require('./stack');

describe('Stacks: QueueViaStack', function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  describe('.add', function () {
    it('should hold an element', function () {
      stack.push(1);
      expect(stack.list.head.data).to.equal(1);
    });
  });

  describe('.remove', function () {
    it('should handle removing from empty stack', function () {
      expect(stack.pop()).to.equal(undefined);
    });

    it('should remove an element', function () {
      stack.push(1);
      expect(stack.pop()).to.equal(1);
    });

    it('should remove in LIFO', function () {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).to.equal(2);
      expect(stack.pop()).to.equal(1);
    });
  });

  describe('.peek', function () {
    it('should return nill', function () {
      expect(stack.peek()).to.equal(undefined);
    });

    it('should get the last', function () {
      stack.push(1);
      expect(stack.peek()).to.equal(1);
    });
  });

  describe('.isEmpty', function () {
    it('should be true when empty', function () {
      expect(stack.isEmpty()).to.equal(true);
    });

    it('should false when something', function () {
      stack.push(1);
      expect(stack.isEmpty()).to.equal(false);
    });

    it('should has something with falsy values', function () {
      stack.push(false);
      expect(stack.isEmpty()).to.equal(false);
    });
  });

});
