/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
if(nums.length < 2){
        return nums
    }
    let p1 = 0, p2 = 1;
    while(p2 < nums.length){
        if(nums[p1] === 0){
            if(nums[p2] !== 0){
                let temp = nums[p1]
                nums[p1] = nums[p2]
                nums[p2] = temp;
                p1++
                p2++
            }
            else {
                while(nums[p2] === 0){
                    p2++
                }
                if(nums[p1]){
                    let temp = nums[p1]
                    nums[p1] = nums[p2]
                    nums[p2] = temp;
                    p1++
                }
                
            }
        }
        else {
            
            p2++
            p1++
        }
    }
};