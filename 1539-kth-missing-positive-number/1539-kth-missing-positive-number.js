/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let nums = [];
    for(let i = 1; i <= arr.slice(-1)[0] + k; i++){
        nums.push(i)
    }
    for(let j = 0; j < arr.length; j++){
        console.log("Removing", arr[j])
        nums.splice(nums.indexOf(arr[j]),1)
        console.log(nums)
    }
    return nums[k-1]
    
};