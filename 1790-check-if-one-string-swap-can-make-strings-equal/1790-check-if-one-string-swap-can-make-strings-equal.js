/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) {
        return true
    }
    if(s1.split("").sort().join() !== s2.split("").sort().join()){
        return false
    }
    let count = 0;
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            count++
        }
    }
    return count === 2
};