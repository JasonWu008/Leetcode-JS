/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let res = [], arr = [];
  let n = nums.length;

  let help = (start, arr) => {
    res.push(arr.slice());
    if(arr.length === n) return;
    for(let i = start; i < n; i++) {
      arr.push(nums[i]);
      help(i + 1, arr);
      arr.pop();
    }
  }
  help(0, arr);
  return res;
};
// @lc code=end

