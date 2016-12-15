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
  });

});
