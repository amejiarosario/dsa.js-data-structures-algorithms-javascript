/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
function criticalConnections(n, connections) {
  const graph = buildGraph(n, connections);
  // console.log({graph})

  return dfs(graph, 0);
}


function buildGraph(n, connections) {
  const graph = [...Array(n).keys()].reduce((map, i) => {
    map.set(i, new Set());
    return map;
  }, new Map());

  connections.forEach(([i, j]) => {
    const iAdj = graph.get(i);
    iAdj.add(j);
    const jAdj = graph.get(j);
    jAdj.add(i);
  });

  return graph;
}

function dfs(graph, current, previous = null, rank = 1, group = []) {
  let criticalLinks = [];
  group[current] = rank;

  for (const adj of graph.get(current)) {
    if (adj === previous) continue;

    if (!group[adj]) { // if not visited (and not in a group yet)
      const links = dfs(graph, adj, current, rank + 1, group);
      if (links.length) {
        criticalLinks = criticalLinks.concat(links);
      }
    }

    group[current] = Math.min(group[current], group[adj]);

    if (group[adj] >= rank + 1) {
      criticalLinks.push([current, adj]);
    }
  }

  return criticalLinks;
}

module.exports = criticalConnections;
