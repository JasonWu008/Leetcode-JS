/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let res = [], arr = [];
  let help = (arr, sum, index) => {
    if(sum <= 0) {
      if(sum === 0){
        res.push(arr.slice());
      }
      return
    }
    for(let i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      help(arr, sum - candidates[i], i);
      arr.pop();
    }
  }
  help(arr, target, 0);
  return res;
};
// @lc code=end

