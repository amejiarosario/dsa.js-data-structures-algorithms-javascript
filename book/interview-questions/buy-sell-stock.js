// tag::description[]
/**
 * Find the max profit from buying and selling a stock given their daily prices.
 * @examples
 *    maxProfit([5, 10, 5, 10]); // => 5
 *    maxProfit([1, 2, 3]); // => 2
 *    maxProfit([3, 2, 1]); // => 0
 * @param {number[]} prices - Array with daily stock prices
 * @returns {number} - Max profit
 */
function maxProfit(prices) {
// end::description[]
// tag::solution[]
  let max = 0;
  let local = Infinity;
  for (let i = 0; i < prices.length; i++) {
    local = Math.min(local, prices[i]);
    max = Math.max(max, prices[i] - local);
  }
  return max;
}
// end::solution[]

// tag::maxProfitBrute1[]
function maxProfitBrute1(prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
}
// end::maxProfitBrute1[]


module.exports = { maxProfitBrute1, maxProfit };
