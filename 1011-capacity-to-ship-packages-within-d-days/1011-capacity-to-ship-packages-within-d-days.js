/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function checkDays(w,d,weights){
  let weight = 0
  let numDays = 1
  for(let i = 0; i < weights.length; i++){
      weight += weights[i]
      if(weights[i + 1] !== undefined && weight + weights[i + 1] > w){
          numDays++
          weight = 0
      }
  }
  if(numDays <= d) return true
  return false
}


var shipWithinDays = function(weights, days) {
  
  let minWeight = Math.max(...weights)
  while(checkDays(minWeight, days, weights) === false){
      minWeight++
  }
    return minWeight
};