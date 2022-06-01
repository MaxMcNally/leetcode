/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sums = [];
    let last = 0;
    for(let i = 0; i < nums.length; i++){
        sums.push(nums[i]+last)
        last = sums[i]
    }
    console.log(sums)
    return sums
};