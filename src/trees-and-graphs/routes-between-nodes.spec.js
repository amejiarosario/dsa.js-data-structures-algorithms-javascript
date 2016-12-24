const expect = require('chai').expect;
const Graph = require('./routes-between-nodes');

describe('Graph: is connected', function () {
  let graph;

  beforeEach(function () {
    graph = new Graph();
  });

  describe('.isConnected', function () {
    it('should return true if connected', function () {
      graph.add(0, 1);
      graph.add(1, 2);
      expect(graph.isConnected(0, 2)).to.equal(true);
    });

    it('should return false if connected', function () {
      graph.add(0, 1);
      graph.add(2, 3);
      expect(graph.isConnected(0, 3)).to.equal(false);
    });
  });
});