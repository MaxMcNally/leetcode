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
  return isSymmetricRecursive(root.left,root.right);
}

var isSymmetricRecursive = function (left,right){  
  if(!left && !right){
    return true
  }
  if(!left || !right){
    return false
  }
  return left.val === right.val &&
            isSymmetricRecursive(left.left,right.right) &&
                isSymmetricRecursive(left.right,right.left);
}