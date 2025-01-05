/* 88. Merge Sorted Array
You are given two integer arrays nums1 and nums2, 
sorted in ascending order, and two integers 
m and n, representing the number of elements in 
nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array 
sorted in non-decreasing order.

The final sorted array should not be 
returned by the function, but instead be 
stored inside the array nums1. To accommodate 
this, nums1 has a length of m + n, where 
the first m elements denote the elements 
that should be merged, and the last n elements 
are set to 0 and should be ignored. nums2 
has a length of n.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
*/


var merge = function(nums1, m, nums2, n) {
    // Remove 0s
    nums1 = nums1.filter(x => x !== 0)
    nums2 = nums2.filter(x => x !== 0)

    // Iterate over each int in nums1
    for (let i = 0; i < nums1.length; i++){
        // Find all ints in num2 that are equal to or less than i+1 and splice it
        let j = 0
        while (nums2[j] <= nums1[i+1]){
            nums1.splice(i+1, 0, nums2[j]) // index, how many elements to replace, value to insert/replace
            nums2.shift() // https://stackoverflow.com/questions/29605929/remove-first-item-of-the-array-like-popping-from-stack
            i++
            console.log()
        }

        // If you've hit the end of nums1, and there's still numbers in nums2
        // they need to be appended on the end of nums1
        if (i == nums1.length - 1 && nums2.length !== 0) {
            nums2.forEach(x => {
                nums1.push(x)
            })
            // Force exit
            break
        }
        console.log(nums1)
    }
    console.log(nums1)
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
