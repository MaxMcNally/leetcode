/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


/*
               l         r
             [ 1 ][ 2 ][ 3 ][ 4 ]
t            [ 5 ][ 6 ][ 7 ][ 8 ]
b            [ 9 ][ 10][ 11][ 12]

for(let i = 0; i < right; i++){
    elements.push(matrix[top][i])
}
top++
//go top to bottom
for(let i = top; i < bottom; i++){
    elements.push(matrix[i][right])
}
right--
//go right to left
for(let i = right; i > left; i--){
    elements.push(matrix[bottom][i])
}
bottom--
go bottom to top
for(let i = bottom; i < top; i--){
    elements.push(matrix[i][left])
}
left++

*/
var spiralOrder = function(matrix) {
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1;
    let elements = []
    while(top <= bottom && left <= right){
        //go left to right
        for(let i = left; i <= right; i++){
            elements.push(matrix[top][i])
        }
        top++
        //go top to bottom
        for(let i = top; i <= bottom; i++){
            elements.push(matrix[i][right])
        }
        right--
        //go right to left
        if(top <= bottom){
            for(let i = right; i >= left; i--){
                elements.push(matrix[bottom][i])
            }
        }
        
        bottom--
        if(left <= right){
            //go bottom to top
            for(let i = bottom; i >= top; i--){
                elements.push(matrix[i][left])
            }
        }
        
        
        left++
        
    }
    return elements
};