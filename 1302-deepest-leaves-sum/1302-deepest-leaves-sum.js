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
var deepestLeavesSum = function(root) {
    let total = 0
    let currentMaxDepth = 1
    let findMaxDepth = (node, maxDepth = 1) => {
        
        if(maxDepth > currentMaxDepth){
            currentMaxDepth = maxDepth
            
        }
        if(node.left){
            findMaxDepth(node.left, maxDepth + 1)
        }
        if(node.right){
            findMaxDepth(node.right, maxDepth + 1)
        }
    }
    findMaxDepth(root)
    let dfs = (node, depth = 1) => {
        if((!node.left && !node.right)){
            if(depth === currentMaxDepth){
                total += node.val
            }
            return
        }
        if(node.left){
            dfs(node.left, depth + 1)
        }
        if(node.right){
            dfs(node.right, depth + 1)
        }
    }
    dfs(root)
    return total
};