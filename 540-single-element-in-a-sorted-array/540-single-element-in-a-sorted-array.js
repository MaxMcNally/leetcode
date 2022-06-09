/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    //set start and end
    let start = 0; 
    let end = nums.length - 1
    let mid = Math.ceil((start + end)/2)
    while(nums.length > 1){
        //[1, 1, 3]
        // s
        //             e
        //       m
        
        if(nums[mid + 1] === nums[mid]){
            nums.splice(mid, 2)
        }
        else if(nums[mid - 1] === nums[mid]) {
            nums.splice(mid - 1, 2)
        }
        else {
            return nums[mid]
        }
        end = nums.length - 1
        start = 0
        mid = Math.ceil((start + end)/2)
    }
    return nums[0]
    };