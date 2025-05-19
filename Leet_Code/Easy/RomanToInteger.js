/* Roman numerals are represented by seven different symbols: 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
Given a roman numeral, convert it to an integer */

function romanToInt(str) {
    let charArray = []
    let total = 0
    // iterate over each char and throw it into an array
    for(let i = 0; i < str.length; i++) {
        charArray.push(str.charAt(i))
    }

    for(let i = 0; i < charArray.length; i++) {
        // check to see if the current value is less than the next value
        if(valueTable[charArray[i]] < valueTable[charArray[i+1]]) {
            total += (valueTable[charArray[i+1]] - valueTable[charArray[i]])
            i++
        } else {
            total += valueTable[charArray[i]]
        }
        
    }
    console.log(total)
    return total
}

const valueTable = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

let x = 'IV'
romanToInt(x)

x = 'LVIII'
romanToInt(x)

x = 'MCMXCIV'
romanToInt(x)
