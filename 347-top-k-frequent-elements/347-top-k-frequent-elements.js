/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(arr, k) {
    let map = {};
    for(let i = 0; i < arr.length; i++){
        map[arr[i]] = map[arr[i]] + 1 || 1;
    }
    let distribution = []
    for (let key in map){
        distribution.push({index:key, count:map[key]});
    }
    distribution.sort((a,b) => b.count - a.count);
    return distribution.slice(0, k).map((el)=>el.index)
};