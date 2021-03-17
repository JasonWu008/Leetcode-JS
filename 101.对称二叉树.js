/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  let help = (left, right) => {
    if(!left && !right) return true;
    if(!left || !right) return false;
    return (left.val === right.val) && help(left.left, right.right) && help(left.right, right.left);
  }
  return help(root.left, root.right);
};
// @lc code=end

