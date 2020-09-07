// https://leetcode.com/problems/network-delay-time/solution/
function networkDelayTime(times: number[][], N: number, K: number): number {
  const graph = new Map<number, [number, number][]>(Array(N).fill(0).map((_, i) => [i + 1, []]));
  times.forEach(([u, v, w]) => graph.get(u)?.push([v, w]));

  const queue = new Queue([[K, 0]]);
  const seen = Array(N + 1).fill(Infinity);

  while (queue.size()) {
    const [node, dist] = queue.dequeue();
    seen[node] = Math.min(seen[node], dist);

    for (const [adj, w] of graph.get(node) || []) {
      if (seen[adj] > dist + w) queue.enqueue([adj, dist + w]);
    }
  }

  const max = Math.max(...seen.slice(1));
  return max === Infinity ? -1 : max;
};

/*
[[2,1,1],[2,3,1],[3,4,1]]
4
2


*/
