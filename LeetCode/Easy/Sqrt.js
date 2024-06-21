/* 69. Sqrt(x)
Given a non-negative integer x, return the
square root of x rounded down to the nearest
integer. The returned integer should
be non-negative as well.

You must not use any built-in exponent 
function or operator.

Input: x = 4
Output: 2

Input: x = 8
Output: 2

*/

function mySqrt(x) {
    // No need to check for negatives
    if(x == 0 || x == 1) {
        return x
    }
    // I could iterate through all numbers and see
    // which one squared is greater than the provided num
    let i = 0
    while(i*i <= x) {
        i++
    }
    //console.log(i-1)
    return i-1

}

console.log(mySqrt(4))
console.log(mySqrt(8))

