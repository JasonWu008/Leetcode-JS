/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if(!nums || nums.length === 0) return [];
    let left = 1;
    for(let i = 1; i < nums.length; i++) {
      if(nums[i] === nums[i - 1]) continue;
      else {
        nums[left] = nums[i];
        left++;
      }
    }
    return left;
};
// @lc code=end

