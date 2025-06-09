/* Different ways of writing functions in JavaScript
scope: https://www.geeksforgeeks.org/javascript/different-ways-of-writing-functions-in-javascipt/

1. Function Declaration: a function declaration is the traditional
way to define a function. It starts with the function keyword,
followed by the function name and any parameters the function needs.
Syntactically a statement.
2. Function Expression: another way to define a function. Here, the
function is defined inside a variable, and the function's value
(it's returned value) is stored in that variable. Syntactically
an expression. Can be anonymous.
3. Arrow Functions: introduced in ES6. They provide shorter syntax
for writing functions. Instead of the function keyword, you use an
arrow =>. Doesn't have bindings to this, arg, or super. Can't be
used as constructors. Cannot use yield. */

// 1. Function Declaration/Definition
function Add(a, b) {
    return a + b
}

// 2. Function Expression
const Subtract = function(a, b) {
    return a - b
}

// 3. Arrow Function
let Multiply = (a, b) => {
    return a * b
}

/* JavaScript Functions
source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
Broadly speaking, JavaScript has four kinds of functions:
1. Regular function: can return anything. Always runs to completion
after invocation.
2. Generator function: returns a Generator object; can be paused
and resumed with the yield operator.
3. Async function: returns a Promise; can be paused and resumed with
the await operator.
4. Async generator function: returns an AsyncGenerator object; both
the await and yield operators can be used. */
