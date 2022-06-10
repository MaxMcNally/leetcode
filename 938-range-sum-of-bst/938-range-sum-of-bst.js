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
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result = []
    let stack = [root]
    while(stack.length > 0){
        const node = stack.pop()
        if(node.val && (node.val >= low && node.val <= high)) {
            console.log(`Node val (${node.val}) is between ${high} and ${low}`)
            result.push(node.val)
        }
        
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return result.reduce((memo,num)=>{
        return memo + num
    },0)
};