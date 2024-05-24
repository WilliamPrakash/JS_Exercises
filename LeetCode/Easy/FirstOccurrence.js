/*
28. Given two strings needle and haystack, return the index 
of the first occurrency of needle in haystack, or -1 if
needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/


var strStr = function(haystack, needle) {
    // wow, that was easy
    let x = haystack.indexOf(needle)
    return x
}

//strStr('sadbutsad','sad')
strStr('hello','ll') //output is currently 2
