const expect = require('chai').expect;
const MultiStack = require('./multi-stack');

describe('Stacks: Multistack', function () {
  var multiStack;

  beforeEach(function () {
    multiStack = new MultiStack(6);
  });

  describe('.push', function () {
    it('should add an element on stack 0', function () {
      multiStack.push(0, 'a');
      expect(multiStack.array).to.eql(['a']);
    });

    it('should add an element on stack 0, 1, 2', function () {
      multiStack.push(0, 'a');
      multiStack.push(1, 'b');
      multiStack.push(2, 'c');

      expect(multiStack.array[0]).to.equal('a');
      expect(multiStack.array[1]).to.be.an('undefined');
      expect(multiStack.array[2]).to.equal('b');
      expect(multiStack.array[3]).to.be.an('undefined');
      expect(multiStack.array[4]).to.equal('c');
    });

    it('should overflow when adding too much elements', function () {
      multiStack.push(0, 'a');
      multiStack.push(0, 'b');
      function overflow() { multiStack.push(0, 'c'); }
      expect(overflow).to.throw(Error);
      expect(overflow).to.throw(/overflow/gi);
    });
  });

  describe('.isEmpty', function () {
    it('should start empty', function () {
      expect(multiStack.isEmpty(1)).to.equal(true);
    });

    it('should not be empty after adding an element', function () {
      multiStack.push(1, 'b');
      expect(multiStack.isEmpty(1)).to.equal(false);
    });
  });

  describe('.getStack', function () {
    it('should throw error if there is no index', function () {
      expect(multiStack.getStack).to.throw(Error);
    });

    it('should throw error if index is 3', function () {
      function actual() { multiStack.getStack(3) }
      expect(actual).to.throw(Error);
    });

    it('should NOT throw error if index is 2', function () {
      function actual() { multiStack.getStack(2) }
      expect(actual).not.to.throw(Error);
    });

    it('should NOT throw error if index is 0', function () {
      function actual() { multiStack.getStack(0) }
      expect(actual).not.to.throw(Error);
    });

    it('should throw error if index is -1', function () {
      function actual() { multiStack.getStack(-1) }
      expect(actual).to.throw(Error);
    });
  });

  describe('.pop', function () {
    it('should pop last element', function () {
      multiStack.push(0, 'a');
      expect(multiStack.pop(0)).to.equal('a');
    });

    it('should return elements on FIFO', function () {
      multiStack.push(0, 'a');
      multiStack.push(0, 'b');
      expect(multiStack.pop(0)).to.equal('b');
      expect(multiStack.pop(0)).to.equal('a');
    });

    it('should not have a negative index on empty', function () {
      expect(multiStack.pop(0)).to.equal(undefined);
      expect(multiStack.getStack(0).current).to.equal(0);
    });

    it('should return undefined when pop more than number of elements', function () {
      multiStack.push(0, 'a');
      expect(multiStack.pop(0)).to.equal('a');
      expect(multiStack.pop(0)).to.equal(undefined);
      expect(multiStack.getStack(0).current).to.equal(0);
    });
  });

  describe('.peek', function () {
    it('should return last element', function () {
      multiStack.push(0, 'a');
      expect(multiStack.peek(0)).to.equal('a');
    });
  });
});