const { LinkedList } = require('../../index');

describe('LinkedList Test', () => {
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
      expect(linkedList.removeFirst()).toBe(null);

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
      expect(linkedList.size).toBe(3);
      expect(linkedList.first.value).toBe('a');
      expect(linkedList.last.value).toBe('c');

      expect(linkedList.removeLast()).toBe('c');
      expect(linkedList.last.value).toBe('b');
      expect(linkedList.first.value).toBe('a');
      expect(linkedList.size).toBe(2);

      expect(linkedList.removeLast()).toBe('b');
      expect(linkedList.last.value).toBe('a');
      expect(linkedList.first.value).toBe('a');
      expect(linkedList.first.next).toBe(null);
      expect(linkedList.size).toBe(1);

      expect(linkedList.removeLast()).toBe('a');
      expect(linkedList.first).toBe(null);
      expect(linkedList.last).toBe(null);
      expect(linkedList.removeLast()).toBe(null);
      expect(linkedList.size).toBe(0);

      expect(linkedList.first).toBe(null);
      expect(linkedList.last).toBe(null);
    });
  });

  describe('with elements', () => {
    beforeEach(() => {
      linkedList.addLast(0);
      linkedList.addLast('found');
    });

    describe('#indexOf', () => {
      it('should find element index', () => {
        expect(linkedList.indexOf(0)).toBe(0);
        expect(linkedList.indexOf('found')).toBe(1);
      });

      it('should return undefined', () => {
        expect(linkedList.indexOf('hola')).toBe(undefined);
      });
    });

    describe('#get', () => {
      it('should get the element at index 1', () => {
        expect(linkedList.get(1).value).toBe('found');
        expect(linkedList.get(0).value).toBe(0);
      });

      it('should return undefined when index is out of bound', () => {
        expect(linkedList.get(1000)).toBe(undefined);
      });
    });

    describe('#remove', () => {
      it('should remove element and return value', () => {
        expect(linkedList.size).toBe(2);
        expect(linkedList.remove(1)).toBe('found');
        expect(linkedList.size).toBe(1);

        expect(linkedList.remove(0)).toBe(0);
        expect(linkedList.size).toBe(0);
      });

      it('should return undefined if not found', () => {
        expect(linkedList.remove(2)).toBe(undefined);
        expect(linkedList.remove(-2)).toBe(undefined);
      });

      it('should update size, last and first', () => {
        expect(linkedList.remove(0)).toBe(0);
        expect(linkedList.size).toBe(1);
        expect(linkedList.remove(0)).toBe('found');
        expect(linkedList.size).toBe(0);
        expect(linkedList.remove(0)).toBe(undefined);
        expect(linkedList.size).toBe(0);
        expect(linkedList.first).toBe(null);
        expect(linkedList.last).toBe(null);
      });
    });

    describe('#addAt', () => {
      it('should insert at the beginning', () => {
        const newNode = linkedList.add('first', 0);
        expect(newNode.value).toBe('first');
        expect(newNode.next.value).toBe(0);
        expect(linkedList.size).toBe(3);
        expect(linkedList.first).toBe(newNode);
      });

      it('should insert at the middle', () => {
        const newNode = linkedList.add('middle', 1);
        expect(newNode.value).toBe('middle');
        // checking the 4 surrounding links were updated
        expect(newNode.next.value).toBe('found');
        expect(newNode.previous.value).toBe(0);
        expect(linkedList.get(0).next.value).toBe('middle');
        expect(linkedList.get(2).previous.value).toBe('middle');

        expect(linkedList.size).toBe(3);
        expect(linkedList.first.value).toBe(0);
      });

      it('should insert at the end', () => {
        const newNode = linkedList.add('end', 2);
        expect(newNode.value).toBe('end');
        expect(newNode.next).toBe(null);
        expect(newNode.previous.value).toBe('found');
        expect(linkedList.size).toBe(3);
        expect(linkedList.last.value).toBe('end');
      });

      it('should not insert out of bound', () => {
        const newNode = linkedList.add('out-of-bound', 3);
        expect(newNode).toBe(undefined);
        expect(linkedList.last.value).toBe('found');
        expect(linkedList.size).toBe(2);
      });
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
        linkedList.addLast('c');
      });

      it('should do nothing with previous', () => {
        expect(linkedList.size).toBe(3);
        expect(linkedList.removeLast()).toBe('c');
        expect(linkedList.pop()).toBe('b');
        expect(linkedList.remove()).toBe('a');
        expect(linkedList.shift()).toBe(null);
        linkedList.removeLast();
        expect(linkedList.size).toBe(0);
      });
    });

    describe('#remove with callback', () => {
      const a = { k: 1, v: 'a' };
      const b = { k: 2, v: 'b' };
      const c = { k: 3, v: 'c' };

      beforeEach(() => {
        // a -> b -> c
        linkedList.push(b);
        linkedList.unshift(a);
        linkedList.addLast(c);
      });

      it('should remove head', () => {
        linkedList.remove((node) => {
          if (node.value.v === 'a') {
            return true;
          }
          return false;
        });
        expect(linkedList.first.value).toMatchObject(b);
        expect(linkedList.first.next.value).toMatchObject(c);
        expect(linkedList.last.value).toMatchObject(c);
        expect(linkedList.size).toBe(2);
      });

      it('should remove middle', () => {
        linkedList.remove((node) => {
          if (node.value.v === 'b') {
            return true;
          }
          return false;
        });
        expect(linkedList.size).toBe(2);
        expect(linkedList.first.value).toMatchObject(a);
        expect(linkedList.first.next.value).toMatchObject(c);
        expect(linkedList.first.previous).toBe(null);
        expect(linkedList.last.value).toMatchObject(c);
        expect(linkedList.last.previous.value).toMatchObject(a);
      });

      it('should remove last', () => {
        linkedList.remove((node) => {
          if (node.value.v === 'c') {
            return true;
          }
          return false;
        });
        expect(linkedList.size).toBe(2);
        expect(linkedList.first.value).toMatchObject(a);
        expect(linkedList.first.next.value).toMatchObject(b);
        expect(linkedList.last.value).toMatchObject(b);
      });

      it('should remove none if not found', () => {
        linkedList.remove((node) => {
          if (node.value.v === 'z') {
            return true;
          }
          return false;
        });
        expect(linkedList.size).toBe(3);
        expect(linkedList.first.value).toMatchObject(a);
        expect(linkedList.first.next.value).toMatchObject(b);
        expect(linkedList.last.value).toMatchObject(c);
      });
    });

    describe('#toString', () => {
      beforeEach(() => {
        linkedList.addLast('a');
        linkedList.addLast(2);
        linkedList.addLast('c');
        linkedList.addLast({ k: 4, v: 'd' });
      });

      it('get string', () => {
        expect(linkedList.toString()).toBe("'a' -> 2 -> 'c' -> { k: 4, v: 'd' }");
      });
    });
  });
});
