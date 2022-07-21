/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let answer = ""
    let longer,shorter
    if(num1.length === num2.length){
        longer = num1> num2 ? num1 : num2
        shorter = num1 > num2 ? num2 : num1
    }
    else {
        longer = num1.length > num2.length ? num1 : num2
        shorter = num1.length > num2.length ? num2 : num1
    }
    let diff = longer.length - shorter.length
    shorter = "0".repeat(diff) + shorter
    let carry = 0
    for(let i = longer.length - 1; i >= 0; i--){
        let sum = (shorter[i] !== undefined) ? longer.charCodeAt(i) + shorter.charCodeAt(i) : longer.charCodeAt(i)
        sum += carry
        if(sum - 48 > 57){
            carry = 1
            sum = sum - 10
        }
        else {
            carry = 0
        }
        answer = String.fromCharCode(sum-48) + answer
    }    
    return carry ? carry + answer : answer
};