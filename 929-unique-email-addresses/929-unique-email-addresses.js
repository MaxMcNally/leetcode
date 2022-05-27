/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniques = {}
    for(email of emails){
        let address = email.split("@")[0];
        let domain = email.split("@").pop();
        let cleanEmail = address.replace(/\+.*/g,"").replace(/[.]/g,"") + "@" + domain;
        if(uniques[cleanEmail] === undefined){
            uniques[cleanEmail] = true;
        }
    }
    return Object.keys(uniques).length
};