/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let vowels = {
        a: true,
        e: true,
        i : true,
        o: true,
        u: true
    }
    let str = ''
    for(let i = 0; i < s.length; i++){
        if(!vowels[s[i]]){
            str += s[i]
        }
    }
    return str
};