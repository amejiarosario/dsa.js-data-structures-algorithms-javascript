const expect = require('chai').expect;
const LinkedList = require('./linkedlist');

describe('LinkedList', function () {
  let list;

  beforeEach(function () {
    list = new LinkedList();
  });

  describe('.addLast', function () {
    beforeEach(function () {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      list.addLast(4);
    });

    it('should add elements to the tail and count size', function () {
      expect(list.toString()).to.equal('1 -> 2 -> 3 -> 4');
    });

    it('should have a size of 4', function () {
      expect(list.size()).to.equal(4);
    });

    it('should add nodes and update the tail and size', function () {
      const list2 = new LinkedList();
      const a = list2.addLast('a');
      list2.addLast('b');
      const c = list2.addLast('c');

      list.addLast(a);

      expect(list.toString()).to.equal('1 -> 2 -> 3 -> 4 -> a -> b -> c');
      expect(list.size()).to.equal(7);
      expect(list.tail).to.equal(c);
    });
  });

  describe('.addFirst', function () {
    beforeEach(function () {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      list.addFirst(4);
    });

    it('should add elements to the tail and count size', function () {
      expect(list.toString()).to.equal('4 -> 3 -> 2 -> 1');
    });

    it('should have a size of 4', function () {
      expect(list.size()).to.equal(4);
    });
  });

  describe('.add (addFirst)', function () {
    beforeEach(function () {
      list = new LinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
    });

    it('should add elements to the tail and count size', function () {
      expect(list.toString()).to.equal('4 -> 3 -> 2 -> 1');
    });

    it('should have a size of 4', function () {
      expect(list.size()).to.equal(4);
    });
  });

  describe('.removeLast', function () {
    it('should handle empty', function () {
      expect(list.removeLast()).to.equal(undefined);
    });

    it('should remove item', function () {
      list.add(1);
      expect(list.removeLast()).to.equal(1);
    });

    it('should remove multiple items', function () {
      list.addLast(1);
      list.addLast(2);

      expect(list.removeLast()).to.equal(2);
      expect(list.tail.data).to.equal(1);
      expect(list.head.data).to.equal(1);
      expect(list.size()).to.equal(1);

      expect(list.removeLast()).to.equal(1);
      expect(list.tail).to.equal(null);
      expect(list.head).to.equal(null);
      expect(list.size()).to.equal(0);
    });
  });

  describe('.delete', function () {
    beforeEach(function () {
      list = new LinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
    });

    it('should start with size of 3 after deleting one', function () {
      list.delete(4);
      expect(list.size()).to.equal(3);
    });

    it('should have a size of 4', function () {
      list.delete(4);
      list.delete(2);
      list.delete(1);
      list.delete(3);
      expect(list.size()).to.equal(0);
    });

    it('should not change if element not found', function () {
      list.delete(7);
      expect(list.size()).to.equal(4);
    });
  });

});