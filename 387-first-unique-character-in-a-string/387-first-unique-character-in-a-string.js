/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap = {}
    for(let ch of s){
        charMap[ch] = charMap[ch] ? charMap[ch] +1 : 1 
    }
    let counter = 0
    for(let ch of s){
        if(charMap[ch] === 1){
            return counter
        }
        counter++
    }
    
    return -1;
};