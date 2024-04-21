
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. */

const parenTable = {
    "(": ")",
    "[": "]",
    "{": "}"
}

var isValid = function(s) {
    let left = [], right = []

    // Can't have valid parentheses if there's an odd number of chars
    if (s.length % 2 != 0) { return false }

    // Sort parentheses
    for (let i = 0; i < s.length; i++) {

        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            left.push(s[i])
        }
        else if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
            right.unshift(s[i])
        }
    }
    console.log(left)
    console.log(right)/*
    console.log(parenTable[left.pop()])
    console.log(parenTable[right.pop()])*/

    // Compare parentheses
    for (let i = 0; i < left.length; i++) {
        if (parenTable[left.pop()] !== right.shift()) {
            return false
        }
    }
return true
}
//[()} - fail
//[]() - pass
//()[]{} - pass
//([)] - fail
let result1 = isValid("([)]")
console.log('Result 1: ' + result1)
