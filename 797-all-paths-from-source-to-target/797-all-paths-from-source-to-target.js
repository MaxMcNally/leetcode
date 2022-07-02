/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let paths = []
    let dfs = (node, path = [0])=>{
        if(node === graph.length -1){
            paths.push(path)
        }
        else {
            let next = graph[node]
            for(let num of next){
                dfs(num,path.concat([num]))
            }
        }
    }
    dfs(0)
    return paths
};