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
 */
var getLonelyNodes = function(root) {
    if(!root.left && !root.right) return []
    
    let answer = []
    checkNode(root.left,root.right)
    function checkNode(node1,node2){
        if(!node1 && !node2) return
        if(!node1 && node2){
            answer.push(node2.val)
            checkNode(node2.left,node2.right)
            
        }
        else if(node1 && !node2){
            answer.push(node1.val)
            checkNode(node1.left,node1.right)
            
        }
        else {
            checkNode(node1.left,node1.right)
            checkNode(node2.left,node2.right)
        }
        
    }
    return answer
    
};