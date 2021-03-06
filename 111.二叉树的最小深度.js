/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
 var minDepth = function(root) {
  let getMinDepth = (root) => {
    if(!root) return 0;
    if(!root.left) return getMinDepth(root.right) + 1;
    if(!root.right) return getMinDepth(root.left) + 1;
    return Math.min(getMinDepth(root.left), getMinDepth(root.right)) + 1;
  }
  return getMinDepth(root);
};
// @lc code=end

