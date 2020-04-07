/**
 * @param {string[]} words
 * @return {string}
 *
 * @pomodoro IIII ()
 */
function alienOrder(words) {
  const ans = '';
  const order = new Map();
  const set = new Set();

  for (let i = 1; i < words.length; i++) {
    const w1 = words[i - 1];
    const w2 = words[i];
    let j = 0;

    while (j < w1.length && j < w2.length && w1[j] === w2[j]) {
      if (!order.has(w1[j])) order.set(w1[j]);
      j++;
    }

    // console.log({w1, w2, i, len: words.length});

    if (w1[j]) {
      if (order.has(w1[j]) && order.get(w1[j]) !== undefined) {
        // console.log({j, w1: w1, char: w1[j], order});
        return '';
      }

      order.set(w1[j], w2[j]);

      Array.from(w1.slice(j)).forEach((l) => {
        if (!order.has(l)) order.set(l);
      });
    }

    Array.from(w2.slice(j)).forEach((l) => {
      if (!order.has(l)) order.set(l);
    });
  }

  // console.log({order});

  // build order
  for (const [l1, l2] of order.entries()) {
    // console.log({l1, l2})
    set.add(l1);
    try {
      traverseDep(order, l2).forEach((l) => {
        if (set.has(l)) set.delete(l);
        set.add(l);
      });
    } catch (error) {
      // console.log({
      //   error,
      // });
      return '';
    }
    // if (l2) set.add(l2);
  }

  return Array.from(set).join('');
}

function traverseDep(order, l2, visited = new Set()) {
  if (!l2) return visited;

  if (visited.has(l2)) {
    throw new Error(`Invalid order ${l2}`);
  }

  visited.add(l2);

  if (order.has(l2)) {
    traverseDep(order, order.get(l2), visited);
  }

  return visited;
}

module.exports = alienOrder;

// given a list of words in lexicographical order,
// figure out the alphabet order.
// It should return "" if the order is invalid.

// []

// [a, b]
// ab

// [a, a]
// a

// [a, b, c]
// abc

// ["xa", "xb", "xc"]
// abcx

// ["xa", "yb"]
// zyab

// ["wrt","wrf","er","ett","rftt"]


// [z, x, y]
// zxy

// [z, x, z]
// ""

// [ab, cd, efg, xb, xc, zd, ze]
// acexz
