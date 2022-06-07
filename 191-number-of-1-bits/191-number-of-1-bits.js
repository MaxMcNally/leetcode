/**
 * @param {number} n - a positive integer
 * @return {number}
 
    00000000000000000000000000001011 = 11
    
    00000000000000000000000010000000 = 16
    
 */
var hammingWeight = function(n) {
    let sum = 0
    while(n !== 0){
        sum++
        n &= (n - 1)
    }
    return sum
};