/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let target = []
  for(let i = 0; i < nums.length; i++){
      if(target[index[i]] !== undefined){
          target = insertAt(target,index[i],nums[i])
      }
      else {
          target[index[i]] = nums[i]
      }
      
  }
    return target
};

var insertAt = function(arr,index,val){
    return arr.slice(0,index).concat([val]).concat(arr.slice(index)) 
}

