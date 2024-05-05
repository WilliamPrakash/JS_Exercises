/*
3. Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s) {
    let i = 1
    let temp = s[0]
    let first = s[0]

    /* DISCLAIMER: this logic currently relies on the 
    beginning of a unique substring being the first char*/
    console.log(first)
    let x = s[i]
    console.log(x)
    while(s[i] !== first) {
        console.log("s[i]: " + s[i])
        temp += s[i]
        i++
    }
    //console.log(temp.length)
    return temp.length
}

lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbb")
lengthOfLongestSubstring("pwwkew") // doesn't work

