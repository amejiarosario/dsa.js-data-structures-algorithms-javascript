const { Queue } = require('../../index');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('#add', () => {
    it('should push an element to the queue', () => {
      expect(queue.size).toEqual(0);
      queue.add(1);
      expect(queue.size).toEqual(1);
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
      expect(queue.remove()).toBe(null);
    });
  });

  describe('#isEmpty', () => {
    it('should return true when empty', () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it('should return false when not empty', () => {
      queue.add('a');
      // expect(queue.size).toBe(1);
      expect(queue.isEmpty()).toBe(false);
    });
  });
});
