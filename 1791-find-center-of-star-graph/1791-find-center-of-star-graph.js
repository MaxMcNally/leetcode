/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let edgeMap = {}
    for(let i = 0; i < edges.length; i++){
        if(edgeMap[edges[i][0]]) {
            return edges[i][0]
        }
        else {
            edgeMap[edges[i][0]] = 1
        }
        if(edgeMap[edges[i][1]]){
            return edges[i][1]
        }
        else {
            edgeMap[edges[i][1]] = 1
        }
    }
};