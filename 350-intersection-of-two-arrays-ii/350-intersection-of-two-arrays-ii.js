/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let longerArray = nums1.length > nums2.length ? nums1 : nums2;
    let shorterArray = nums1.length > nums2.length ? nums2 : nums1;
    for(let i = 0; i < longerArray.length; i++){
        if(shorterArray.indexOf(longerArray[i]) > -1){
            result.push(longerArray[i]);
            shorterArray.splice(shorterArray.indexOf(longerArray[i]), 1);
        }
    }
    return result;
};