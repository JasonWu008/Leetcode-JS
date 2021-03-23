/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for(let i = 0; i < nums.length - 2; i++) {
    for(let j = i + 1; j < nums.length - 1; j++) {
      let k = j + 1; 
      while(k < nums.length && nums[i] + nums[j] > nums[k]) k++;
      res += k - j - 1;
    }
  }
  return res ;
};
// @lc code=end

