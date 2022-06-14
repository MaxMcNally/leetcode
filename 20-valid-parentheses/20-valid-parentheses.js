/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    if(s.length < 2 || s.length % 2 > 0){
        return false
    }
    let complements = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    const stack = [];
    let counter = 0;
    while(counter < s.length){
        const letter = s.charAt(counter); //"("
        if(complements[letter]){
            stack.push(complements[letter]) //stack = [")"]
        }
        else {
            const last = stack[stack.length - 1] //")"
            if(last && last === letter){
                stack.pop()
            }
            else {
                return false
            }
        }
        counter++
    }
    return stack.length === 0
};