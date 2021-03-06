/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>{
        return a - b
    })
    let diff = arr[1] - arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] - arr[i-1] !== diff){
            return false
        }
    }
    return true
};