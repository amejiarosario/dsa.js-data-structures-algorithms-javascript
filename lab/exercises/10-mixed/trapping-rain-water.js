/**
 * Compute how much water it is able to trap after raining.
 * @param {number[]} height Non-negative integers representing
 *  an elevation map where the width of each bar is 1.
 *
 * @runtime O(n) - using DP
 * @space O(n)
 */
function trap(height) {
  let ans = 0;
  const leftMax = [];
  const rightMax = [];

  for (let j = height.length - 1; j >= 0; j--) {
    leftMax[j] = Math.max((leftMax[j + 1] || 0), height[j]);
  }
  for (let j = 0; j < height.length; j++) {
    rightMax[j] = Math.max((rightMax[j - 1] || 0), height[j]);
  }

  for (let i = 0; i < height.length; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return ans;
}

module.exports = trap;
