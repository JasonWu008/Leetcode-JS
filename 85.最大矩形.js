/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function(matrix) {
  if(!matrix || matrix.length === 0) return 0;
  let n = matrix.length, m = matrix[0].length;
  let res = 0;
  let left = new Array(n);
  for(let i = 0; i < n; i++) {
    left[i] = new Array(m).fill(0);
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(matrix[i][j] === '1') left[i][j] = (j > 0 ? left[i][j - 1] : 0) + 1;
    }
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(matrix[i][j] === '0') continue;
      let temp = left[i][j];
      for(let k = 0; i - k >= 0; k++) {
        temp = Math.min(temp, left[i - k][j]);
        res = Math.max(res, temp * (k + 1))
      }
    }
  }
  return res;
};
// @lc code=end

