/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let operationValues = {
        "++X" : 1,
        "X++" : 1,
        "--X" : -1,
        "X--" : -1
    }
    let x = 0
    for(let op of operations){
        x += operationValues[op]
    }
    return x
};