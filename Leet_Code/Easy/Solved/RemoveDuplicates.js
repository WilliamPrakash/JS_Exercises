/* 
26. Given an int array sorted in asc order,
    remove the duplicates in-place such that each 
    unique element appears only once. The relative
    order of the elements should be kept the same.
    Then return the number of unique elements in
    nums.

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/

var removeDuplicates = function(nums) {
    nums.sort() // don't assume it's sorted
    // toSorted() doesn't mutate the original array
    
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] == nums[i+1]) {
            nums.splice(i,1)
        }
        console.log(nums)
    }
}

removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])



