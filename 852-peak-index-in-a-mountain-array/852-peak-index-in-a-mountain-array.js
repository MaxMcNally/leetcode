/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let highest = -1
    let highestIndex = 0;
    let counter = 0;
    for(let peak of arr){
        if(peak > highest){
            highest = peak
            highestIndex = counter
        }
        counter++
    }
    return highestIndex
    
};