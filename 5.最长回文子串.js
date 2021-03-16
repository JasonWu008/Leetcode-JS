/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let maxLen = -1, res = '';
    let dp = new Array(n);
    for(let i = 0; i < n; i++) {
      dp[i] = new Array(n).fill(false);
    }
    for(let l = 0; l < n; l++) {
      for(let i = 0; i + l < n; i++) {
        if(l === 0) dp[i][i+l] = true;
        else if(l === 1) dp[i][i+l] = (s[i] === s[i+l]);
        else dp[i][i+l] = ((s[i] === s[i+l]) && dp[i+1][i+l-1]);
        if(dp[i][i+l] && l > maxLen) res = s.substring(i, i + l + 1);
      }
    }
    return res;
};
// @lc code=end

