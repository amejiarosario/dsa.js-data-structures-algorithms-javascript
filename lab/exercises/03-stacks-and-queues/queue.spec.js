const expect = require('chai').expect;
const Queue = require('./queue');

describe('Queue', function () {
  let queue;

  beforeEach(function () {
    queue = new Queue();
  });

  describe('.add', function () {
    it('should enqueue an element', function () {
      queue.add(1);
      expect(queue.list.toString()).to.equal('1');
    });
  });

  describe('.isEmpty', function () {
    it('should be true', function () {
      expect(queue.isEmpty()).to.equal(true);
    });

    it('should be false', function () {
      queue.add(1);
      expect(queue.isEmpty()).to.equal(false);
    });
  });

  describe('.remove', function () {
    it('should nothing', function () {
      expect(queue.remove()).to.equal(undefined);
    });

    it('should remove element', function () {
      queue.add(1);
      expect(queue.remove()).to.equal(1);
    });

    it('should remove element on FIFO order', function () {
      queue.add(1);
      queue.add(2);
      expect(queue.remove()).to.equal(1);
      expect(queue.remove()).to.equal(2);
    });
  });

  describe('.peek', function () {
    it('should return undefined when empty', function () {
      expect(queue.peek()).to.equal(undefined);
    });

    it('should return first in the queue', function () {
      queue.add(1);
      queue.add(2);
      expect(queue.peek()).to.equal(1);
    });
  });

  describe('remove by query', function () {
    let dog, cat, cat2, dog2;
    beforeEach(function () {
      dog = {animal: 'dog', name: 'Lassie'};
      dog2 = {animal: 'dog', name: 'Snoopy'};
      cat  = {animal: 'cat', name: 'Tom'};
      cat2  = {animal: 'cat', name: 'Garfield'};

      queue.add(dog);
      queue.add(dog2);
      queue.add(cat);
      queue.add(cat2);
    });

    it('should remove first matching', function () {
      expect(queue.removeBy({animal: 'cat'})).to.equal(cat);
      expect(queue.list.toString('name')).to.equal('Lassie -> Snoopy -> Garfield');
    });
  });

});