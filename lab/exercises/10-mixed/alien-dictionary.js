
/**
 * Add nodes and edges into a graph using adjacency list
 *
 * @class Graph
 */
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  // add node or directed edge
  add(node1, node2) {
    // console.log({node1, node2})
    const adj = this.nodes.has(node1) ? this.nodes.get(node1) : new Set();
    if (node2) adj.add(node2);
    this.nodes.set(node1, adj);
  }
}

/**
 * DFS + tarjan for loop detection
 *
 * @param {Graph} g
 * @param {Map} node
 * @param {Set} set
 * @param {Map} [parent=null]
 * @param {Map} [grouping=new Map()]
 * @param {number} [depth=0]
 * @returns {boolean} true if has a loop, false otherwise
 */
function hasLoopOrAddToSet(g, node, set, parent = null, grouping = new Map(), depth = 0) {
  if (set.has(node)) set.delete(node);
  set.add(node);
  grouping.set(node, depth);

  // console.log({node, adjs: g.nodes.get(node)});

  for (const adj of g.nodes.get(node)) {
    // if (adj === parent) continue; // only for indirected graph

    if (!grouping.has(adj)) {
      if (hasLoopOrAddToSet(g, adj, set, node, grouping, depth + 1)) return true;
    }

    const minGroup = Math.min(grouping.get(adj), grouping.get(node));
    grouping.set(node, minGroup);

    if (grouping.get(adj) === grouping.get(node)) return true;
  }
}


/**
 * Find the order of the alien alphabet given a list of words on lexicographical order.
 *
 * @param {string[]} words
 * @return {string} The alien alphabet order.
 */
function alienOrder(words) {
  const g = new Graph();
  if (!words || words.length < 2) return words && words.join('');

  for (let i = 1; i < words.length; i++) { // O(n) * O(k)
    const w1 = words[i - 1];
    const w2 = words[i];
    let j = 0;

    while (j < w1.length && j < w2.length && w1[j] === w2[j]) { // O(k), k = max word length
      g.add(w1[j++]);
    }

    if (j === w2.length && w1.length > w2.length) {
      return ''; // shorter words should come first.
    }

    if (w1[j]) g.add(w1[j], w2[j]);
    [...w1.slice(j)].forEach((n) => g.add(n));
    [...w2.slice(j)].forEach((n) => g.add(n));
  }

  // console.log({ g: JSON.stringify(g) });
  // console.log({ g: g.nodes });

  const set = new Set();
  for (const [node] of g.nodes) { // O(?)
    if (hasLoopOrAddToSet(g, node, set)) { // DFS: O(E + V), V: total unique letters
      return '';
    }
  }

  return [...set].join('');
}

module.exports = alienOrder;

// Find the order of the alien alphabet given a list of words on lexicographical order.

// take words in pair, and build a dependency graph.
  // skip while w1.char === w2.char
  // add the first diff chars as a adj nodes
  // add each letter as a node in the graph.

// find the order of the alien alph
  // iterate over each node
  // dfs + tarjan to detect loops
  // add each visited node to a set
  // if there’s a loop return ‘’
  // return set
