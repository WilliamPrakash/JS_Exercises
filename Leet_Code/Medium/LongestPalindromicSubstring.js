/* 5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring
in s. */

var longestPalindrome = function(s) {
    /* Use two pointers.
    Keep first pointer at beginning char
    Move second pointer over each following char
    After each movement, pass string in pointers to check function
    If a valid palindrome, add to palindrome string */
    let sArray = s.split("");
    //let pointer1 = 0, pointer2 = 0;
    let currentLongestPalindrome = "";

    // i will be used to shift pointer1
    for (let i = 0; i < sArray.length; i++) {

        // j will be used to shift pointer2
        for (let j = i + 1; j <= sArray.length; j++) {
            if ( CheckIfPalindrome(sArray.slice(i,j)) && 
                sArray.slice(i,j).length > currentLongestPalindrome.length) {
                currentLongestPalindrome = sArray.slice(i,j)//.join("")
            }
        }

    }
    if (currentLongestPalindrome.length <= 1) {
        return currentLongestPalindrome.toString();
    } else {
        return currentLongestPalindrome.join("");
    }
    
};

function CheckIfPalindrome(s) {
    let pointer1 = 0, pointer2 = s.length - 1;
    //console.log(s);
    while (s.length > 1) {
        if (s.shift() != s.pop()) {
            return false;
        }
        pointer1 += 1;
        pointer2 -= 1;
    }

    return true
};

//let res = longestPalindrome("babad"); // "bab" or "aba"
//let res = longestPalindrome("cbbd"); // "bb"
let res = longestPalindrome("a"); // "a"

console.log("break here")