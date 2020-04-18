/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
function networkDelayTime(times, N, K) {
  const graph = new Map();
  for (let i = 1; i <= N; i++) graph.set(i, []);
  times.forEach(([u, v, w]) => {
    graph.get(u).push([v, w]);
  });


  const distances = Array(N + 1).fill(Infinity);
  distances[0] = 0;
  distances[K] = 0;

  const visited = [];

  while (true) {
    let node;
    let dist = Infinity;
    // From all the unseen nodes find the one with the min distance.
    for (let i = 1; i <= N; i++) {
      if (!visited[i] && distances[i] < dist) {
        node = i;
        dist = distances[i];
      }
    }

    if (!node) break; // none found, so all node has been visited

    visited[node] = true;

    graph.get(node).forEach(([n, w]) => {
      distances[n] = Math.min(distances[n], dist + w);
    });
  }

  const max = Math.max(...distances);
  return max === Infinity ? -1 : max;
}

module.exports = networkDelayTime;
