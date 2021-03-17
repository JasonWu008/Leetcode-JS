/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [], arr = [];
  candidates.sort((a,b) => a - b );
  let help = (sum, arr, index) => {
    if(sum <= 0) {
      if(sum === 0) res.push(arr.slice());
      return;
    }
    for(let i = index; i < candidates.length; i++) {
      if(i > index && candidates[i - 1] === candidates[i]) continue;
      arr.push(candidates[i]);
      help(sum - candidates[i], arr, i + 1);
      arr.pop();
    }
  }
  help(target, arr, 0);
  return res;
};
// @lc code=end

