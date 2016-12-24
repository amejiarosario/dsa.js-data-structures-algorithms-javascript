const expect = require('chai').expect;
const Graph = require('./graph');

describe('Graph', function () {
  let graph;

  beforeEach(function () {
    graph = new Graph();
  });

  describe('add', function () {
    it('should add two elements', function () {
      graph.add(0, 1);
      expect(graph.nodes[0]).to.eql([1]);
    });

    it('should allow one element to have two children', function () {
      graph.add(0, 1);
      graph.add(0, 2);
      expect(graph.nodes[0]).to.eql([1, 2]);
    });

    it('should store complex data', function () {
      let a = {a:1};
      let b = {b:2};

      graph.add(a, b);
      expect(graph.nodes[a]).to.eql([b]);
    });
  });

  describe('bfs', function () {
    beforeEach(function () {
      graph.add(0, 1);
      graph.add(0, 2);
      graph.add(1, 3);
    });

    it('should get all adjancent in the first level', function () {
      const bfs = graph.bfs(0);
      expect(bfs.next().value).to.eql([1, 2]);
    });

    it('should get 2nd level adjacents', function () {
      const bfs = graph.bfs(0);
      bfs.next();
      expect(bfs.next().value).to.eql([3]);
      expect(bfs.next().value).to.equal(undefined);
    });
  });
});