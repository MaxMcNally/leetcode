/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let map = {}
    let longerArray = nums1.length > nums2.length ? nums1 : nums2;
    let shorterArray = nums1.length > nums2.length ? nums2 : nums1;
    for(let i = 0; i < shorterArray.length; i++){
        map[shorterArray[i]] = map[shorterArray[i]] ? map[shorterArray[i]] + 1 : 1;
    }
    for(let i = 0; i < longerArray.length; i++){
        if(map[longerArray[i]] > 0){
            result.push(longerArray[i])
            map[longerArray[i]]--
        }    
    }
    console.log(map)
    return result;
};