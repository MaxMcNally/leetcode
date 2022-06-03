/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 
 [] [] [] [] []
 [] [1][] [] []
 [] [] [] [] []
 [] [] [] [2][]
 [] [] [] [] []
 
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let width = (col2 - col1) + 1
    let height = (row2 - row1) + 1
    let total = width * height
    let col = 0;
    let row = 0;
    let sum = 0;
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            sum+=this.matrix[row1 + i][col1 + j]
        }
    }
    return sum
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */