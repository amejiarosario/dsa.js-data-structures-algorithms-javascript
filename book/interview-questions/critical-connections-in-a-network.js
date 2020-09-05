const { Queue } = require('../../src/index');

// tag::description[]
function criticalConnections(n, connections) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  const critical = [];
  const graph = new Map(Array(n).fill(0).map((_, i) => [i, []]));
  connections.forEach(([u, v]) => {
    graph.get(u).push(v);
    graph.get(v).push(u);
  });

  const dfs = (node, parent = null, depth = 0, group = []) => {
    group[node] = depth;
    for (const adj of (graph.get(node) || [])) {
      if (adj === parent) continue; // skip parent node
      if (group[adj] === undefined) dfs(adj, node, depth + 1, group);
      group[node] = Math.min(group[node], group[adj]); // update group.
      if (group[adj] >= depth + 1) critical.push([node, adj]);
    }
  };

  dfs(0);
  return critical;
  // end::solution[]
  // tag::description[]
}
// end::description[]

// tag::criticalConnectionsBrute1[]
function areAllNodesReachable(n, graph) {
  const seen = Array(n).fill(false);
  const queue = new Queue([0]);

  while (queue.size) {
    const node = queue.dequeue();
    if (seen[node]) continue;
    seen[node] = true;

    for (const adj of (graph.get(node) || [])) {
      queue.enqueue(adj);
    }
  }

  return !seen.some((s) => !s);
}

function criticalConnectionsBrute1(n, connections) {
  const critical = [];
  const graph = new Map(Array(n).fill(0).map((_, i) => [i, []]));
  connections.forEach(([u, v]) => {
    graph.get(u).push(v);
    graph.get(v).push(u);
  });

  for (const [u, v] of connections) {
    // remove edge
    graph.set(u, (graph.get(u) || []).filter((e) => e !== v));
    graph.set(v, (graph.get(v) || []).filter((e) => e !== u));

    if (!areAllNodesReachable(n, graph)) critical.push([u, v]);

    // add it back
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  return critical;
}
// end::criticalConnectionsBrute1[]

module.exports = { criticalConnections, criticalConnectionsBrute1 };
