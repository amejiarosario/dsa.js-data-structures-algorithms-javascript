// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  const set = new Set();

  for (let i = 0, j = 0; j < s.length; j++) {
    while (set.has(s[j])) set.delete(s[i++]);
    set.add(s[j]);
    max = Math.max(max, set.size);
  }

  return max;
};
