/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let num of nums){
        console.log(num)
        if(nums[Math.abs(num) - 1] > 0){
            nums[Math.abs(num) -1] *= -1
        }
    }
    let result = []
    for(let i = 1; i <= nums.length; i++){
        if(nums[i - 1] > 0){
            result.push(i)
        }
    }
    return result
};