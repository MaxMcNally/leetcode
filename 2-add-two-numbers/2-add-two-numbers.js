/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let current = head
    let carry = 0;
    let node1 = l1
    let node2 = l2
    while(node1 || node2){ 
        let value1 = node1 ? node1.val : 0;
        let value2 = node2 ? node2.val : 0
        node1 = node1 ? node1.next : null
        node2 = node2 ? node2.next : null
        let sum = value2 + value1 + carry
        carry = sum >= 10 ? 1 : 0
        sum = sum >= 10 ? sum % 10 : sum; 
        current.next = new ListNode(sum)
        current = current.next
    }
    

    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return head.next
};