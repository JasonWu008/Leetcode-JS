/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
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
  for(let j = 1; j < m + 1; j++) {
    if(p[j - 1] === '*') {
      if(j > 1) dp[0][j] = dp[0][j - 2];
      else dp[0][j] = true;
    }
  }
  for(let i = 1; i < n + 1; i++) {
    for(let j = 1; j < m + 1; j++) {
      if(p[j - 1] !== '*') {
        if(s[i - 1] === p[j - 1] || p[j - 1] === '.') dp[i][j] = dp[i - 1][j - 1];
      } else {
          if(s[i -1] === p[j - 2] || p[j - 2] === '.') dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
          else dp[i][j] = dp[i][j - 2];
      }

    }
  }
  return dp[n][m];
};
// @lc code=end

