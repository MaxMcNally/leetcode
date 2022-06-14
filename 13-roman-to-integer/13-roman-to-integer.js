/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const values = {
        IV: 4,
        IX : 9,
        XL : 40,
        XC : 90,
        CD: 400,
        CM : 900,
        I : 1,
        V  : 5,
        X  : 10,
        L  : 50,
        C  : 100,
        D  : 500,
        M  : 1000
    }
    let result = 0;
    
    //"MCMXCIV"
    for(let i = 0; i < s.length; i++){
        if(s[i+1] && (values[s[i]+s[i+1]])){
            result += values[s[i]+s[i+1]];
            i++;
        }
        else if(values[s[i]]){
            result += values[s[i]];
        }
    }
    return result;
    
};