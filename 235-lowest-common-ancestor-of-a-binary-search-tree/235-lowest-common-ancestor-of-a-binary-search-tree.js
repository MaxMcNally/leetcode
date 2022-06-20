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

function dfs(node, values = []){
    if(node) values.push(node.val)
    else {
        return values
    }
    if(node.left){
         dfs(node.left,values)
    }
    if(node.right){
        dfs(node.right,values)
    }
    return values
}

var lowestCommonAncestor = function(node, p, q) {
    let left = dfs(node.left)
    let right = dfs(node.right)
    console.log("Left", left)
    console.log("Right", right)
    console.log(p,q)
    if(left.includes(p.val) && left.includes(q.val)){
        return lowestCommonAncestor(node.left, p, q)
    }
    else if(right.includes(p.val) && right.includes(q.val)){
         return lowestCommonAncestor(node.right,p, q)
    }
    else {
        console.log("???")
        return node
    }
    
};