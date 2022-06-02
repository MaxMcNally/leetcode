/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let min = Infinity
  let max = -Infinity
  let total = salary.length - 2
  let sum = 0
  for(let s of salary){
      if(s > max){
          max = s
      }
      if(s < min){
          min = s
      }
  }
    for(let s of salary){
        if(s !== max && s !== min){
            sum += s
        }
    }
    return sum/total
};