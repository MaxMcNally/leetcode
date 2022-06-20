/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
   let encode = new Set(words)
   for(let word of words){
       if (encode.has(word)){
           for(let i = 1; i < word.length; i++){
               encode.delete(word.slice(i))
               
            }
       }
       
   }
    return Array.from(encode).join().length + 1
};