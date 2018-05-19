const LinkedList = require('./linked-list');

describe('LinkedList', function () {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('#addLast', () => {
    it('should add element to end/tail of the list', () => {
      linkedList.addLast('a');
      expect(linkedList.first.value).toBe('a');
      expect(linkedList.last.value).toBe('a');
    });

    it('should link values', () => {
      linkedList.addLast('a');
      linkedList.addLast('b');
      linkedList.addLast('c');

      expect(linkedList.last.value).toBe('c');
      expect(linkedList.first.value).toBe('a');
      expect(linkedList.first.next.value).toBe('b');
      expect(linkedList.first.next.next.value).toBe('c');
    });
  });

  describe('#removeFirst', () => {
    beforeEach(() => {
      linkedList.addLast('a');
      linkedList.addLast('b');
    });

    it('should remove first item: a', () => {
      expect(linkedList.removeFirst()).toBe('a');
      expect(linkedList.first.value).toBe('b');
      expect(linkedList.first.next).toBe(null);

      expect(linkedList.last.value).toBe('b');

      expect(linkedList.removeFirst()).toBe('b');
      expect(linkedList.removeFirst()).toBe(undefined);
      // expect(linkedList.removeFirst()).toBe(undefined);

      expect(linkedList.first).toBe(null);
      expect(linkedList.last).toBe(null);
    });
  });

  describe('#addFirst', () => {
    it('add element to the head/root of the list', () => {
      linkedList.addFirst('a');
      expect(linkedList.first.value).toBe('a');
      expect(linkedList.last.value).toBe('a');
    });

    it('add element to the head/root of the list', () => {
      linkedList.addFirst('a');
      linkedList.addFirst('b');
      expect(linkedList.first.value).toBe('b');
      expect(linkedList.first.next.value).toBe('a');

      expect(linkedList.last.value).toBe('a');
    });
  });

  describe('#removeLast', () => {
    beforeEach(() => {
      linkedList.addLast('a');
      linkedList.addLast('b');
      linkedList.addLast('c');
    });

    it('should remove first item', () => {
      expect(linkedList.removeLast()).toBe('c');
      expect(linkedList.last.value).toBe('b');

      expect(linkedList.removeLast()).toBe('b');
      expect(linkedList.last.value).toBe('a');
      expect(linkedList.first.value).toBe('a');
      expect(linkedList.first.next).toBe(null);

      expect(linkedList.removeLast()).toBe('a');
      expect(linkedList.removeLast()).toBe(undefined);
      // expect(linkedList.removeLast()).toBe(undefined);

      expect(linkedList.first).toBe(null);
      expect(linkedList.last).toBe(null);
    });
  });

  describe('Doubly Linked List and aliases', () => {

    describe('#addLast', () => {
      beforeEach(() => {
        linkedList.addLast('a');
        linkedList.addLast('b');
        linkedList.addLast('c');
        linkedList.addLast('d');
      });

      it('should have a reference to previous node on the last element', () => {
        // expect(linkedList.last.value).toBe('d');
        expect(linkedList.last.previous.value).toBe('c');
        expect(linkedList.size).toBe(4);
      });

      it('should have a reference to previous node on the first element', () => {
        expect(linkedList.first.previous).toBe(null);
      });

      it('should have a reference to previous node on the 2nd element', () => {
        // expect(linkedList.first.next.value).toBe('b');
        expect(linkedList.first.next.previous.value).toBe('a');
      });
    });

    describe('#removeFirst', () => {
      beforeEach(() => {
        linkedList.addLast('a');
        linkedList.addLast('b');
        linkedList.addLast('c');
        linkedList.addLast('d');

        linkedList.removeFirst();
      });

      it('should update reference when removing first', () => {
        // b -> c -> d
        expect(linkedList.first.next.previous.value).toBe('b');
        // expect(linkedList.first.value).toBe('b');
        expect(linkedList.first.previous).toBe(null);
        expect(linkedList.size).toBe(3);
      });

      it('should keep previous updated when deleting everything', () => {
        linkedList.removeFirst();
        expect(linkedList.size).toBe(2);
        // c -> d
        // expect(linkedList.first.value).toBe('c');
        expect(linkedList.first.previous).toBe(null);
        expect(linkedList.first.next.previous.value).toBe('c');

        linkedList.removeFirst();
        // d
        expect(linkedList.first.value).toBe('d');
        expect(linkedList.first.previous).toBe(null);
        expect(linkedList.first.next).toBe(null);

        linkedList.removeFirst();
        expect(linkedList.first).toBe(null);

        linkedList.removeFirst();
        expect(linkedList.size).toBe(0);
      });
    });

    describe('#addFirst', () => {
      beforeEach(() => {
        linkedList.addFirst('b');
        linkedList.addFirst('a');
      });

      it('should have a previous reference', () => {
        expect(linkedList.last.value).toBe('b');
        expect(linkedList.last.previous.value).toBe('a');
        expect(linkedList.first.previous).toBe(null);
        expect(linkedList.size).toBe(2);
      });
    });

    describe('#removeLast (and aliases)', () => {
      beforeEach(() => {
        // a -> b -> c
        linkedList.push('b');
        linkedList.unshift('a');
        linkedList.add('c');
      });

      it('should do nothing with previous', () => {
        expect(linkedList.size).toBe(3);
        expect(linkedList.removeLast()).toBe('c');
        expect(linkedList.pop()).toBe('b');
        expect(linkedList.remove()).toBe('a');
        expect(linkedList.shift()).toBe(undefined);
        linkedList.removeLast();
        expect(linkedList.size).toBe(0);
      });
    });
  });
});