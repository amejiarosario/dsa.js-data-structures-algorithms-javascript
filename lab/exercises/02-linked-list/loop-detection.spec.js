const expect = require('chai').expect;
const LinkedList = require('./loop-detection');

describe('LinkedList: loop detection', function () {
  let list;

  beforeEach(function () {
    list = new LinkedList();
  });

  it('should return false when no loops are detected', function () {
    list.addLast('a');
    list.addLast('b');
    list.addLast('c');
    list.addLast('d');
    list.addLast('e');

    expect(list.getLoop()).to.equal(false);
  });

  it('should detect loop: case 1', function () {
    list.addLast('a');
    const b = list.addLast('b');
    list.addLast(b, true);

    expect(list.getLoop()).to.equal(b);
  });

  it('should detect loop: case 2', function () {
    const a = list.addLast('a');
    list.addLast('b');
    list.addLast('c');
    list.addLast(a, true);

    expect(list.getLoop()).to.equal(a);
  });

  it('should detect loop: case 3', function () {
    list.addLast('a');
    list.addLast('b');
    const c = list.addLast('c');
    list.addLast('d');
    list.addLast('e');
    list.addLast(c, true);

    expect(list.getLoop()).to.equal(c);
  });
});