/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    let answer = [0,1]
    for(let i = 2; i <= n; i++){
        answer.push(answer[i - 2] + answer[i - 1])
    }
    return answer[n]
};