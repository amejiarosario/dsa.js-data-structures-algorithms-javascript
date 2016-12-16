const expect = require('chai').expect;
const QueueViaStack = require('./queue-via-stack');

describe('Stacks: QueueViaStack', function () {
  let queue;

  beforeEach(function () {
    queue = new QueueViaStack();
  });

  describe('.add', function () {
    it('should hold an element', function () {
      queue.add(1);
      expect(queue.stack1.peek()).to.equal(1);
    });
  });

  describe('.remove', function () {
    it('should handle removing from empty queue', function () {
      expect(queue.remove()).to.equal(undefined);
    });

    it('should remove an element', function () {
      queue.add(1);
      expect(queue.remove()).to.equal(1);
    });

    it('should remove elements in FIFO', function () {
      queue.add(1);
      queue.add(2);
      queue.add(3);
      expect(queue.remove()).to.equal(1);
      queue.add(4);
      expect(queue.remove()).to.equal(2);
      expect(queue.remove()).to.equal(3);
      expect(queue.remove()).to.equal(4);
    });
  });

});
