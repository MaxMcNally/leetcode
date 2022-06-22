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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let values = []
    let swap1 = null;
    let swap2 = null;
    function inorder(node){
        if(node === null){
            return
        }
        inorder(node.left)
        if(values[values.length - 1] && values[values.length - 1].val > node.val){
            if(!swap1){
                swap1 = values[values.length - 1]
                swap2 = node 
            }
            else {
                swap2 = node
            }
        }
        values.push(node)
        inorder(node.right)
    }
    inorder(root)
    let tempVal = swap1.val
    swap1.val = swap2.val
    swap2.val = tempVal
};