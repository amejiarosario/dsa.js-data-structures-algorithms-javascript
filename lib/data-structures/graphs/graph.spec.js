const Graph = require('./graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('#addVertex', () => {
    it('should add vertex to graph', () => {
      const node = graph.addVertex('a');
      expect(node.value).toBe('a');
      expect(graph.nodes.size).toBe(1);
    });

    it('should not add duplicated values', () => {
      const node1 = graph.addVertex('a');
      const node2 = graph.addVertex('a');
      expect(graph.nodes.size).toBe(1);
      expect(node1).toBe(node2);
    });
  });

  describe('#removeVertex', () => {
    beforeEach(() => {
      graph.addVertex('a');
    });

    it('should remove vertex', () => {
      expect(graph.removeVertex('a')).toBe(true);
      expect(graph.nodes.size).toBe(0);
      expect(graph.removeVertex('a')).toBe(false);
    });
  });

  describe('#addEdge', () => {
    it('should create node if they dont exist', () => {
      graph.addEdge('a', 'b');
      expect(graph.nodes.size).toBe(2);
    });

    it('should add node a as adjacent of b', () => {
      const [a, b] = graph.addEdge('a', 'b');
      expect(a.adjacents.map(n => n.value)).toEqual(['b']);
      expect(b.adjacents.map(n => n.value)).toEqual([]);

      graph.addEdge('b', 'a');
      expect(b.adjacents.map(n => n.value)).toEqual(['a']);
    });

    it('should add both connection on undirected graph', () => {
      graph = new Graph(Graph.UNDIRECTED);
      const [a, b] = graph.addEdge('a', 'b');
      expect(a.adjacents.map(n => n.value)).toEqual(['b']);
      expect(b.adjacents.map(n => n.value)).toEqual(['a']);
    });

    it('should add falsy values', () => {
      const [first, second] = graph.addEdge(0, false);
      expect(first.value).toBe(0);
      expect(second.value).toBe(false);
    })
  });

  describe('#removeEdge', () => {
    beforeEach(() => {
      graph.addEdge('a', 'b');
    });

    it('should remove edges if they exist', () => {
      const [a, b] = graph.removeEdge('a', 'b');
      expect(a.adjacents.map(n => n.value)).toEqual([]);
      expect(b.adjacents.map(n => n.value)).toEqual([]);
    });

    it('should remove edges with falsy values', () => {
      const [a, b] = graph.addEdge(0, false);
      expect(a.adjacents.map(n => n.value)).toEqual([false]);
      graph.removeEdge(0, false);
      expect(a.adjacents.map(n => n.value)).toEqual([]);
    });

    it('should not create node when removing unexisting target', () => {
      const [a, c] = graph.removeEdge('a', 'c');
      expect(graph.nodes.size).toBe(2);
      expect(a.adjacents.map(n => n.value)).toEqual(['b']);
      expect(c).toBe(undefined);
    });

    it('should not create node when removing unexisting nodes', () => {
      const [d, c] = graph.removeEdge('d', 'c');
      expect(graph.nodes.size).toBe(2);
      expect(c).toBe(undefined);
      expect(d).toBe(undefined);
    });
  });

  describe('#dfs', () => {
    let first;

    beforeEach(() => {
      const [a] = graph.addEdge(0, 1);
      first = a;
      graph.addEdge(0, 4);
      graph.addEdge(0, 5);

      graph.addEdge(1, 3);
      graph.addEdge(1, 4);

      graph.addEdge(2, 1);

      graph.addEdge(3, 2);
      graph.addEdge(3, 4);
    });

    it('should visit nodes using depth-first search', () => {
      const visitedOrder = Array.from(graph.dfs(first)).map(v => v.value);
      // expect(visitedOrder).toEqual([0, 1, 3, 2, 4, 5]);
      expect(visitedOrder).toEqual([0, 5, 4, 1, 3, 2]);
    });
  });
});