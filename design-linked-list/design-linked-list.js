
class Node{
    constructor(value){
        if(value === null) {
            return null
        }
        this.val = value;
        this.next = null;
    }
}

var MyLinkedList = function() {
        this.head = null
        this.tail = null
        this.length = 1
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
        if(index === 0){
            if(this.head){
                return this.head.val
            }
            return -1
        }
        let node = this.head.next
        let counter = 1;
        while(node){
            if(counter === index){
                return node.val;
            }
            counter++;
            node = node.next;
        }
        return -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
        if(this.head === null){
                this.head = new Node(val)
                this.tail = this.head
                this.length++;
                return
            }
        let oldHead = this.head;
        this.head = new Node(val);
        this.head.next = oldHead;
        this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
        if(this.head === null){
            this.head = new Node(val)
            this.tail = this.head
            return
        }
        let node = this.head;
        while(node){
            if(node.next){
                node = node.next;
            }
            else {
                node.next = new Node(val);
                this.tail = node.next
                this.length ++
                return
            }
        }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
        if(index === 0) {
            return this.addAtHead(val)
        }
        if(this.head === null){
            return -1
        }
        let node = this.head.next;
        let prev = this.head;
        let counter = 1
        while(node){
            if(counter === index){
                prev.next = new Node(val);
                prev.next.next = node;
                return
            }
            prev = node;
            node = node.next;
            counter++
        }
        if(counter === index){
            prev.next = new Node(val);
            prev.next.next = node;
            return
        }
        return -1
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
        if(index === 0){
            this.head = this.head.next;
            return
        }
        let node = this.head.next;
        let prev = this.head;
        let counter = 1;
        while(node){
            if(counter === index){
                prev.next = node.next
                return 
            }
            prev = node
            node = node.next
            counter++
        }
        return -1
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */