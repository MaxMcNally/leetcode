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
    let slow = head
    let fast = head
    let isCycle = false
    while(fast?.next?.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            isCycle = true;
            break;
        }
    }
    if(!isCycle){
        return null
    }
    slow = head
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow
};