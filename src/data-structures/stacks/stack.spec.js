const Stack = require('./stack.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('#push', () => {
    it('should push an element to the stack', () => {
      expect(stack.size).toEqual(0);
      stack.push(1);
      expect(stack.size).toEqual(1);
    });
  });

  describe('#pop', () => {
    beforeEach(() => {
      stack.push('a');
      stack.push('b');
    });

    it('should get last element entered', () => {
      expect(stack.pop()).toEqual('b');
      expect(stack.pop()).toEqual('a');
      expect(stack.pop()).toEqual(undefined);
    });
  });

  describe('#isEmpty', () => {
    it('should return true when empty', () => {
      // expect(stack.size).toBe(0);
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false when not empty', () => {
      stack.add('a');
      // expect(stack.size).toBe(1);
      expect(stack.isEmpty()).toBe(false);
    });
  });
});
