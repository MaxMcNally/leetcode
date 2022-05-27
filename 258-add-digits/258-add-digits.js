/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    const digits = num.toString().split("")
    let sum = 0;
    for(let i = 0;i < digits.length;i++){
        sum += parseInt(digits[i])
    }
    if(sum.toString().length > 1){
        return addDigits(sum)
    }
    return sum
};