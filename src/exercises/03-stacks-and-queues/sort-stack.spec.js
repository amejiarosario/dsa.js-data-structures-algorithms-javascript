const expect = require('chai').expect;
const sort = require('./sort-stack').sort;
const Stack = require('./stack');

describe('Stacks: Sort Stack', function () {
  var stack;

  beforeEach(function () {
    stack = new Stack();
  });

  it('should handle 0 element', function () {
    expect(sort(stack)).to.equal(undefined);
  });

  it('should return 1 element', function () {
    stack.push(1);
    expect(sort(stack).list.toString()).to.equal('1');
  });

  it('should sort already ordered elements', function () {
    stack.push(1);
    stack.push(2);
    expect(sort(stack).list.toString()).to.equal('1 -> 2');
  });

  it('should sort not ordered elements', function () {
    stack.push(2);
    stack.push(1);
    expect(sort(stack).list.toString()).to.equal('1 -> 2');
  });

});