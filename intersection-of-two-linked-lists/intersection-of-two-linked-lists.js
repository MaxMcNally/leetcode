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
    let [listA,listB] = evenListStart(headA,headB);
    console.log(listA,listB)
    while(listA && listB){
        if(listA === listB){
            return listA
        }
        listA = listA.next
        listB = listB.next
    }
    
};

var evenListStart = function(headA,headB){
    function getLength(list){
        let counter = 0;
        let node = list;
        while(node){
            node = node.next;
            counter++;
        }
        return counter
    }
    
    function moveHead(list, number){
        for(let i = 0; i < number; i++){
            list = list.next
        }
        return list
    }
    
    let listA = {
        list : headA,
        length : getLength(headA)
    };
    
    let listB = {
        list: headB,
        length : getLength(headB)
    };
    
    let diff = Math.abs(listA.length - listB.length);
    
    if(listA.length > listB.length){
        listA.list = moveHead(listA.list,diff)
    }
    else{
        listB.list = moveHead(listB.list,diff)
    }
    return [listA.list,listB.list]
}