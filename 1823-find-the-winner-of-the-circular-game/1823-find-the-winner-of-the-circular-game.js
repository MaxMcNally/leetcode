/**
 * @param {number} n
 * @param {number} k
 * @return {number}
  [ 1,2,3,4,5,6 ] k = 5
          ^          
  
 */
var findTheWinner = function(n, k) {
    let friends = []
    for(let i = n; i > 0; i--){
        friends.push(i)
    }
    console.log(friends)
    while(friends.length > 1){
        for(let i = 0; i < k - 1; i++){
            friends.unshift(friends.pop())
        }
        friends.pop()
    }
    console.log(friends)
    return friends[0]
};