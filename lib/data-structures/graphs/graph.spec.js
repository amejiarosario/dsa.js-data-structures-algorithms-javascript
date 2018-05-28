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
});