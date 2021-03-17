/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let str = '', res = [];
  let help = (left, right, str, num) => {
    if(num === n * 2) {
      res.push(str);
      return;
    }
    if(left < n) help(left + 1, right, str + '(', num + 1);
    if(right < left) help(left, right + 1, str + ')', num + 1);
  }
  help(0, 0, str, 0);
  return res;
};
// @lc code=end

