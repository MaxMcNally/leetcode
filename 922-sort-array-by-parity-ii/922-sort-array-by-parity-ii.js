/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    //swap in place
    //let sorted = []; 
    let evenCounter = 0;
    let oddCounter = 1;
    while (evenCounter < nums.length)
    {
        if(nums[evenCounter] % 2 !== 0){
            while (nums[oddCounter] % 2 !== 0)
            {
                oddCounter += 2;
            }

            let tempOdd = nums[oddCounter];
            let tempEven = nums[evenCounter];
            nums[oddCounter] = tempEven;
            nums[evenCounter] = tempOdd;
            
        }
        evenCounter += 2;
    }
    return nums;
};