/* 88. Merge Sorted Array
You are given two integer arrays nums1 and nums2,
sorted in ascending order, and two integers
m and n, representing the number of elements in
nums1 and nums2 respectively.

The final sorted array should not be
returned by the function, but instead be
stored inside the array nums1.

To accommodate this, nums1 has a length of m + n,
where the first m elements denote the elements
that should be merged, and the last n elements
are set to 0 and should be ignored. nums2
has a length of n.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
*/

"use strict";

var merge = function(nums1, m, nums2, n) {
    // Remove 0s from both arrays
    nums1 = nums1.filter(item => item != 0);
    nums2 = nums2.filter(item => item != 0);

    // Find the longer array to iterate over
    let longest = [];
    let shortest = [];
    if (nums1.length >= nums2.length) {
        longest = nums1;
        shortest = nums2;
    } else if (nums1.length < nums2.length) {
        longest = nums2;
        shortest = nums1;
    }
    nums1 = [];

    while (shortest.length != 0 && longest.length != 0) {
        // Compare elements in each array, adding the smaller one to nums1
        if (shortest[0] < longest[0]) {
            nums1.push( shortest.shift() );
        } else if (shortest[0] >= longest[0]) {
            nums1.push( longest.shift() );
        }

        console.log();
    }

    if (shortest.length != 0) {
        nums1 = nums1.concat(shortest);
    } else if (longest.length != 0) {
        nums1 = nums1.concat(longest);
    }


    console.log(nums1);
};

//merge([1,2,3,0,0,0], 3, [2,5,6], 3);
merge([0], 0, [1], 1);
