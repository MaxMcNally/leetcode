/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) {
        return true
    }
    let count = 0;
    let letterMap = {}
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            letterMap[s1[i]] = s2[i]
            count++
        }
    }
    let match = true
    for(let value of Object.values(letterMap)){
        if(letterMap[value] === undefined){
            match = false
        }
    }
    return count === 2 && match
};