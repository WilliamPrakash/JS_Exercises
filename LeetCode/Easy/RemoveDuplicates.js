//26. Remove Duplicates from Sorted Array
/*
Given an integer array nums sorted in ascending order, remove the duplicates in-place 
such that each unique element appears only once. The relative order of the elements should 
be kept the same. Then return the number of unique elements in nums.
    
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they
were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

let removeDuplicates = function(nums) {
    let prev = nums[0]-1
    //if it's like the same as the last number, remove it
    for (let i = 0; i < nums.length; i++) {
        if (prev != nums[i]) {
            prev = nums[i]
        } else {
            // Numbers equal each other, how many tho?
            let originalIndex = i
            let howMany = 1
            while (nums[i] == prev) {
                howMany++
                i++
            }
            nums.splice(originalIndex ,howMany)
            i = originalIndex
            console.log(nums)
        }
    }
    console.log(nums)

}

//[1,1,2]
//[0,0,1,1,1,2,2,3,3,4] -> [0,1,2,3,4]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

