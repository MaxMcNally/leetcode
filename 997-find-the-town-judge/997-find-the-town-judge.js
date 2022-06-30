/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let edgeMap = {}
    for(let i = 1; i <= n; i++){
        edgeMap[i] = []
    }
    for(let i = 0; i < trust.length; i++){
        edgeMap[trust[i][0]].push(trust[i][1])
    }
    let noTrust
    for (const [key, value] of Object.entries(edgeMap)) {
        if(value.length === 0) noTrust = parseInt(key)
    }
    if(noTrust){
        for (const [key, value] of Object.entries(edgeMap)) {

            if(parseInt(key) !== noTrust && !value.includes(noTrust)) return -1
        } 
        return noTrust
    }
    return -1
};