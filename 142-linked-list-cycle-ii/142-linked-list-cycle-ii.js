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
//v1
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
    //rest slow pointer to start
    slow = head
    while(slow !== fast){
        console.log(slow.val,fast.val)
        slow = slow.next;
        fast = fast.next;
    }
    return slow
}