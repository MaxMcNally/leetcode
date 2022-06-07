/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let diffs = []
    arr.sort((a,b)=>{
        return a - b
    })
    console.log(arr)
    for(let i = 1; i < arr.length; i++){
        if(diffs.indexOf(arr[i] - arr[i-1]) === -1){
            diffs.push(arr[i] - arr[i-1])
        }
    }
    console.log(diffs)
    return diffs.length === 1
};