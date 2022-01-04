
// JavaScript variables can be local or global
// Global variables can be made local (private) with closures
// Technically this is a closure
var x = 3;
function addTwo(num) {
    num = num + 2;
    return num;
}

console.log(addTwo(x));
x = 4;
console.log(addTwo(x));