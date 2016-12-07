const expect = require('chai').expect;
const LinkedList = require('./linkedlist');

describe('LinkedList', function () {
  let list;

  describe('.addLast', function () {
    beforeEach(function () {
      list = new LinkedList();
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
  });

  describe('.addFirst', function () {
    beforeEach(function () {
      list = new LinkedList();
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