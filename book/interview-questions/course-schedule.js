// tag::description[]
/**
 * Check if you can finish all courses with their prerequisites.
 * @param {number} n - The number of courses
 * @param {[number, number][]} prerequisites - Array of courses pairs.
 *  E.g. [[200, 101]], to take course 202 you need course 101 first.
 * @returns {boolean} - True = can finish all courses, False otherwise
 */
function canFinish(n, prerequisites) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  const graph = new Map(Array(n).fill().map((_, i) => ([i, []])));
  prerequisites.forEach(([u, v]) => graph.get(v).push(u));

  const seen = [];
  const hasCycle = (node) => {
    if (seen[node] === 1) return true; // if visiting, it's a cycle!
    if (seen[node] === 2) return false; // if visited, skip it.

    seen[node] = 1; // mark as visiting.
    for (const adj of graph.get(node)) if (hasCycle(adj)) return true;
    seen[node] = 2; // mark as visited.
    return false;
  };

  for (let i = 0; i < n; i++) if (hasCycle(i)) return false;
  return true;
  // end::solution[]
  // tag::description[]
}
// end::description[]


// tag::brute1[]
function canFinishBrute1(n, prerequisites) {
  const graph = new Map(); // inialize adjacency list as map of arrays
  for (let i = 0; i < n; i++) graph.set(i, []); // build nodes
  prerequisites.forEach(([u, v]) => graph.get(v).push(u)); // edges

  const hasCycles = (node, parent = node, seen = []) => {
    for (const next of graph.get(node)) {
      if (next === parent) return true;
      if (seen[next]) continue;
      seen[next] = true;
      if (hasCycles(next, parent, seen)) return true;
    }
    return false;
  };

  for (let i = 0; i < n; i++) {
    if (hasCycles(i)) return false;
  }

  return true;
}
// end::brute1[]

module.exports = { canFinish, canFinishBrute1 };
