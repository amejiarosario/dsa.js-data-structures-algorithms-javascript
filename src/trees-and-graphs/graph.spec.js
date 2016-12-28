const expect = require('chai').expect;
const Graph = require('./graph').Graph;
const Node = require('./graph').Node;

describe('Graph', function () {
  let graph;

  beforeEach(function () { 
    graph = new Graph();
  });

  describe('add', function () {
    it('should add two elements', function () {
      graph.add(0, 1);

    });

    it('should allow one element to have two children', function () {
      graph.add(0, 1);
      graph.add(0, 2);
      expect(graph.nodes.get(0).adjacents[1].data).to.eql(2);
    });

    it('should store complex data', function () {
      let a = {a:1};
      let b = {b:2};

      graph.add(a, b);
      expect(graph.nodes.get(a).adjacents[0].data).to.eql(b);
    });

    it('should store nodes by reference and keep adjacents', function () {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);

      node1.adjacents.push(node2);

      graph.add(node1, node3);

      expect(graph.nodes.get(node1.data).adjacents).to.eql([node2, node3]);
    });

    it('allows you to shot yourself in the shoe with duplicated adjacents', function () {
      graph.add(0, 1);
      graph.add(0, 1);
      expect(graph.nodes.get(0).adjacents[0].data).to.eql(1);
      expect(graph.nodes.get(0).adjacents[1].data).to.eql(1);
      expect(graph.nodes.get(0).adjacents[2]).to.equal(undefined);
    });
  });

  describe('getNode', function () {
    it('creates new node with new data', function () {
      const node = graph.getNode(1);
      expect(node.data).to.equal(1);
    });

    it('returns existing node with data', function () {
      const node1 = graph.add(1, 2);
      const node = graph.getNode(1);
      expect(node1).to.equal(node);
    });

    it('returns reference', function () {
      const node1 = new Node(1);
      const node2 = new Node(2);
      graph.add(node1, node2);
      expect(graph.getNode(node1)).to.equal(graph.nodes.get(node1.data));
    });
  });

  describe('bfs', function () {
    beforeEach(function () {
      graph.add(0, 1);
      graph.add(0, 2);
      graph.add(1, 3);
    });

    it('should get all adjancents from 0', function () {
      const bfs = graph.bfs(0);
      expect(bfs.next().value).to.eql(0);
      expect(bfs.next().value).to.eql(1);
      expect(bfs.next().value).to.eql(2);
      expect(bfs.next().value).to.eql(3);
    });

    it('should get all adjancents from 1', function () {
      const bfs = graph.bfs(1);
      expect(bfs.next().value).to.eql(1);
      expect(bfs.next().value).to.eql(3);
      expect(bfs.next().done).to.equal(true);
      expect(bfs.next().value).to.equal(undefined);
    });

    it('should recover from cyclic graphs', function () {
      graph.add(3, 0);
      const bfs = graph.bfs(1);
      expect(bfs.next().value).to.eql(1);
      expect(bfs.next().value).to.eql(3);
      expect(bfs.next().value).to.eql(0);
      expect(bfs.next().value).to.eql(2);
      expect(bfs.next().done).to.equal(true);
    });
  });
});