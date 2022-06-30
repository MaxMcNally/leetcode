/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    let edgeMap = {}
    let ancestorMap = {}
    for(let i = 0; i < n; i++){
        edgeMap[i] = []
        ancestorMap[i] = []
    }
    for(let i = 0; i < edges.length; i++){
        edgeMap[edges[i][0]].push(edges[i][1])
    }
    console.log(edgeMap)
    console.log(ancestorMap)
    for(let i = 0; i < n; i++){
        let q = [...edgeMap[i]]
        let seen = {}
        while(q.length > 0){
            let next = q.shift()
            console.log(next)
            if(!seen[next]){
                seen[next] = true
                q.push(...edgeMap[next])
                ancestorMap[next.toString()].push(i)
            }
            
        }
    }
    console.log(ancestorMap)
    return Array.from(Object.values(ancestorMap))
};