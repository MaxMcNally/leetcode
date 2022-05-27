/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 
 */
var rotate = function(matrix) {
    function rotate(m){
        transpose(m)
        reflect(m)
    }
    function transpose(m){
        for(let i = 0; i < m.length; i++){
            for(let j = i + 1; j < m.length; j++){
                let temp = m[j][i]
                m[j][i] = m[i][j]
                m[i][j] = temp
            }
        }
    }
    function reflect(m){
        for(let i = 0; i < m.length; i++){
            for(let j = 0; j < Math.floor(m.length / 2); j++){
                let temp = m[i][j]
                m[i][j]  = m[i][m.length -j - 1]
                m[i][m.length -j - 1] = temp
            }
        }
    }
    rotate(matrix)
};