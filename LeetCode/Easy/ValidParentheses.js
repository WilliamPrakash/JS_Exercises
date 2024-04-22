
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. */

const parenTable = {
    "(": ")",
    "[": "]",
    "{": "}"
}

var isValid = function(s) {
    let left = []

    // Can't have valid parentheses if there's an odd number of chars
    if (s.length % 2 != 0) { return false }

    // Sort parentheses
    for (let i = 0; i < s.length; i++) {

        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            left.push(s[i])
        } 
        else if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
            // When you encounter a closing bracket, check if the top of the stack was the opening for it.
            // If yes, pop it from the stack. Otherwise, return false.
            //console.log(s[i])
            if (left[0] == s[i]) {
                //parenTable[left.pop()] !== right.shift()
                left.pop()
            } else { return false }
            
        }
    }
    
return true
}
//[()} - fail
//[]() - pass
//()[]{} - pass
//([)] - fail
let result1 = isValid("()")
console.log('Result 1: ' + result1)
