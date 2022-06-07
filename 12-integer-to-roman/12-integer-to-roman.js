/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let str = ''
    let numberArray = num.toString().split('').reverse()
    console.log(numberArray)
    
    let thousands = numberArray[3]
    if(thousands){
        str = "M".repeat((thousands))
        console.log(str)
    }
    
    let hundreds = numberArray[2]
    if(hundreds){
        if(hundreds === '9'){
            str = str + 'CM'
        }
        else if(hundreds === '4'){
            str = str + 'CD'
        }
        else if( parseInt(hundreds) >= 5  ){
            str = str + "D" + "C".repeat(parseInt(hundreds) - 5)
        }
        else {
            str = str + "C".repeat(parseInt(hundreds))
        }
        console.log(str)
    }
    
    let tens = numberArray[1]
    if(tens){
        if(tens === '9'){
            str = str + 'XC'
        }
        else if(tens === '4'){
            str = str + 'XL'
        }
        else if(parseInt(tens) >= 5){
            str = str + 'L' + 'X'.repeat(parseInt(tens) - 5)
        }
        else {
            str = str + 'X'.repeat(parseInt(tens))
        }
        console.log(str)
    }
    let ones = numberArray[0]
    if(ones){
        if(ones === '9'){
            str = str + 'IX'
        }
        else if(ones === '4'){
            str = str + 'IV'
        }
        else if(parseInt(ones) >= 5){
            str = str + "V" + "I".repeat(parseInt(ones) - 5)
        }
        else {
            str = str + "I".repeat(parseInt(ones))
        }
        console.log(str)
    }
    return str
};