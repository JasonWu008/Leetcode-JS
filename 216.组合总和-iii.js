/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [], arr = [];
  let help = (start, arr, sum) => {
    if(sum >= n || arr.length >= k) {
      if(sum === n && arr.length === k) res.push(arr.slice());
      return;
    }
    for(let i = start; i <= 9; i++) {
      arr.push(i);
      help(i + 1, arr, sum + i);
      arr.pop();
    }
  }
  help(1, arr, 0);
  return res;
};
// @lc code=end

