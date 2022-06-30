/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(source === destination) return true
    let edgeMap = {}
    for(let i = 0; i < edges.length; i++){
        edgeMap[edges[i][0]] = edgeMap[edges[i][0]] ? edgeMap[edges[i][0]].concat([edges[i][1]]) : [edges[i][1]]
        edgeMap[edges[i][1]] = edgeMap[edges[i][1]] ? edgeMap[edges[i][1]].concat([edges[i][0]]) : [edges[i][0]]
    }
    let q = edgeMap[source]
    let seen = {
        
    }
    seen[source] = true
    while(q.length > 0){
        let next = q.shift()
        if(next === destination) return true
        if(seen[next] === undefined){
            seen[next] = true
            if(edgeMap[next] === undefined) return false
            q.push(...edgeMap[next])      
        }

        
    }
    return false
}