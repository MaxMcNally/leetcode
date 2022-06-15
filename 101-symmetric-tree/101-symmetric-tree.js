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
    if(!root.left && !root.right) return true
    if(!root.left || !root.right) return false
    if(root.left.val !== root.right.val) return false
    let leftStack = [root.left]
    let rightStack = [root.right]
    
    while(leftStack.length > 0 || rightStack.length > 0){
        if(leftStack.length !== rightStack.length){
            return false
        }
        
        let left = leftStack.pop()
        let right = rightStack.pop()

        if(right.val !== left.val) {
          return false
        }

        if(left.left && right.right) {
          leftStack.push(left.left)
          rightStack.push(right.right)
        }
        else if(left.left || right.right){
          return false
        } 
        if(left.right && right.left){
            leftStack.push(left.right)
            rightStack.push(right.left)
        }
        else if(left.right || right.left){
          return false
        }
    }
    return true
};