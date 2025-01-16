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
    // Loop through the largest array going BACKWARDS
    // Compare each number from the same index
    
    if (nums1.length > nums2.length) {
        // If we do i < nums1.length, we'll run into an issue where the array element is empty
        for (let i = nums1.length - 1; i >= 0; i--) {
            // exit once nums2's index is -1
            if(n == 0) {
                return
            }

            if (nums2[n - 1] > nums1[m - 1]) {
                nums1[i] = nums2[n - 1]
                n--
            } else { // the value in nums2 is not greater than the last number in nums1
                // remove the number at nums1[i]
                nums1.splice(i,1)
                // iterate through nums1 till we find a number <= the value in nums2
                while (nums1[m - 1] > nums2[n - 1]) {
                    m--
                    i--
                }
                nums1.splice(i, 0, nums2[n - 1])
                n--
            }
        }
    } else {
        
        for (let i = 0; i < nums2.length; i++) {

        }
    }

};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
