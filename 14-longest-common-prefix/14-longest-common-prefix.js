/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //find the shortest string, this is the longest possible prefix
    let shortestLength = Infinity
    let shortestStr = ''
    strs.forEach((str)=>{
        if(str.length < shortestLength){
            shortestLength = str.length
            shortestStr = str
        }
    })
    //for each [0-i] letters in shortest string, look at every other string to see if that substring exists
    //if it does, update longest match to that match
    let longestMatch = ''
    for(let i = 0; i < shortestStr.length; i++){
        let match = shortestStr.slice(0,i + 1)
        for(let j = 0; j < strs.length; j++){
            if(strs[j] !== shortestStr){
                if(strs[j].indexOf(match) !== 0){
                    return longestMatch
                }
            }
        }
        longestMatch = match
    }
    return longestMatch
}