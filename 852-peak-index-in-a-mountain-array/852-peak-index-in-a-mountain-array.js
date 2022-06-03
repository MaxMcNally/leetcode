/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1
    while(start <= end){
        let middle = Math.ceil((start + end) / 2)
        if(arr[middle] < arr[middle + 1]){
            start = middle
        }
        else if (arr[middle] < arr[middle - 1]) {
            end = middle
        }
        else {
            return middle
        }
    }
};