/**
 * Given a list of router links, find the routers that are critical to maintain communication.
 * A router is considered critical if when they are removed,
 * other routers lose connection to other routers different from the one removed.
 *
 * @param {number} numRouters - The number of routers connected in a data center >= 3.
 * @param {number} numLinks - The number of links.
 * @param {[[number, number]]} links - The pair of routers connected by the link.
 * @return {number[]} - The list of critical routers;
 */
function criticalRouters(numRouters, numLinks, links) {
  const graph = buildGraph(numRouters, links);
  const critical = [];

  // console.log({graph});

  for (let curr = 1; curr <= numRouters; curr++) {
    for (let i = 1; i <= numRouters; i++) {
      for (let j = 1; j <= numRouters; j++) {
        if (curr === i || curr === j || i === j) { continue; }
        if (!isConnected(graph, i, j, curr)) {
          critical.push(curr);
          i++;
          break;
        }
      }
    }
  }

  return critical;
}

function addEdge(graph, from, to) {
  // console.log('addEdge', {graph, from, to});
  const adjacents = graph.get(from);
  adjacents.add(to);
}

function buildGraph(numRouters, links) {
  // console.log('buildGraph', { numRouters, links });
  const graph = new Map();
  const routers = [...Array(numRouters).keys()].map(r => r + 1);
  routers.forEach(r => graph.set(r, new Set()));

  links.forEach(([from, to]) => {
    addEdge(graph, from, to);
    addEdge(graph, to, from);
  });

  return graph;
}

function isConnected(graph, i, j, ignore, visited = new Set()) {
  if (i === ignore || j === ignore) return false;
  if (graph.get(i).has(j)) return true;

  for (const adj of graph.get(i)) {
    if (visited.has(adj)) { continue; }
    visited.add(adj);
    if (isConnected(graph, adj, j, ignore, visited)) {
      return true;
    }
  }

  return false;
}

module.exports = criticalRouters;
