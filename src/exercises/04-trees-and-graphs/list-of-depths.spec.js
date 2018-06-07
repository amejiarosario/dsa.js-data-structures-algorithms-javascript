const expect = require('chai').expect;
const Node = require('./graph').Node;
const listOfDepths = require('./list-of-depths');

describe('Graph: List of depths', function () {

  it('should work with 0 elements', function () {
    let list = listOfDepths();
    expect(list.length).to.equal(0);
  });


  it('should work with 1 element', function () {
    let tree = new Node('a');
    let list = listOfDepths(tree);
    expect(list.length).to.equal(1);
    expect(list[0].toString()).to.equal('a');
  });

  it('should work with tree depth 2', function () {
    let tree = new Node('a');
    tree.adjacents = [new Node('b'), new Node('c')];

    let list = listOfDepths(tree);
    expect(list.length).to.equal(2);
    expect(list[1].toString()).to.equal('b -> c');
  });

  it('should work with tree depth 3', function () {
    let a = new Node('a'),
      b = new Node('b'),
      c = new Node('c'),
      d = new Node('d'),
      e = new Node('e'),
      f = new Node('f'),
      g = new Node('g');

    b.adjacents = [d, e];
    c.adjacents = [f, g];
    a.adjacents = [b, c];

    let list = listOfDepths(a);
    expect(list.length).to.equal(3);
    expect(list[2].toString()).to.equal('d -> e -> f -> g');
  });
});