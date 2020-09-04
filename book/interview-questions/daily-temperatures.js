// tag::description[]
/**
 * Given an array with daily temperatures (30 °C to 100 °C),
 * return an array with the days count until a warmer temperature
 * for each elem from the input.
 *
 * @examples
 *  dailyTemperatures([30, 28, 50, 40, 30]); // [2, 1, 0, 0, 0]
 *  dailyTemperatures([73, 69, 72, 76, 73]); // [3, 1, 1, 0, 0]
 *
 * @param {number[]} t - Daily temperatures
 * @returns {number[]} - Array with count of days to warmer temp.
 */
function dailyTemperatures(t) {
  // end::description[]
  // tag::solution[]
  const last = (arr) => arr[arr.length - 1];
  const stack = [];
  const ans = [];

  for (let i = t.length - 1; i >= 0; i--) {
    while (stack.length && t[i] >= t[last(stack)]) stack.pop();
    ans[i] = stack.length ? last(stack) - i : 0;
    stack.push(i);
  }

  return ans;
}
// end::solution[]

// tag::dailyTemperaturesBrute1[]
function dailyTemperaturesBrute1(t) {
  const ans = [];

  for (let i = 0; i < t.length; i++) {
    ans[i] = 0;
    for (let j = i + 1; j < t.length; j++) {
      if (t[j] > t[i]) {
        ans[i] = j - i;
        break;
      }
    }
  }

  return ans;
}
// end::dailyTemperaturesBrute1[]

module.exports = { dailyTemperatures, dailyTemperaturesBrute1 };
