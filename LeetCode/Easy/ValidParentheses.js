
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/*
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
*/


var isValid = function(s) {
    // let left, right, leftovers = [] // Does not work. left and right are considered to be undefined
    let left = [], right = [], pairs = [], leftovers = []

    // Process 
    for (let i = 0; i < s.length; i++) {
        switch(s[i]) {
            // If there's an opening , check for a pair
            // Should I be using a 2d list for pairs? Or did I do enough validating
            // while filtering them into pairs[] ?
            case '(':
                if (s[i+1] == ']') {
                    pairs.push(s[i], s[i + 1])
                    i++
                } else {
                    left.push(s[i])
                }
                break
            case '[':
                if (s[i+1] == ']')  {
                    pairs.push(s[i], s[i + 1])
                    i++
                } else {
                    left.push(s[i])
                }
                break
            case '{':
                if (s[i+1] == '}')  {
                    pairs.push(s[i], s[i + 1])
                    i++
                } else {
                    left.push(s[i])
                }
                break
            case ')':
                right.push(s[i])
                break
            case ']':
                right.push(s[i])
                break
            case '}':
                right.push(s[i])
               break
            default: // ?
                leftovers.push(s[i])
                break
        }

    }

    console.log(left)
    console.log(right)
    console.log(pairs)

    // Check pairs if there's any
    if(pairs.length > 0) {
        // check to see if
    }

    if (left.length != right.length) return false
    // "There is no way to stop or break a forEach() loop other than by throwing an exception."
    // https://stackoverflow.com/questions/34653612/what-does-return-keyword-mean-inside-foreach-function

    // Can't assume parenthesis are perfectly split ({})
    // Might be pairs (){}
    for(let i = 0; i < left.length; i++) {
        if (left.pop() !== right.shift()) return false
    }
    
    return true
};

let result1 = isValid("()")
console.log('Result 1: ' + result1)

let result2 = isValid("()[]{}")
console.log('Result 2: ' + result2)

let result3 = isValid("(]")
console.log('Result 3: ' + result3)
