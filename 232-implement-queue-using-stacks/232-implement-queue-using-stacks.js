class Stack{
    constructor(){
        this.array = [];
    }
    pop(){
        let value = this.array.pop()
        return value
    }
    push(x){
        this.array.push(x)
        return this.array
    }
    peek(){
        return this.array[this.array.length - 1]
    }
    empty(){
        return this.array.length === 0
    }
}

var MyQueue = function() {
    this.stackOne = new Stack()
    this.stackTwo = new Stack()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackOne.push(x);
    return this;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stackOne.peek()){
        this.stackTwo.push(this.stackOne.pop())
    }
    let last = this.stackTwo.pop()
    while(this.stackTwo.peek()){
        this.stackOne.push(this.stackTwo.pop())
    }
    return last
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.stackOne.peek()){
        this.stackTwo.push(this.stackOne.pop())
    }
    let last = this.stackTwo.peek()
    while(this.stackTwo.peek()){
        this.stackOne.push(this.stackTwo.pop())
    }
    return last
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stackOne.empty()
};
