/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 1 && nums[0] === target) return [0,0]
    let start = 0
    let end = nums.length - 1
    
    while(start <= end){
        //[2,2] target = 2
        // ^ ^
        //   ^
        let middle = Math.ceil((start + end)/2)
        if(nums[middle] === target){
            let right = 0
            let left = 0
            if(nums[middle + 1] !== undefined && nums[middle + 1] === target){
                right = 1
            while(nums[middle + right + 1]!== undefined && nums[middle + right + 1] === target){
                    right++
                }
            }
            if(nums[middle - 1]!== undefined && nums[middle - 1] === target){
                left = 1
                while(nums[middle - left - 1]!== undefined && nums[middle - left - 1] === target){
                    left++
                }
                
            }
            return [middle - left, middle + right]
            
        }
        else {

            if(nums[middle] > target){
                end = middle - 1
            }
            else {
                start = middle + 1
            }
        }
    }
    return [-1,-1]
};