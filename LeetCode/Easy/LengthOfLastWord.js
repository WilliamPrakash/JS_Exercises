
/*
58. Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Input: s = "Hello World"
Output: 5

Input: s = "   fly me   to   the moon  "
Output: 4

Input: s = "luffy is still joyboy"
Output: 6
*/

function lengthOfLastWord(s) {
    //start at the end
    let total = 0
    //remove any whitespace at the front+end
    s = s.trim()

    for(let i = s.length-1; i >= 0; i--) {
        if (s[i] != ' ') {
            total++
        } else {
            break
        }
    }
    return total
}

console.log(lengthOfLastWord('luffy is still joyboy'))
console.log(lengthOfLastWord('  fly  me  to  the  moon  '))
