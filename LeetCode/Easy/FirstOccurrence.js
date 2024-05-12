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
    //iterate over all chars in 'haystack'
    for(let i = 0; i < haystack.length; i++) {
        //find first char in haystack that equals the
        //first char of needle
        console.log(haystack[i])
        if (needle[0] == haystack[i]) {
            let startIndex = i
            //compare substrings
            let x = haystack.substring(startIndex,i + needle.length)
            if (needle === haystack.substring(startIndex,needle.length)) {
                return startIndex
            }
        }
    }
    return -1
}

//strStr('sadbutsad','sad')
strStr('hello','ll') //output is currently 2
