// Input = 123; output would be 321
// Input = -321; output would be  -123

rev(123)

function rev(x) {
    str = x.toString()
    //console.log(str.length)
    reverse = ''
    for(i = str.length; i >= 0; i--){
        // I think that having the reverse = reverse. acts like reverse +=
        reverse = reverse.concat(str.charAt(i))
    }
    console.log(reverse)
}