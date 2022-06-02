/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let slow = headA
    let fast = headB
    while(slow){
        while(fast){
            if(fast === slow){
                return fast
            }
            fast = fast.next
        }
        slow = slow.next
        fast = headB
    }
    return null
};