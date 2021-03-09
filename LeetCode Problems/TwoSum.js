// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order

var nums = [2,7,11,15]
var target = 9

function TwoSum(nms, trgt) {
    let lessThan = []
    // filter out any values that can't possibly help
    nms.forEach(nm => {
        if(nm < trgt){
            lessThan.push(nm)
        }
    })
    console.log(lessThan)
    // loop through
    let j = 0;
    for(let i = 0; i < lessThan.length; i++){
        let test = lessThan[i]
        // loop through
        i++;
        while(i < lessThan.length) {
            if (lessThan[i] + test == trgt) {
                console.log("Found it!")
                i++
            } else {
                // something that doesn't involve adding to O(n) complexity
            }
        }
    }
}

TwoSum(nums, target)