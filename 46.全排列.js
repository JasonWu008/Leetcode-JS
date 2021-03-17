/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [], arr = [];
  let n = nums.length;
  let help = (start, arr) => {
    if(start == n) {
      res.push(arr.slice());
      return;
    }
    for(let i = start; i < n; i++) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      arr.push(nums[start]);
      help(start + 1, arr);
      arr.pop();
      [nums[i], nums[start]] = [nums[start], nums[i]];
    }
  }
  help(0, arr);
  return res;
};
// @lc code=end

