/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let n = s.length;
  let res = 0;
  let dp = new Array(n).fill(0);
  for(let i = 1; i < n; i++) {
    if(s[i] === ')') {
      if(s[i - 1] === '(') {
        dp[i] = (i > 1 ? dp[i - 2] : 0) + 2; 
      } else if(i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + ((i - dp[i - 1]) > 1 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      res = Math.max(res, dp[i]);
    }
  }
  return res;
};
// @lc code=end

