/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pairs = 0
    let map = {}
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            
            pairs += map[nums[i]]
            map[nums[i]]++
        }
        else {
            map[nums[i]] = 1
        }
    }
    return pairs
};