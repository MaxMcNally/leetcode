/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

var bstFromPreorder = function(preorder) {
    let start = preorder.shift()
    if(!start) return null
    let root = new TreeNode(start)
    let rightStart = preorder.findIndex((item) => item > start)
    let right
    let left
    if(rightStart > -1){
         right = preorder.slice(rightStart)
         left = preorder.slice(0,rightStart)
    }
    else {
        right = []
        left = preorder
    }
    if(left.length > 0){
        root.left = bstFromPreorder(left)
    }
    if(right.length > 0){
        root.right = bstFromPreorder(right)
    }
    return root
};