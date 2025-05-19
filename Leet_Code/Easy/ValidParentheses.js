
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. */

const parenTable = {
    "(": ")",
    "[": "]",
    "{": "}"
}

var isValid = function(s) {
    let stack = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') { stack.push(')'); }
        else if (s[i] == '[') { stack.push(']'); }
        else if (s[i] == '{') { stack.push('}'); }
        // gets hit on closing brackets
        else if (stack.length == 0 || s[i] != stack.pop()) { return false; }
    }
    
    return stack.length == 0
}
//[()} - fail
//[]() - pass
//()[]{} - pass
//([)] - fail
let result1 = isValid("()[]{}")
console.log('Result 1: ' + result1)
