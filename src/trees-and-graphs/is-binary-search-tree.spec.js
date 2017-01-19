const expect = require('chai').expect;
const Node = require('./graph').Node;
const isBinarySearchTree = require('./is-binary-search-tree');

describe('Tree: is binary tree search', function () {

  it('should work with valid data', function () {
    let bt = new Node(4);
    bt.left = new Node(2);
    bt.right = new Node(5);
    expect(isBinarySearchTree(bt)).to.equal(true);
  });

  it('should false with left > parent', function () {
    let bt = new Node(4);
    bt.left = new Node(6);
    bt.right = new Node(5);
    expect(isBinarySearchTree(bt)).to.equal(false);
  });

  it('should false with parent > right', function () {
    let bt = new Node(4);
    bt.left = new Node(2);
    bt.right = new Node(3);
    expect(isBinarySearchTree(bt)).to.equal(false);
  });

  it('should work with valid data', function () {
    let
      a = new Node('a'),
      b = new Node('b'),
      c = new Node('c'),
      d = new Node('d'),
      e = new Node('e'),
      f = new Node('f'),
      g = new Node('g');

    d.left = c;
    c.left = b;

    d.right = e;
    e.right = f;
    f.right = g;

    expect(isBinarySearchTree(d)).to.equal(true);
  });

  it('should return false when the left child is bigger than root', function () {
    let
      n10 = new Node(10),
      n20 = new Node(20),
      n25 = new Node(25),
      n30 = new Node(30);

    n20.left = n10;
    n20.right = n30;

    n10.right = n25;

    expect(isBinarySearchTree(n20)).to.equal(false);
  });

});