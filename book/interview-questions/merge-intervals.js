// const {  } = require('../../src/index');

// tag::description[]
/**
 * Merge overlapping intervals.
 * @param {[numer, number][]} intervals - Array with pairs [start, end]
 * @returns {[numer, number][]} - Array of merged pairs [start, end]
 */
function merge(intervals) {
  // end::description[]
  // tag::placeholder[]
  // write your code here...
  // end::placeholder[]
  // tag::solution[]
  const ans = [];

  intervals.sort((a, b) => a[0] - b[0]); // sort by start time

  for (let i = 0; i < intervals.length; i++) {
    const last = ans[ans.length - 1];
    const curr = intervals[i];
    if (last && last[1] >= curr[0]) { // check for overlaps
      last[1] = Math.max(last[1], curr[1]);
    } else ans.push(curr);
  }
  return ans;
  // end::solution[]
  // tag::description[]
}
// end::description[]

module.exports = { merge };
