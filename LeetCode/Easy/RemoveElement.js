/*
27. Given an integer array nums and an integer val, 
remove all occurrences of val in nums in-place. 
The order of the elements may be changed. 
Then return the number of elements in nums which 
are not equal to val.
*/

var removeElement = function(nums, val) {
    let count = 0
    for (var i = 0; i < nums.length; i++) {
        while (nums[i] == val) {
            count += 1
            nums.splice(i,1)
        }
    }
    console.log(count)
    console.log(nums)
}

removeElement([3,2,2,3], 3)
removeElement([0,1,2,2,3,0,4,2], 2)
