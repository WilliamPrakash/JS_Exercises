/* Asynchronous JavaScript
source: Eloquent JavaScript (third edition) chapter 11.
source: https://www.youtube.com/watch?v=QSqc6MMS6Fk
source: https://www.youtube.com/watch?v=TnhCX0KkPqs
1. Callbacks
-One approach to asynchronous programming is
to make functions that perform a slow action take an
extra argument, a callback function. The action is
started, and when it finishes, the callback function is
called with the result.
-In a way, asynchronicity is contagious. Any function
that calls a function that works asynchronously must
itself be asynchronous, using a callback or similar
mechanism to deliver its result.
-One main issue is "callback hell", which led to promises.
2. Promises
-In the case of asynchronous actions, you could, instead
of arranging for a function to be called at some point in
the future, return an object that represents this future
event.
-A promise is an asynchronous action that may complete at
some point and produce a value.
-It is able to notify anyone who is interested when its
value is available.
-Easiest way to create one is using Promise.resolve(), or
use Promise as a constructor: new Promise(). The constructor
expects a function as an arg, which it immediately calls,
passing it a function that it can use to resolve the promise.
-To get the result of a promise, you can use its then()
method. This registers a callback function to be called
when the promise resolves and produces a value.
-then() also returns another promise, which resolves to
the value that the handler function returns or, if that
returns a promise, waits for that promise and then resolves
to its result.
-Has 3 states: pending, resolved, and rejected.
3. Async/Await
-Pseudo-synchronous code that describes asynchronous
computation.
-An async function is a function that implicitly returns
a promise and that can, in its body, await promises in a
way that looks synchronous.
-When an async function is called, it returns a promise. As
soon as the body returns something, the promise is resolved.
If it throws an exception, the promise is rejected.
-"await" can be used inside an async function. Put it in
front of an expression to wait for a promise to resolve, and
only then continue the execution of the function.
*/

// Callback
let pizza
function OrderPizza(callback) {
    console.log('Order pizza')
    setTimeout(() => {
        pizza = 'Large pepperoni'
        callback(pizza)
    }, 2000)
    console.log('Pizza was ordered')
}

function EatPizza(pizza) {
    console.log(`Eat the ${pizza}`)
}

OrderPizza(EatPizza)
console.log('Play video games')
console.log(`Eat ${pizza}`)


// Promise
function GetWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny')
        }, 1000)
    })
}

function GetWeatherIcon(weather) { // data from the above resolve('Sunny')
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('Yay, we can go outside!')
                    break
                default:
                    reject('I won\'t go  outside unless it\'s sunny.')
                    break
            }
        }, 1000)
    })
}

function OnSuccess(data) {
    console.log(`Success ${data}`)
}

function OnError(data) {
    console.log(`Error: ${data}`)
}

function End() {
    console.log('Done')
}

GetWeather()
.then(GetWeatherIcon)
//.then(OnSuccess, OnError)
.then(OnSuccess).catch(OnError) // works the same as the above line
.finally(End)

// Async/Await
function GetData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(46)
        }, 1000)
    })
}

async function Start() {
    const result = await getData()
    console.log(result)
}

Start()
console.log('continuing execution...')
