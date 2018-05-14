/**
 * Brute force O(n^3)
 *
 * Order doesn't matter. E.g. 3 steps stair will count as the same 2-1 and 1-2.
 *
 * @param n
 * @returns {number}
 */
function countWaysTripleSteps(n) {
  let ways = 0;

  for(let z = 0; z <= n/3; z++) {
    for(let y = 0; y <= n/2; y++) {
      for(let x = 0; x <= n; x++) {
        if(n === 1 * x + 2 * y + 3 * z) {
          ways++;
        }
      }
    }
  }

  return ways;
}

/**
 * Brute force O(n^3)
 *
 * Order matters. E.g. 3 steps stair will NOT count as the same 2-1 and 1-2.
 *
 * @param n
 * @returns {number}
 */
function countWaysTripleSteps2(n) {
  let ways = 0;

  for(let z = 0; z <= n/3; z++) {
    for(let y = 0; y <= n/2; y++) {
      for(let x = 0; x <= n; x++) {
        if(n === 1 * x + 2 * y + 3 * z ||
           n === 1 * x + 3 * y + 2 * z ||
           n === 2 * x + 1 * y + 3 * z ||
           n === 2 * x + 3 * y + 1 * z ||
           n === 3 * x + 1 * y + 2 * z ||
           n === 3 * x + 2 * y + 1 * z) {
          ways++;
        }
      }
    }
  }

  return ways;
}

/**
 * O(n)
 *
 * Order matters, 3 steps: 1-2 and 2-1 are two different ways
 *
 * @param n
 * @param memo
 * @returns {*}
 */
function countWays2(n, memo = []) {
  let ways = 0;

  if(memo[n]) {
    return memo[n];
  }

  if(n === 0) {
    return 1;
  }

  if(n - 1 >= 0) {
    ways += memo[n - 1] || countWays(n - 1, memo);
  }

  if(n - 2 >= 0) {
    ways += memo[n-2] || countWays(n - 2, memo);
  }

  if(n - 3 >= 0) {
    ways += memo[n-3] || countWays(n - 3, memo);
  }

  memo[n] = ways;
  return ways;
}

/**
 *
 * O(n)
 *
 * This version is more succinct
 * Order matters, 3 steps: 1-2 and 2-1 are two different ways
 *
 * @param n
 * @param memo
 * @returns {*}
 */
function countWays(n, memo = []) {
  let ways = 0;

  if(n < 0) {
    return 0;
  } else if(n === 0) {
    return 1;
  } else if(memo[n]) {
    return memo[n];
  } else {
    ways = countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo);
  }

  memo[n] = ways;
  return ways;
}

module.exports = countWays;