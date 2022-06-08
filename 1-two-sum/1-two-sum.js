/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length < 2) return null
    const diffMap = {}
    for(let i = 0; i < nums.length; i++){
        let currentValue = nums[i];
        if(diffMap[currentValue] !== undefined){
            return [diffMap[currentValue],i]
        }
        else {
            diffMap[target - currentValue] = i;
        }
    }
    return null
};