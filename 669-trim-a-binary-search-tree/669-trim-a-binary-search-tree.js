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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    
    function trim(node){
        if(!node) return null
        //if the node val is too high, then everything to the right of the node is also too high and we can ignore
        else if(node.val > high){
            return trim(node.left)
        }
        //if node val is too low, everything to the left is too low and we can ignore
        else if(node.val < low){
            return trim(node.right)
        }
        else {
            node.left = trim(node.left)
            node.right = trim(node.right)
            return node
        }
        
    }
    
    return trim(root)
};