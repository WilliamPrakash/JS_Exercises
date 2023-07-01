// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order



var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++ ) {
        for(let j = 0; j < nums.length; j++) {
            // must have two numbers
            if(i == j) {
                break
            }
            if(nums[i] + nums[j] == target) {
                console.log([i,j])
                return [i,j]
            }
        }
    }
}


let nums = [2, 7, 11, 15]
let target = 9
twoSum(nums, target)

nums = [3,2,4]
target = 6
twoSum(nums, target)

nums = [3,3]
target = 6
twoSum(nums, target)