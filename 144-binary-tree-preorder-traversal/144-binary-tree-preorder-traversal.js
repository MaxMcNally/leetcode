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
 * @return {number[]}
 
 Pre-order traversal is to visit the root first. Then traverse the left subtree. Finally, traverse the right subtree.
 */


var preorderTraversal = function(root){
    let answer = []
    let traverse = function(root) {
        if(root === null){
            return
        }
        answer.push(root.val)
        traverse(root.left)
        traverse(root.right)
    };
    traverse(root)
    return answer
    
}
