/* 8. String to Integer (atoi)
    Convert a string to a 32-bit signed integer.
    Algorithm:
    Whitespace: Ignore any leading whitespace (" ").
    Signedness: Determine the sign by checking if the next character is '-' or '+',
    assuming positivity if neither present.
    Conversion: Read the integer by skipping leading zeros until a non-digit character 
    is encountered or the end of the string is reached. If no digits were read,
    then the result is 0.
    Rounding: If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], 
    then round the integer to remain in the range. Specifically, integers less than -2^31 
    should be rounded to -2^31, and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.
    Input: s = "42"
    Output: 42
    Input: s = " -042"
    Output: -42
    Input: s = "1337c0d3"
    Output: 1337
*/

var myAtoi = function(s) {
    // 1. Whitespace
    s = s.trim()

    // 2. Signedness
    // iterate looking for a sign. If no sign is found, keep going.
    // If a char is found, return 0.
    // If a 0 is found before any other ints, ignore.
    // If an int is found, keep going till a non-int is found.
    let sign = '+' // default is assumed to be positive
    s = Array.from(s)
    let numString = ''
    let i = 0
    console.log(s)

    /*
        ISSUE: how to remove leading 0s? We need to check if there's anything in numString.
        If not, remove the 0, right?
    */
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '+') {
            // do nothing, this is the default
        } else if (s[i] == '-') {
            sign = '-'
        // parseInt() will return NaN if not a number. Issue is, NaN is of type number...
        } else if ( !Number.isNaN(parseInt(s[i])) ) {
            // Check for leading 0s
            if (parseInt(s[i]) == 0 && numString == '') {
                // do nothing with the 0
                i++
            }
            // Keep parsing till you hit a non-number
            while ( !Number.isNaN(parseInt(s[i])) ) {
                numString += s[i]
                i++
                //console.log(numString)
            }
            console.log('No more ints to parse...')
            i = s.length
        } else if (typeof(s[i].charCodeAt(0)) == String) {
            // break loop?
            i = s.length
        }

    }

    // 3. Conversion
    if (numString != '') {
        numString = parseInt(numString)
        return numString
    } else {
        return 0 
    }

    // 4. Rounding

    //console.log()
}

// "words and 987" -> 987
myAtoi("0-1") // " -42", "42", "1337c0d3", "0-1", "words and 987"
