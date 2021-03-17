/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [], arr = [], n = nums.length;
  nums.sort((a, b) => a - b);
  let help = (start, arr) => {
    res.push(arr.slice());
    if(arr.length === n) return;
    for(let i = start; i < n; i++) {
      if(i > start && nums[i - 1] === nums[i]) continue;
      arr.push(nums[i]);
      help(i + 1, arr);
      arr.pop();
    }
  }
  help(0, arr);
  return res;
};
// @lc code=end

