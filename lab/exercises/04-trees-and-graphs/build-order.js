const Graph = require('./graph').Graph;

/**
 *
 * 4.7 Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

 EXAMPLE

 Input:
 projects: a, b, c, d, e, f
 dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)

 Output: f, e, a, b, d, c
 *
 * @param projects
 * @param dependencies
 * @returns {Array}
 */
function getBuildOrder(projects, dependencies) {
  const list = [];

  // build graph
  const graph = new Graph();

  projects.forEach(function (project) {
    graph.add(project);
  });

  dependencies.forEach(function ([source, target]) {
    graph.add(source, target);
  });

  // do DFS and unshift elements
  const nodes = graph.getNodes();

  try {
    nodes.forEach(function (node) {
      doDFS(node, list);
    });
  } catch (e) {
    console.log(e.name + ': ' + e.message);
  }

  return list;
}

function doDFS(node, list) {
  if(node.metadata.status === 'VISITED') {
    return;
  } else if(node.metadata.status === 'VISITING') {
    throw new Error('Infinite loop detected');
  }

  node.metadata.status = 'VISITING';
  node.adjacents.forEach(function (adj) {
    doDFS(adj, list);
  });

  node.metadata.status = 'VISITED';
  list.unshift(node.data);
}

//-------- OLD ----------

function getBuildOrder2(projects, dependencies) {
  const graph = new Graph();
  const invGraph = new Graph();
  const result = new Set();

  // add deps
  dependencies.forEach(function (dep) {
    graph.add.apply(graph, dep);
    invGraph.add(dep[1], dep[0]);
  });

  const nodes = Array.from(graph.nodes.keys());

  // add to results projects without dependencies
  projects.forEach(function (project) {
    if(!nodes.includes(project)) {
      result.add(project);
    }
  });

  // start by projects that doesn't depend on any other
  invGraph.nodes.forEach(function (node, value) {
    if(!node.adjacents.length) { // node without incoming edges
      const bfs = graph.bfs(value);
      let next = bfs.next();

      while(!next.done) {
        result.add(next.value.data);
        next = bfs.next();
      }
    }
  });

  return Array.from(result);
}

module.exports = getBuildOrder;