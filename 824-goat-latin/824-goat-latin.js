/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let s = sentence.split(" ")
    let aCounter = 1
    let result = []
    for(let word of s){
        if(["a","e","i","o","u"].indexOf(word[0].toLowerCase()) > -1){
            word = word += "ma"
        }
        else {
            word = word.slice(1) + word[0] + "ma"
        }
        word += "a".repeat(aCounter)
        aCounter++
        result.push(word)
    }
    return result.join(" ")
};