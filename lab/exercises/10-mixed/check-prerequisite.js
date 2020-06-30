const checkIfPrerequisite = function (n, prerequisites, queries) {
  const graph = new Map();

  Array(n).fill(0).forEach((v, i) => graph.set(i, {
    children: [],
    // connected: new Set(),
  }));

  prerequisites.forEach(([u, v]) => {
    graph.get(u).children.push(v);
    // graph.get(u).connected.add(v);
  });


  return queries.map(([u, v]) => isConnected(graph, u, v, new Set(), u));
};

function isConnected(graph, u, v, path = new Set(), p) {
  // console.log({u, v, path}, graph)
  // if (graph.get(u).connected.has(v)) return true;
  // path.forEach(s => graph.get(p).connected.add(s));

  for (const child of graph.get(u).children) {
    if (child === v) return true;
    if (path.has(child)) continue;
    if (isConnected(graph, child, v, path.add(u), p)) return true;
  }

  return false;
}


module.exports = checkIfPrerequisite;
