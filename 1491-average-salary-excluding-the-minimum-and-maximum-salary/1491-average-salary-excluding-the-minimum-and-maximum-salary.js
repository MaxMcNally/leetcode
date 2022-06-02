/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let min = Math.min(...salary)
  let max = Math.max(...salary)
  let total = salary.length - 2
  let sum = 0
    for(let s of salary){
        if(s !== max && s !== min){
            sum += s
        }
    }
    return sum/total
};