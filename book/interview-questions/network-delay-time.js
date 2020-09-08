const { PriorityQueue, Queue } = require('../../src/index');

// tag::description[]
function networkDelayTime(times, N, K) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  const graph = new Map(Array(N).fill(0).map((_, i) => [i + 1, []]));
  times.forEach(([u, v, w]) => graph.get(u).push([v, w]));

  const q = new PriorityQueue([[0, K]]);
  const dist = new Map();

  while (q.size) {
    const [d, n] = q.dequeue();

    if (dist.has(n)) continue;
    dist.set(n, d);

    for (const [adj, w] of graph.get(n)) {
      if (!dist.has(adj)) q.enqueue([d + w, adj]);
    }
  }

  return dist.size === N ? Math.max(...dist.values()) : -1;
  // end::solution[]
  // tag::description[]
}
// end::description[]

// tag::networkDelayTimeQueue[]
function networkDelayTimeQueue(times, N, K) {
  const graph = new Map(Array(N).fill(0).map((_, i) => [i + 1, []]));
  times.forEach(([u, v, w]) => graph.get(u).push([v, w]));

  const q = new Queue([[0, K]]);
  const dist = new Map();

  while (q.size) {
    const [d, n] = q.dequeue();

    dist.set(n, dist.has(n) ? Math.min(dist.get(n), d) : d);

    for (const [adj, w] of graph.get(n)) {
      if (!dist.has(adj) || dist.get(adj) > d + w) {
        q.enqueue([d + w, adj]);
      }
    }
  }

  return dist.size === N ? Math.max(...dist.values()) : -1;
}
// end::networkDelayTimeQueue[]

module.exports = { networkDelayTime, networkDelayTimeQueue };
