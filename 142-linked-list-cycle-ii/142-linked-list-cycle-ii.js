/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    let node = head;
    let nodeSet = new Set()
    while(node){
        if(nodeSet.has(node)){
            return node
        }
        nodeSet.add(node)
        node = node.next
    }
    return null
};