/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 [
    [1][2][3] 
    [4][5][6]
    [7][8][9]
 ]
 
 */
var rotate = function(matrix) {
    let tempArray = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            tempArray.push(matrix[i][j])
        }
    }
    console.log(tempArray)
    let arrayCounter = 0;
    for(let i = matrix.length - 1; i >= 0; i--){ //col 3
        for(let j = 0; j < matrix.length; j++){ //row 0
            matrix[j][i] = tempArray[arrayCounter]
            arrayCounter++
        }
    }
};