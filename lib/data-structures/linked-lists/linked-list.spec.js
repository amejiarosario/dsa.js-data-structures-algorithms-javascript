const LinkedList = require('./linked-list');

describe('LinkedList', function () {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('#addLast', () => {
    it('should add element to end/tail of the list', () => {
      linkedList.addLast('a');
      expect(linkedList.root.value).toBe('a');
    });

    it('should link values', () => {
      linkedList.addLast('a');
      linkedList.addLast('b');
      linkedList.addLast('c');

      expect(linkedList.root.value).toBe('a');
      expect(linkedList.root.next.value).toBe('b');
      expect(linkedList.root.next.next.value).toBe('c');
    });
  });

  describe('#removeFirst', () => {
    beforeEach(() => {
      linkedList.addLast('a');
      linkedList.addLast('b');
    });

    it('should remove first item: a', () => {
      expect(linkedList.removeFirst()).toBe('a');
      expect(linkedList.root.value).toBe('b');
      expect(linkedList.root.next).toBe(null);

      expect(linkedList.removeFirst()).toBe('b');
      expect(linkedList.removeFirst()).toBe(undefined);
      expect(linkedList.removeFirst()).toBe(undefined);
    });
  });

  describe('#addFirst', () => {
    it('add element to the head/root of the list', () => {
      linkedList.addFirst('a');
      expect(linkedList.root.value).toBe('a');
    });

    it('add element to the head/root of the list', () => {
      linkedList.addFirst('a');
      linkedList.addFirst('b');
      expect(linkedList.root.value).toBe('b');
      expect(linkedList.root.next.value).toBe('a');
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
      expect(linkedList.removeLast()).toBe('b');
      expect(linkedList.root.value).toBe('a');
      expect(linkedList.root.next).toBe(null);

      expect(linkedList.removeLast()).toBe('a');
      expect(linkedList.removeLast()).toBe(undefined);
      expect(linkedList.removeLast()).toBe(undefined);
    });
  });
});