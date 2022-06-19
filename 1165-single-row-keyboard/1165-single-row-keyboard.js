/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let moves = 0;
    let lastIndex = 0;
    for(let i = 0; i < word.length; i++){
        let index = keyboard.split("").indexOf(word[i])
        let difference = Math.abs(lastIndex - index)
        lastIndex = index
        moves += difference
    }
    return moves
};