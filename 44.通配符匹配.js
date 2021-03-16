/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let n = s.length, m = p.length;
  let dp = new Array(n + 1);
  for(let i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1).fill(false);
  }
  dp[0][0] = true;
  for(let i = 1; i < m + 1; i++) {
    if(p[i - 1] === '*') dp[0][i] = dp[0][i - 1];
  }
  for(let i = 1; i < n + 1; i++) {
    for(let j = 1; j < m + 1; j++) {
      if(s[i - 1] === p[j - 1] || p[j - 1] === '?') dp[i][j] = dp[i - 1][j - 1];
      else if(p[j - 1] === '*') dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
    }
  }
  return dp[n][m];
};
// @lc code=end

