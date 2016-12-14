const expect = require('chai').expect;
const MinStack = require('./min-stack');

describe('Stacks: MinStack', function () {
  var minstack;

  beforeEach(function () {
    minstack = new MinStack();
  });

  describe('.push', function () {
    it('should add an element to stack', function () {
      minstack.push(1);
      expect(minstack.head.data).to.equal(1);
    });

    it('should add multiple elements to stack', function () {
      minstack.push(1);
      minstack.push(2);
      expect(minstack.head.data).to.equal(2);
    });
  });

  describe('.pop', function () {
    it('should take the last element from the list', function () {
      minstack.push(1);
      expect(minstack.pop()).to.equal(1);
    });

    it('should remove element FIFO', function () {
      minstack.push(1);
      minstack.push(2);
      expect(minstack.pop()).to.equal(2);
      expect(minstack.pop()).to.equal(1);
    });
  });

  describe('.min', function () {
    it('should keep track of min', function () {
      minstack.push(1);
      expect(minstack.min()).to.equal(1);
    });

    it('should return min among other nodes', function () {
      minstack.push(10);
      minstack.push(15);
      expect(minstack.min()).to.equal(10);
      minstack.push(1);
      expect(minstack.min()).to.equal(1);
    });

    it('should return 2nd min if the min is removed', function () {
      minstack.push(10);
      minstack.push(1);
      minstack.pop(); // 1
      expect(minstack.min()).to.equal(10);
    });
  });
});