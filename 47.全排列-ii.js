/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length, res = [], arr = [];
  let used = new Array(n).fill(false);
  let help = (arr) => {
    if(arr.length === n) {
      res.push(arr.slice());
      return;
    }
    for(let i = 0; i < n; i++) {
      if(used[i] || (i > 0 && nums[i - 1] === nums[i] && used[i - 1])) continue;
      arr.push(nums[i]);
      used[i] = true;
      help(arr);
      used[i] = false;
      arr.pop();
    }
  }
  help(arr);
  return res;
};
// @lc code=end

