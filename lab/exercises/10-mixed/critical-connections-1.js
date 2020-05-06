/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
function criticalConnections(n, connections) {
  const critical = [];
  const graph = buildGraph(n, connections);
  // console.log({graph})

  for (let i = 0; i < connections.length; i++) { // O(|E| * [|V|^3 + |V|^2|E|]) = O(|V|^3|E| + |V|^2|E|^2)
    const link = connections[i];
    if (isLinkCritical(link, graph)) {
      critical.push(link);
    }
  }

  return critical;
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

function isLinkCritical(link, graph) { // DFS: O(|V|^2 * |E|+|V|) = O(|V|^3 + |V|^2|E|)
  for (let i = 0; i < graph.size; i++) {
    for (let j = 0; j < graph.size; j++) {
      if (hasLink([i, j], link)) continue;
      if (!isConnected(i, j, link, graph)) { // DFS: O(|E|+|V|)
        // console.log({i, j, link});
        return true;
      }
    }
  }

  return false;
}

function hasLink(a, b) {
  return (a[0] === b[0] && a[1] === b[1]) || (a[0] === b[1] && a[1] === b[0]);
}

// DFS: O(|E|+|V|)
function isConnected(i, j, ignoreLink, graph, seen = new Set()) {
  if (i === j) return true;
  if (graph.get(i).has(j)) return true;

  for (const adj of graph.get(i)) {
    if (hasLink([i, adj], ignoreLink)) continue;

    if (seen.has(adj)) continue;
    seen.add(adj);

    if (isConnected(adj, j, ignoreLink, graph, seen)) {
      return true;
    }
  }

  return false;
}

module.exports = criticalConnections;
