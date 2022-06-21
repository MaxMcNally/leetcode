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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum){
    if(!root) return false
    let paths = []
    let getPathSums = (node, pathSum = 0)=>{
        if(node.left){
            getPathSums(node.left, pathSum + node.val)
        }
        if(node.right){
            getPathSums(node.right, pathSum + node.val)
        }
        if(!node.left && !node.right) {  //leaf node
            paths.push(pathSum + node.val)} 
        
    }
    
    getPathSums(root)
    return paths.includes(targetSum)
};