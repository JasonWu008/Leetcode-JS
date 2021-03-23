/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let left = 0, right = height.length-1;
  let res = 0;
  while(left < right) {
      let temp = (Math.min(height[left], height[right])) * (right - left);
      res = Math.max(temp, res);
      if(height[left] < height[right]) left++;
      else right--;
  }
  return res;
};
// @lc code=end

