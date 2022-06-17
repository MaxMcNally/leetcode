/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let highestWealth = 0
    for(let i = 0; i < accounts.length; i++){
        let wealth = accounts[i].reduce((memo,val)=>{
            return memo + val
        },0)
        if(wealth > highestWealth){
            highestWealth = wealth
        }
    }
    return highestWealth
};