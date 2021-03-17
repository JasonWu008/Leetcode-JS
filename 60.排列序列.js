/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
  let res = "", count = 0;
  let used = new Array(n).fill(false);
  let help = (str, num) => {
    if(num === n) {
      count++;
      if(count === k) res = str;
      return;
    }
    for(let i = 1; i <= n; i++) {
      if(used[i - 1]) continue;
      used[i - 1] = true;
      help(str + i, num + 1);
      used[i - 1] = false;
    }
  }
  help("", 0);
  return res;
};
// @lc code=end

