/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const letters = s.split("")
    if(!letters || letters.length < 1){
        return 0
    }
    const subStringLengths = []
    for(let i = 0; i < s.length; i++){
        let lettersSeen = {}
        let longest = 0
        for(let j = i; j < s.length; j++){
            if(lettersSeen[letters[j]] === undefined) {
                longest++;
                lettersSeen[letters[j]] = true;
            }
            else {
                subStringLengths.push(longest)
                break;
            }
        }   
        subStringLengths.push(longest)
        
    }
    return Math.max(...subStringLengths)
};