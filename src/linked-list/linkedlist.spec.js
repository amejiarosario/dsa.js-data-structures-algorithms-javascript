const LinkedList = require('./linkedlist');

describe('LinkedList', function () {

  describe('.addLast', function () {

    it('should add elements to the tail and count size', function () {
      const list = new LinkedList();
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      list.addLast(4);

      expect(list.toString()).toEqual('1 -> 2 -> 3 -> 4');
      expect(list.size()).toBe(4);
    });

    it('should add elements to the head and count size', function () {
      const list = new LinkedList();
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      list.addFirst(4);

      expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1');
      expect(list.size()).toBe(4);
    })
  });
});