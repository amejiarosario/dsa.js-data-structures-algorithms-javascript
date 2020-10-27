const { findCycleStart, findCycleStartBrute } = require('./linkedlist-find-cycle-start');
const { LinkedList } = require('../../src/index');

[findCycleStart, findCycleStartBrute].forEach((fn) => {
  describe(`findCycleStart: ${fn.name}`, () => {
    it('should work without loop', () => {
      const head = new LinkedList([1, 2, 3]).first;
      expect(fn(head)).toEqual(null);
    });

    it('should work with loop on first', () => {
      const list = new LinkedList([1, 2, 3]);
      const n1 = list.first;
      list.last.next = n1;
      expect(fn(list.first)).toEqual(n1);
    });

    it('should work with loop on second', () => {
      const list = new LinkedList([1, 2, 3]);
      const n2 = list.first.next;
      list.last.next = n2;
      expect(fn(list.first)).toEqual(n2);
    });
  });
});
