/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if(head.next === null){
        return head;
    }
    let nodes = [];
    let counter = 0;
    while(head != null)
    {
        nodes[counter] = head;
        counter++;
        head = head.next;
    }
    return nodes[Math.floor(nodes.length / 2)];
};