/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    if(logs.length < 2) {
        return logs
    }
    let letters = []
    let digits = []
    for(let i = 0; i < logs.length; i++){
        if(isNaN(parseInt(logs[i].split(" ")[1]))){
            //is letter
            let copy = logs[i].split(' ').reverse()
            let id = copy.pop()
            let string = copy.reverse().join(" ")
            letters.push({
                id,
                string
            })
            
            
        }
        else {
            digits.push(logs[i])
        }
        
    }
    letters.sort((a,b) => {
        if(a.string === b.string){
            if(a.id < b.id){
                return -1
            }
            else if(a.id > b.id){
                return 1
            }
            else {
                return 0
            }
        }
        else {
            if(a.string < b.string){
                return -1
            }
            else if(a.string > b.string){
                return 1
            }
            else {
                return 0
            }
        }
    })

    let newLetters = letters.map((letter) => {
        return letter.id + " " + letter.string
    })

    return [...newLetters,...digits]
};