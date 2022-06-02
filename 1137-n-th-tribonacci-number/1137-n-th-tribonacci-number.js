/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let answer = [0 , 1 , 1]
    for(let i = 3; i <= n; i++){
        answer.push(answer[i - 1] + answer[i - 2] + answer[i - 3])
    }
    return answer[n]
};