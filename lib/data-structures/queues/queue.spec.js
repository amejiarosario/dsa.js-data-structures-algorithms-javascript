const Queue = require('./queue-1.js');

describe('Queue', function () {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('#add', () => {
    it('should push an element to the queue', () => {
      queue.add(1);
      expect(queue.input).toEqual([1]);
    });
  });

  describe('#remove', () => {
    beforeEach(() => {
      queue.add('a');
      queue.add('b');
    });

    it('should get last element entered', () => {
      expect(queue.remove()).toEqual('a');
      expect(queue.remove()).toEqual('b');
    });

    it('should keep the order after some addition', () => {
      expect(queue.remove()).toEqual('a');
      queue.add('c');
      expect(queue.remove()).toEqual('b');
      expect(queue.remove()).toEqual('c');
      expect(queue.remove()).toBe(undefined);
    })
  });
});