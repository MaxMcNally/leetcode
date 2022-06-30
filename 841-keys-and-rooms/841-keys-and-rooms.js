/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visitedRooms = {
        0 : true
    }
    let q = [...rooms[0]]
    let currentRoom = rooms.length - 1
    while(q.length > 0){
        let key = q.shift()
        if(visitedRooms[key] === undefined){
            visitedRooms[key] = true
            currentRoom--
            q.push(...rooms[key])
        }
    }
    return currentRoom === 0 || false
};