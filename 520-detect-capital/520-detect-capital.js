/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    //Easy way
    return word.toUpperCase() === word ||(word[0].toUpperCase() === word[0]) && word.slice(1).toLowerCase() === word.slice(1) || word.toLowerCase() === word
    
    //Harder way using ascii table comparisons
    let upper = 0;
    for(let i = 0; i < word.length; i++)
    {
        if("Z".charCodeAt(0) - word[i].charCodeAt(0) >= 0)
        {   
            upper++;
        }
    }
    return upper === 0 
    || upper === word.length 
    || (upper === 1 && "Z".charCodeAt(0) - word[0].charCodeAt(0) >= 0);
};