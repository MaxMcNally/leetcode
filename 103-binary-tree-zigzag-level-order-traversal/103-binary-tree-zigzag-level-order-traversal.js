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
 * @return {number[][]}
    3       level 0 []
   / \
  9   20    level 1 [[3],[20,9][]]
     /  \ 
    15   7  level 2 [[3],[20,9][15,7]]
 */

var zigzagLevelOrder = function(root) {
    if(!root) return []
    let answer = []
    let q = [root]
    let ltr = true
    while(q.length > 0){ //[2,3] [[1],[3,2]]
        let newQ = []
        let level = []
        for(let node of q){
            if(node.left){
                newQ.push(node.left)
            }
            if(node.right){
                newQ.push(node.right)
            }
            level.push(node.val)
        }
        answer.push(level)
        q = newQ
    }
    let newAnswer = []
    for(let i = 0; i < answer.length; i++){
        if(i % 2 === 0){
            newAnswer.push(answer[i])
        }
        else {
            newAnswer.push(answer[i].reverse())
        }
    }
    return newAnswer
    
};