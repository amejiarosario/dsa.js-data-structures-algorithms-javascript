const Stack = require('./stack.js');

describe('Stack', function () {
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
});