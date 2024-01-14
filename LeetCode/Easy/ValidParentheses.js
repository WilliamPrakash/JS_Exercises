
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
    let left = [], right = [], leftovers = []

    // Sort right and left brackets into their respective lists
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            left.push(s[i])
        }
        else if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
            right.push(s[i])
        }
        else { // Catch-all for any other characters -> do we need to account for these?
            leftovers.push(s[i])
        }
    }

    if (left.length != right.length) return false
    // "There is no way to stop or break a forEach() loop other than by throwing an exception."
    // https://stackoverflow.com/questions/34653612/what-does-return-keyword-mean-inside-foreach-function

    // Can't assume parenthesis are in 
    for(let i = 0; i < left.length; i++) {
        //console.log(right)
        //console.log(left)
        //console.log(left.pop())
        //console.log(right.shift())
        if (left.pop() !== right.shift()) return false
    }
    
    return true
};

let result1 = isValid("()")
console.log(result1)

let result2 = isValid("()[]{}")
console.log(result2)

let result3 = isValid("(]")
console.log(result3)
