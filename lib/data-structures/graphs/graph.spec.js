const Graph = require('./graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  xdescribe('#addVertex', () => {
    it('should add vertex to graph', () => {
      graph.addVertex()
    });
  });
});