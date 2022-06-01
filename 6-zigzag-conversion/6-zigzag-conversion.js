/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows >= s.length || numRows === 1){
        return s
    }
    let result = ""
    for(let i = 0; i < numRows; i++){
        let jumps;
        let baseJumps = (numRows*2)-2
        if(i === 0 || i === numRows - 1){
            jumps = [baseJumps]
        }
        else {
            jumps = [baseJumps - 2 * i, baseJumps - (baseJumps - 2 * i)]
        }
        let start = i;
        let jump = 0
        while(s[start]){

            result += s[start]
            start += jumps[jump]
            if(jumps[jump + 1]){
                jump++
            }
            else {
                jump = 0
            }
        }   
    }    
    return result
};