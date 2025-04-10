/* 8. String to Integer (atoi)
    Convert a string to a 32-bit signed integer.
    Whitespace: Ignore any leading whitespace (" ").
    Signedness: Determine the sign by checking if the next character is '-' or '+',
    assuming positivity if neither present.
    Conversion: Read the integer by skipping leading zeros until a non-digit character 
    is encountered or the end of the string is reached. If no digits were read,
    then the result is 0.
    Rounding: If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], 
    then round the integer to remain in the range. Specifically, integers less than -2^31 
    should be rounded to -2^31, and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.
    example 1: "42" -> 42
    example 2: " -042" => -42
    example 3 "1337c0d3" -> 1337
    example 4: "words and 987" -> 0
*/

var myAtoi = function(s) {
    // 1. Leading whitespace
    s = s.trim()

    // 2. Signedness
    let sign = '+'
    s = Array.from(s)
    let numString = ''

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '+') {
            // Sign is valid ONLY if we haven't parsed an int yet.
            if (numString != '') {
                i = s.length
            }
        } else if (s[i] == '-') {
            sign = '-'
            // Sign is valid ONLY if we haven't parsed an int yet.
            if (numString != '') {
                i = s.length
            }
        } else if ( !Number.isNaN(parseInt(s[i])) ) { // parseInt() will return NaN if not a number. Issue is, NaN is of type number.
            // Remove leading 0s
            while (parseInt(s[i]) == 0 && numString == '') {
                i++
            }
            // Keep parsing till you hit a non-number
            while ( !Number.isNaN(parseInt(s[i])) ) {
                numString += s[i]
                i++
                //console.log(numString)
            }
            //console.log('No more ints to parse.')
            i = s.length
        }
        // source: https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
        else if ( s[i].toLowerCase() != s[i].toUpperCase() || s[i] == "." && numString == '') {
            i = s.length
        }

    }

    // 3. Conversion 
    if (numString != '') {
        if (sign == '-') {
            numString = sign + numString
        }
        let parsedNum = parseInt(numString)
        // 4. Rounding
        if (parsedNum > (2**31) - 1) {
            return 2147483647
        } else if (parsedNum < -(2**31)) {
            return -2147483648
        }

        return parsedNum
    } else {
        return 0 
    }
}

//myAtoi("42")
//myAtoi(" -42")
//myAtoi("1337c0d3")
//myAtoi("0-1")
//myAtoi("words and 987")
//myAtoi("-91283472332") // expected: -2147483648
myAtoi("+-12")
