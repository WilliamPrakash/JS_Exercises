/* 5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring
in s.

Naive approach: 
    Iterate over each char. Then expand the search by one
    on both sides. If match, keep going. If not, move onto 
    he next char.
    O(n^2)
Manacher's algorithm: */

// Naive approach
var longestPalindrome = function(s) {
    let sArray = s.split("");
    let retPalindrome = sArray.length == 1 ? s : "";
    let tempPalindrome = "";
    let ptrL, ptrR;

    for (let i = 1; i < sArray.length; i++) { // don't start on first char, there's no left
        // Go in each direction till a match isn't found
        ptrL = i - 1, ptrR = i + 1;
        tempPalindrome = sArray[i];
        // What about even numbers???
        while (ptrL > -1 && ptrR <= sArray.length) {
            // check either side independently for double chars
            if (sArray[ptrL] == sArray[i] && sArray[i] != sArray[ptrR]) {
                tempPalindrome = sArray[ptrL] + sArray[i];
                break;
            }
            if (sArray[ptrL] != sArray[i] && sArray[i] == sArray[ptrR]) {
                tempPalindrome = sArray[i] + sArray[ptrR];
                break;
            }

            if (sArray[ptrL] != sArray[ptrR]) {
                break;
            }
            tempPalindrome = sArray[ptrL] + tempPalindrome + sArray[ptrR];
            ptrL--;
            ptrR++;
        };

        if (tempPalindrome.length > retPalindrome.length) {
            retPalindrome = tempPalindrome;
        };
    }
    return retPalindrome;
};

//let res = longestPalindrome("aacabdkacaa");
//let res = longestPalindrome("babad"); // "bab" or "aba"
//let res = longestPalindrome("cbbd"); // "bb"
let res = longestPalindrome("aaaa"); // "aaaa"
//let res = longestPalindrome("bb"); // "bb"
//let res = longestPalindrome("a"); // "a"

console.log("break here")



/* This solution (don't even know if if fully works) times out in LeetCode
var longestPalindrome = function(s) {
    let sArray = s.split("");
    let currentLongestPalindrome = "";

    // i will be used to shift pointer1
    for (let i = 0; i < sArray.length; i++) {
        if (sArray.length == currentLongestPalindrome.length) {
            break;
        }
        // j will be used to shift pointer2
        for (let j = i + 1; j <= sArray.length; j++) {
            if ( CheckIfPalindrome(sArray.slice(i,j)) && 
                sArray.slice(i,j).length > currentLongestPalindrome.length) {
                currentLongestPalindrome = sArray.slice(i,j)
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
    while (s.length > 1) {
        if (s.shift() != s.pop()) {
            return false;
        }
        pointer1 += 1;
        pointer2 -= 1;
    }
    return true
};
*/