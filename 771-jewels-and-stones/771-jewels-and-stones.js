/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = {}
    let total = 0
    for(let i = 0; i < jewels.length; i++){
        map[jewels[i]] = true
    }
    for(let j = 0; j < stones.length; j++){
        if(map[stones[j]]){
            total++
        }
    }
    return total
};