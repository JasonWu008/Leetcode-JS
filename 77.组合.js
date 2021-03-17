/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [], arr = [];
  let help = (start, arr, num) => {
    if(num === k) {
      res.push(arr.slice());
      return;
    }
    for(let i = start; i <= n; i++) {
      arr.push(i);
      help(i + 1, arr, num + 1);
      arr.pop();
    }
  }
  help(1, arr, 0);
  return res;
};
// @lc code=end

