/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product = nums.reduce((memo,num)=>{
        return memo * num
    },1)
    console.log(product)
    function signFunc(num){
        if(num > 0){
            return 1
        }
        if(num < 0){
            return -1
        }
        return 0
    }
    return signFunc(product)
};