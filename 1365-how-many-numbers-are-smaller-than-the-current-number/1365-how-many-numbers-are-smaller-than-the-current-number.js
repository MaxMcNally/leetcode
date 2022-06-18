/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let answers = []
    for(let i = 0; i < nums.length; i++){
        answers.push(nums.filter((num)=>{
            return num < nums[i]
        }).length)
    }
    return answers
};