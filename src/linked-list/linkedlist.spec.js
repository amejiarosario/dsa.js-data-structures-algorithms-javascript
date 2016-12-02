const assert = require('assert');
const LinkedList = require('./linkedlist');

describe('LinkedList', function () {
  describe('.addLast', function () {
    it('should add elements to the tail', function () {
      const list = new LinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);

      expect(list.toString()).toEqual('1 -> 2 -> 3 -> 4');
    });
  });
});