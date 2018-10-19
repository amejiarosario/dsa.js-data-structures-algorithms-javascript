const expect = require('chai').expect;
const Node = require('./graph').Node;
const Graph = require('./graph').Graph;
const isBalanced = require('./is-balanced');

describe('Graph: is balanced ?', function () {
  let graph;

  beforeEach(function () {
    graph = new Graph();
  });

  it('should return true when is balanced and complete', function () {
    graph.add(0, 1);
    const root = graph.add(0, 2);
    expect(isBalanced(root)).to.equal(true);
  });

  it('should return true when is balanced and not complete', function () {
    const root = graph.add(0, 1);
    graph.add(0, 2);
    graph.add(2, 3);
    expect(isBalanced(root)).to.equal(true);
  });

  it('should return false when is not balanced', function () {
    const root = graph.add(0, 1);
    graph.add(0, 2);
    graph.add(2, 3);
    graph.add(3, 4);
    expect(isBalanced(root)).to.equal(false);
  });
});