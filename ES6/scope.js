
// source: https://www.w3schools.com/js/js_scope.asp

/* Block Scope */
var x = 10
console.log(x)
{
    // both let and const are new to ES6 and have block scope
    // const is like let but can't change
    let x = 2
    const y = 3
    console.log(x,y)
}
// let x and const y can't be accessed here
console.log(x)
{
    var glob = 5
}
console.log(glob)

/* Function Scope */
// variables declared inside a function are local to the function
// local variables have Function Scope
function myFunction() {
    // variables declared with var, let, and const are similar when 
    // declared inside a function, ALL have function scope
    var carName1 = 'volvo'
    let carName1 = 'volvo'
    const carName1 = 'volvo'
    // function arguments are also local variables
}

/* Global Scope */
// a variable declared outside a function becomes Global
// variables declared with var, let, and const are similar when declared
// outside a function, they all have Global Scope
var u = 1
let u = 1
const u = 1

// Objects and functions are also variables

/* Automatically Global */
// if you assign a value to a variable that has not been declared, 
// it will automatically become a Global variable

myFunction1();

// code here can use name

function myFunction1() {
    undeclared = "Volvo";
}

/* Strict Mode */
// undeclared variables are not automatically global

/* Global Variables in HTML */
// with JS, the global scope is the JS environment
// with HTML, the global scope is the window object
// pretend this is in an html file:
var htmlCarName = 'volvo'
// code here can use window.carName
// global variables defined with let don't belong to the window object
let htmlCarName1 = 'volvo'
// code here can not use window.carName

/* Lifetime */
// lifetime of any variable starts when it's declared
// Function (local) variables are deleted when the function is completed
// in a browser, global variables are deleted upon closing browser window/tab

