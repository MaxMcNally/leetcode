/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = n.toString().split("").reduce((memo,digit)=>{
        return memo + parseInt(digit)
    },0)
    let arr = n.toString().split("")
    let product = arr.slice(1).reduce((memo,digit)=>{
        return memo * parseInt(digit)
    },parseInt(arr[0]))
    return product - sum
};