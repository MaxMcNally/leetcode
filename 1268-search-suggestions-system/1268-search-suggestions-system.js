/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let sortedProducts = products.sort()
    let output = []
    for(let i = 0; i < searchWord.length; i++){
        let match = searchWord.slice(0,i + 1)
        let arr = []
        for(let j = 0; j < sortedProducts.length; j++){
            if(sortedProducts[j].slice(0,i + 1) === match){
                arr.push(sortedProducts[j])
            }
            if(arr.length === 3){
                break
            }
        }
        output.push(arr)
        
    }
    return output
};