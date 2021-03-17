/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if(!root) return [];
  let res = [], arr = [];
  arr.push(root);
  while(arr.length > 0) {
    let temp = [], n = arr.length;
    for(let i = 0; i < n; i++) {
      let r = arr.shift();
      temp.push(r.val);
      if(r.left) arr.push(r.left);
      if(r.right) arr.push(r.right);
    }
    res.push(temp);
  }
  return res;
};
// @lc code=end

