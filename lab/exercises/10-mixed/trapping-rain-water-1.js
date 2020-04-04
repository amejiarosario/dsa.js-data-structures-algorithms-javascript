/**
 * Compute how much water it is able to trap after raining.
 * @param {number[]} height Non-negative integers representing
 *  an elevation map where the width of each bar is 1.
 *
 * @runtime O(n^2) - Brute force
 * @space O(1)
 */
function trap(height) {
  let ans = 0;

  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }

    ans += Math.min(leftMax, rightMax) - height[i];
  }

  return ans;
}

module.exports = trap;
