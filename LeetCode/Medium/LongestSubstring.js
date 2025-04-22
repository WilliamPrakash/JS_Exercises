/* 3. Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

/* UNSOLVED, this is code from user Karina_Olenina */
/* TODO: solve this my way */

function lengthOfLongestSubstring(s) {
    let set = new Set()
    let left = 0;
    let maxSize = 0;

    if(s.length === 0) return 0
    if(s.length === 1) return 1

    // main loop iterates through all characters
    for (let i = 0; i < s.length; i++) {
        // .has() returns a boolean
        // a b c a b c b b
        while(set.has(s[i])) {
            set.delete(s[left])
            left++
        }
        set.add(s[i])
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize
}

lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbb")
lengthOfLongestSubstring("pwwkew") // doesn't work

