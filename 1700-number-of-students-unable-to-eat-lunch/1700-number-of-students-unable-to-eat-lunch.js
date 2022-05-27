/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while(students.length > 0){
        let foundMatch = false;
        for(let i = 0; i < students.length; i++){
            if(students[students.length - 1] === sandwiches[0]){
                students.pop()
                sandwiches = sandwiches.slice(1)
                foundMatch = true
            }
            else {
                students.unshift(students.pop())
            }
            
        }
        if(!foundMatch){
                return students.length
            }
        
    }
    return students.length
};