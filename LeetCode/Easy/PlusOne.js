/*
66. You are given a large integer represented as 
an integer array digits, where each digits[i] 
is the ith digit of the integer. The digits are 
ordered from most significant to least 
significant in left-to-right order. The large 
integer does not contain any leading 0's.
66. 

Input: digits = [1,2,3]
Output: [1,2,4]

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
*/

var plusOne = function (digits) {
    // Source: https://leetcode.com/problems/plus-one/solutions/4983026/faster-than-70/
    let i = digits.length - 1
    // Find first single number that can be normally incremented (doesn't increase to 2 digits)
    while(digits[i] === 9) {
        digits[i] = 0
        i--
    }
    // Is this only for cases like: 99999?
    if(i < 0) {
        var arr = [1]
        // Array.prototype.concat() is used to merge two or more arrays.
        // This method doesn't change the existing arrays, but instead returns a new array.
        digits = arr.concat(digits)
    } else {
        digits[i]++
    }
    return digits
    
    // https://www.w3schools.com/js/js_numbers.asp#:~:text=Integer%20Precision,accurate%20up%20to%2015%20digits.
    // Not working, JS numbers are accurate up to 15 digits.
    /*let strNum = ''
    digits.forEach((x) => {
        strNum += x
    })
    strNum = (Number(strNum)) + 1
    strNum = strNum.toString()
    digits = []
    for (let i = 0; i < strNum.length; i++) {
        digits[i] = Number(strNum[i])
    }
    return digits*/
}

//console.log(plusOne([1,2,3]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log(plusOne([9,9,9,9]))

