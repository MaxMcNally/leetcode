/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let max = Math.max(...nums)
    let maxIndex = nums.indexOf(max)
    let left = nums.slice(0,maxIndex)
    let right = nums.slice(maxIndex + 1)
    
    let node = new TreeNode(max)
    if(left.length > 0){
        node.left = constructMaximumBinaryTree(left)
    }
    if(right.length > 0){
        node.right = constructMaximumBinaryTree(right)
    }
    
    return node
};