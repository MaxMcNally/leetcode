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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let map = {}
    let queue = [root]
    while(queue.length > 0){ //[[1]]
        let node = queue.shift() //[1]
        if(map[node.val]){ 
            return true
        }
        map[k - node.val] = true 
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return false
};