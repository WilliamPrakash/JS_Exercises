/* 8. String to Integer (atoi)
    Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
    The algorithm for myAtoi(string s) is as follows:
    Whitespace: Ignore any leading whitespace (" ").
    Signedness: Determine the sign by checking if the next character is '-' or '+',
    assuming positivity if neither present.
    Conversion: Read the integer by skipping leading zeros until a non-digit character 
    is encountered or the end of the string is reached. 
    If no digits were read, then the result is 0.
    Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], 
    then round the integer to remain in the range. Specifically, integers less than -231 
    should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
    Input: s = "42"
    Output: 42
    Input: s = " -042"
    Output: -42
    Input: s = "1337c0d3"
    Output: 1337
*/

var myAtoi = function(s) {
    // Int range: x < -1*(2**31) || x > (2**31) - 1

    // 1. Whitespace
    s = s.trim()

    s = Array.from(s)

    s.forEach(x => {
        
    })

    // 2. Signedness

    // 3. Conversion

    // 4. Rounding

    console.log()
}

myAtoi(" -42")
