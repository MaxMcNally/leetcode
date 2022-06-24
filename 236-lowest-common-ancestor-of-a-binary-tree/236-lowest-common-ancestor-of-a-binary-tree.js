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
    if(find(node.left, p.val) && find(node.left, q.val)){
        return lowestCommonAncestor(node.left, p, q)
    }
    if(find(node.right, p.val) && find(node.right, q.val)){
         return lowestCommonAncestor(node.right, p, q)
    }
    return node
};