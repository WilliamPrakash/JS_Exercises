
// given an integer x, return true if x is a palindrome, and false otherwise

var isPalindrome = function(x) {
    if(x < 0) return false
    else if(x.toString().length == 1) return true
    // .map() creates a new array populated with the results of
    // calling a provided function on every element in the calling array
    // Number() constructor creates Number objects. When called as a
    // function, it returns primitave value of type number
    let y = Array.from(x.toString()).map(Number)
    if(y.length % 2 == 1) {
        let midIndex = Math.floor(y.length/2)
        y.splice(midIndex, 1)
    }
    while(y.length > 0) {
        if(y.shift() != y.pop()) return false
    }
    return true
}

let x = 121
isPalindrome(x)

x = -121
isPalindrome(x)

x = 10
isPalindrome(x)
