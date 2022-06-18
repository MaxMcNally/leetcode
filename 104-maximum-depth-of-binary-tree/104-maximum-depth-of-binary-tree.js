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
var maxDepth = function(root) {
    if(root === null) return 0
    let max = 0
    function findDepth(node, current = 1){
        if(node && (node.left || node.right)){
            findDepth(node.left, current+1)
            findDepth(node.right, current+1)
            return
        }
        if(current > max){
            max = current
        }
        return
    }
    findDepth(root)
    
    return max
};