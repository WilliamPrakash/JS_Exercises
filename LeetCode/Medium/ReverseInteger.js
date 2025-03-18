/* Problem 7. Reverse Integer
    Given a signed 32-bit integer x, return x with its digits reversed. 
    If reversing x causes the value to go outside the signed 32-bit 
    integer range, then return 0.
    Input: x = 123
    Output: 321
    Input: x = -123
    Output: -321
*/

var reverse = function(x) {
    let isNegative = x < 0
    isNegative ? x = x * -1 : null

    let xArray = Array.from(x.toString())
    let xStringReversed = ""

    for (i = xArray.length - 1; i >= 0; i--) {
        xStringReversed += xArray[i].toString()
    }
    xStringReversed = parseInt(xStringReversed)

    isNegative ? xStringReversed = xStringReversed * -1 : null
    if (xStringReversed < -1*(2**31) || xStringReversed > (2**31) - 1) {
        return 0
    }
    return xStringReversed
}

//2,147,483,647
reverse(1,534,236,469)
