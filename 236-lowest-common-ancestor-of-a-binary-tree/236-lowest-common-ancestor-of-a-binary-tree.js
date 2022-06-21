/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function find(node, value){
    if(!node) return false
    if(node.val === value) {
        return true
    }
    return find(node.left,value) || find(node.right,value)
    
    
}

var lowestCommonAncestor = function(node, p, q) {
    let left = find(node.left, p.val) && find(node.left, q.val)
    let right = find(node.right, p.val) && find(node.right, q.val)
    if(left){
        return lowestCommonAncestor(node.left, p, q)
    }
    if(right){
         return lowestCommonAncestor(node.right, p, q)
    }
    return node
};