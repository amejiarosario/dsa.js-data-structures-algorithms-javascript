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

  const queue = new Map([[K, 0]]);

  while (queue.size) {
    const [node, dist] = queue.entries().next().value;
    queue.delete(node);

    visited[node] = true;

    // not working for some cases
    graph.get(node).sort((a, b) => a[1] - b[1]).forEach(([n, w]) => {
      distances[n] = Math.min(distances[n], dist + w);
      if (queue.has(n) || !visited[n]) {
        queue.set(n, distances[n]);
      }
    });
  }

  const max = Math.max(...distances);
  return max === Infinity ? -1 : max;
}

module.exports = networkDelayTime;
