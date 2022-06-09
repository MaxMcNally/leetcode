/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //for each string
    let output = []
    let map = {}
    for(let i = 0; i < strs.length; i++){
        let word = strs[i]
        let anagrams = [strs[i]]
        let ordered = strs[i].split("").sort().join()
        map[ordered] = map[ordered] ? map[ordered].concat([word]) : [word]
    }
    return Object.values(map)
};