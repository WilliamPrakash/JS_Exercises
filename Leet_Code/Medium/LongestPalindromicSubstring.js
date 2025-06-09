/* 5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring
in s.

Expansion from center: 
    Iterate over each char. Then expand the search by one
    on both sides. If match, keep going. If not, move onto 
    he next char.
    O(n^2)
Manacher's algorithm: */

// Approach: Expansion from center
var longestPalindrome = function(s) {
    if (s.length <= 1) { return s }

    let sArray = s.split("");
    let retPalindrome = "";
    let tempPalindrome = "";
    let ptrL, ptrR;

    /* For each index:
    -Try to expand a palindrome of odd length (i as center)
    -Try to expand a palindrome of even length (i and i+1 as center) */

    for (let i = 0; i < sArray.length; i++) {
        // Need to run all this twice for both odd and even length
        for (let j = 0; j < 2; j++) { // j = 0 is odd, j = 1 is even
            tempPalindrome = "";
            ptrL = i;
            ptrR = i + j;
            // Go in each direction till a match isn't found
            while (ptrL > -1 && ptrR <= sArray.length) {
                if (sArray[ptrL] != sArray[ptrR]) {
                    break;
                }
                tempPalindrome = ptrL == ptrR ? sArray[ptrL] : sArray[ptrL] + tempPalindrome + sArray[ptrR];
                ptrL--;
                ptrR++;
            }

            if (tempPalindrome.length > retPalindrome.length) {
                retPalindrome = tempPalindrome;
            }
        }
    }

    return retPalindrome;
};

//let res = longestPalindrome("aacabdkacaa");
//let res = longestPalindrome("babad"); // "bab" or "aba"
//let res = longestPalindrome("cbbd"); // "bb"
//let res = longestPalindrome("aaaa"); // "aaaa"
let res = longestPalindrome("ccd"); // "bb"
//let res = longestPalindrome("bb"); // "bb"
//let res = longestPalindrome("a"); // "a"

console.log("break here")
