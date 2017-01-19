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
      a = new Node(1),
      b = new Node(2),
      c = new Node(3),
      d = new Node(4),
      e = new Node(5),
      f = new Node(6),
      g = new Node(7);

    d.left = c;
    d.right = e;

    c.left = b;

    b.left = a;

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

  it('should return false when a right child is less than root', function () {
    let
      n10 = new Node(10),
      n20 = new Node(20),
      n25 = new Node(25),
      n30 = new Node(30);

    n20.left = n10;
    n20.right = n30;

    n20.left = n25;

    expect(isBinarySearchTree(n20)).to.equal(false);
  });

});