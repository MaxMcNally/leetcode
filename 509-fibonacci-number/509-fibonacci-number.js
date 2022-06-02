/**
 * @param {number} n
 * @return {number}
 */

let memo = {}
var fib = function(n) {
    if(n === 1 || n === 0){
        return n
    }
    let one,two
    if(memo[n - 1]){
        one = memo[n - 1]
    }
    else {
        memo[n - 1] = fib(n - 1)
    }
    if(memo[n - 2]){
        two = memo[n - 2]
    }
    else {
        memo[n - 2] = memo[n - 2]
    }
    return (memo[n - 1] || fib(n - 1) ) + (memo[n - 2] || fib(n - 2))
};