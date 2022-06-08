/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = {}
    for(let i = 0; i < s.length; i++){
      map[s[i]] = map[s[i]] + 1 || 1
    }
    for(let j = 0; j < t.length; j++){
      if(!map[t[j]]){
        return t[j]
      }
        else {
            if (map[t[j]] === 1) {
                map[t[j]] = undefined
            
            }
            else {
                map[t[j]]--
            }
        }
    }
    return null
};