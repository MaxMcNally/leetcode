/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let strs = nums.join("").split("0")
    let longest = ""
    for(let str of strs){
        if(str.length > longest.length){
            longest = str
        }
    }
    return longest.length
};