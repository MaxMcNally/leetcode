/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let seconds = 0;
    let pointer = 0;
    while(tickets[k] > 0){
        if(tickets[pointer] !== 0){
            seconds++
            tickets[pointer]--
        }
        pointer++
        if(pointer > tickets.length - 1){
            pointer = 0;
        }
    }
    return seconds
};