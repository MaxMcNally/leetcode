/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let digits = num.toString().split("")
    //[2,3,9,2]
    let pairs = digits.sort()
    return parseInt(pairs[0] + pairs[2]) + parseInt(pairs[1] + pairs[3])
    
    
};