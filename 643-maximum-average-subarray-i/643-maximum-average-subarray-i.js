/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let averages = [];
    let windowAvg = 0.0;
    let windowStart = 0;
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        windowAvg += nums[windowEnd]
        if(windowEnd >= k - 1){
            averages.push(windowAvg/k)
            windowAvg -= nums[windowStart]
            windowStart++
        }
    }
    return Math.max(...averages)
};