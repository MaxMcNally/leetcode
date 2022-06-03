/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var detectCycle = function(head){
    let slow = head;
    let fast = head;
    let isCyclic = false;
    while(fast?.next?.next){
        slow = slow.next;
        fast = fast.next.next
        if(slow === fast){
            isCyclic = true;
            break;
        }
    }
    if(!isCyclic){
        return null
    }
    slow = head
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow
}