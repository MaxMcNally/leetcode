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
var mergeNodes = function(head) {
    let originalHead = head
    let headCounter = originalHead.next
    let counter = head
    let sum = 0
    while(counter){
        if(counter.val === 0){
            counter = counter.next
            if(sum > 0){
                headCounter.next = new ListNode(sum)
                headCounter = headCounter.next
                sum = 0
            }
            
        }
        else {
            sum += counter.val
            counter = counter.next
        }
        
    }
    
    return originalHead.next.next
    
};