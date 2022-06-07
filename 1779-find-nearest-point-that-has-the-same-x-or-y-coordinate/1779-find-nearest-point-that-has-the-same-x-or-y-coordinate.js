/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    function manhattanDistance(point1,point2){
        return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1])
    }
    
    let index = -1;
    let lowestDistance = Infinity;
    for(let i = 0; i < points.length; i++){
        if(points[i][0] === x || points[i][1] === y){
            //isValid
            if(manhattanDistance([x,y],points[i]) < lowestDistance){
                lowestDistance = manhattanDistance([x,y],points[i])
                index = i
            }
        }
    }
    return index
};