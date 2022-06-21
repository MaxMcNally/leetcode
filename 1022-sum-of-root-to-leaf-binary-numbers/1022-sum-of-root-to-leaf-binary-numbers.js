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
var sumRootToLeaf = function(root) {
    let paths = []
    function search(node, path = ''){
        if(!node.left && !node.right) paths.push(path + node.val)
        if(node.left){ 
            search(node.left, path + node.val)
        }
        if(node.right){ 
            search(node.right, path + node.val)
        }
    }
    search(root)
    return paths.reduce((memo,path)=>{
        return memo + parseInt(path, 2)
    },0)
};