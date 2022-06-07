/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 
 
 Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

    Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

    Example 1:

    Input: arr = [1,0,2,3,0,4,5,0]
    Output: [1,0,0,2,3,0,0,4]
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
    
 */
var duplicateZeros = function(arr) {
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        arr2.push(arr[i])
        if(arr[i] === 0){
            //shift right, add zero
            arr2.push(arr[i])
        }
    }
    for(let j = 0; j < arr.length; j++){
        arr[j] = arr2[j]
    }
};