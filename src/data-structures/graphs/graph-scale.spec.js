const Graph = require('./graph');

xdescribe('Graph (social network)', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph(Graph.UNDIRECTED);

    graph.addEdge('You', 'James');
    graph.addEdge('James', 'Michael');
    graph.addEdge('James', 'William');
    graph.addEdge('You', 'John');
    graph.addEdge('John', 'Linda');
    graph.addEdge('Linda', 'Elizabeth');
    graph.addEdge('You', 'Robert');
    graph.addEdge('You', 'Mary');
    graph.addEdge('You', 'Patricia');
    graph.addEdge('You', 'Jennifer');
    graph.addEdge('You', 'Larry');
    graph.addEdge('You', 'Eric');
    graph.addEdge('David', 'Barbara');
    graph.addEdge('Richard', 'Susan');
    graph.addEdge('Joseph', 'Jessica');
    graph.addEdge('Susan', 'Joseph');
    graph.addEdge('Mark', 'Jan');
    graph.addEdge('Mark', 'David');
    graph.addEdge('Mark', 'Dustin');
    graph.addEdge('Mark', 'Owen');
    graph.addEdge('Mark', 'Pricilla');
    graph.addEdge('Mark', 'Andrew');
    graph.addEdge('Mark', 'Adam');
    graph.addEdge('Pricilla', 'Richard');
    graph.addEdge('Jessica', 'Elizabeth');
    graph.addEdge('Mary', 'Barbara');
    graph.addEdge('William', 'Jan');
    graph.addEdge('Joseph', 'Robert');
    graph.addEdge('Dustin', 'Michael');
    graph.addEdge('Andrew', 'William');
    graph.addEdge('Jessica', 'John');
    graph.addEdge('Adam', 'Susan');
    graph.addEdge('William', 'Barbara');
    graph.addEdge('Joseph', 'Patricia');
    graph.addEdge('Joseph', 'Michael');
    graph.addEdge('Elizabeth', 'Adam');
    graph.addEdge('Jan', 'Elizabeth');
    graph.addEdge('Richard', 'Joseph');
  });

  it('should return all paths connecting you and mark', () => {
    expect(graph.findPath('You', 'Mark')).toEqual([]);
  });
});
