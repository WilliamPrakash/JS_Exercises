/*
3. Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s) {
    let temp = ""
    let first = s[0]

    // Idea: while iterating through all characters in the string,
    // if the char matches the first char, 
    for (let i = 1; i < s.length; i++) {
        console.log(s[i])
        //let j = i
        while(s[i] != first) {
            console.log("s[i]: " + s[i])
            temp += s[i]
            i++
        }
        console.log(temp)
    }
    console.log(temp)

}


lengthOfLongestSubstring("abcabcbb")


