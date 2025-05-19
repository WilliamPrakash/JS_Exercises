// Input = 123; output would be 321
// Input = -321; output would be  -123

rev(123)

function rev(x) {
    str = x.toString()
    console.log(str.length-1)
    reverse = ''
    // oddly enough, the same will be printed whether i = 2 or 3
    // guess it's built in index checking by the V8 engine
    for(i = 2; i >= 0; i--){
        reverse = reverse.concat(str.charAt(i))
    }
    // JavaScript auto type converts
    reverse *= -1
    console.log(reverse)
}