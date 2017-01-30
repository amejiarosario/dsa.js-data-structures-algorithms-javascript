const expect = require('chai').expect;
const Graph = require('./graph').Graph;
const getFirstCommonAncestor = require('./first-common-ancestor');

describe('Graph: First Common Ancestor', function () {
  let graph;

  beforeEach(function () {
    graph = new Graph();

    graph.add(0, 1);
    graph.add(0, 2);

    graph.add(1, 3);
    graph.add(1, 4);

    graph.add(2, 5);
    graph.add(2, 6);

    graph.add(3, 7);
    graph.add(3, 8);

    graph.add(9, 10);

    graph.add(4, 11);
  });

  it('both nodes are on the tree', function () {
    expect(getFirstCommonAncestor(graph, 1, 2).data).to.equal(0);
  });

  it('one or both nodes are not in the tree', function () {
    expect(getFirstCommonAncestor(graph, 1, 10)).to.equal(undefined);
  });

  it('one node is the ancestor of the other', function () {
    expect(getFirstCommonAncestor(graph, 1, 3).data).to.equal(1);
  });

  it('should find common ancestor to itself', function () {
    expect(getFirstCommonAncestor(graph, 0, 0).data).to.equal(0);
  });

  it('should find common ancestor when 4 is a child of 1', function () {
    expect(getFirstCommonAncestor(graph, 1, 4).data).to.equal(1);
  });

  it('should find common ancestor on level 2', function () {
    expect(getFirstCommonAncestor(graph, 3, 4).data).to.equal(1);
  });

  it('should find common ancestor on different levels', function () {
    expect(getFirstCommonAncestor(graph, 7, 4).data).to.equal(1);
  });

  it('should find common ancestor on different levels and branches', function () {
    expect(getFirstCommonAncestor(graph, 7, 6).data).to.equal(0);
  });

  it('should find common ancestor on different levels and branches', function () {
    expect(getFirstCommonAncestor(graph, 8, 11).data).to.equal(1);
  });

  it('should not find common ancestor', function () {
    expect(getFirstCommonAncestor(graph, 7, 9)).to.equal(undefined);
  });
});