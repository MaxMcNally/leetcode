/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let moves = 0;
    let lastIndex = 0;
    for(let i = 0; i < word.length; i++){
        //"cba"
        let index = keyboard.split("").indexOf(word[i]) //0
        let difference = Math.abs(lastIndex - index) //1 - 0 = 1
        lastIndex = index //0
        moves += difference //[2,1,1] 
    }
    return moves
};