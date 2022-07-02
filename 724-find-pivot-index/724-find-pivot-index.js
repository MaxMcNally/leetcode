/**
 * @param {number[]} nums
 * @return {number}
 
 
 
 [1,7,3,6,5,6]
  ^   ^
left = 1
right = 20

 
 */
var pivotIndex = function(nums) {
    let left = 0
    let right = nums.reduce((memo,num)=>{
        return memo + num
    },0)

    let leftP = 0
    let rightP = 1
    right -= nums[0]
    console.log(left,right)
    while(left !== right && leftP < nums.length){
        console.log(left,right)
        left += nums[leftP]
        leftP++
        right -= nums[rightP]
        rightP++
       
    }
    console.log(left,right)
    if(left === right) return leftP
    return -1
};