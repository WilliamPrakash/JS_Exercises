/* Scope
Source: https://www.w3schools.com/js/js_scope.asp
-Before ES6 (2015), JavaScript variables had only Global and Functional scope.
-ES6 introduced two important new JavaScript keywords: let and const.
-These two keywords provide Block scope in JavaScript. Variables declared
inside a {} block cannot be accessed from outside the block. */
"use strict"
// Block scope
{
    let x = 2
    const y = 1
}
// Neither x nor y can be seen here
/* Variables declared with the var keyword cannot have block scope, as they
can be accessed from outside the block */
{
    var z = 3
}
// y can be seen here
/* Function/Local scope
-Variables declared within a JavaScript function are local to the function.
Variables declared with var, let, and const are quite similar when declared
inside a function. */
function demonstrate() {
    let firstName = "wil"
    var lastName = "liam"
}
// Neither firstName nor lastName can be seen here
/* Global scope
-A variable declared outside a function is global, meaning all scripts and
functions on a web page can access it.
-Variables declared with var, let, and const are quite similar when declared
outside a block. They all have global scope */
var a = 2.5
let b = 3.5
const c = 4.5

