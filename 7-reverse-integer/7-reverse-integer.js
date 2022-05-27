/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let isNeg = x > 0 ? false : true 
   let answer = parseInt(x.toString().split("").reverse().join(""))
   if(answer > Math.pow(2,31)){
      return 0;
    }
   return isNeg ? answer - answer * 2 : answer
};