/* Object Prototypes
-Prototypes: the mechanism by which JavaScript objects inherit features
from one another.
-Every object in JavaScript has a built-in property called it's prototype
This makes a Prototype Chain, which ends when we reach a prototype that
has null for it's prototype property.
-Actual prototype property name: ___proto___
-Object.getPrototypeOf() -> standard way to access an object's prototype
-When you try to access a property of an object, if the property can't
be found in the object itself, it searches up the prototype chain for
that property. If not found, undefined is returned
-Shadowing: When a property lower in the prototype chain has the same
name as a property further up the prototype chain, the property lowest
down the chain gets accessed, "shadowing" the other property.
-All objects inherit from Object, whose ___proto___ === null. */

"use strict"

// Objects - Parent and Child
let superObj = {
    name: "Super Object",
    greet() {
        console.log(`Hello, I'm an object named ${this.name}.`)
    }
}
let subObject1 = new Object({
    name: "Sub Object 1",
    greet() {
        console.log(`Hello, I'm an object named ${this.name}.`)
    }
})

// Set prototype
//Object.setPrototypeOf(subObject1, superObj)
//console.log(subObject1.__proto__)
/* Mozilla warns against using  ^: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
and instead recommends creating a new object with the desired [[Prototype]] using Object.create() */
let subObject2 = Object.create(superObj)
subObject2.name = "Sub Object 2"
subObject2.greet = function() {
    console.log(`Hello, I'm an object named ${this.name}.`)
}
console.log(subObject2.__proto__)

// Standard way to access an object's prototype:
console.log(Object.getPrototypeOf(subObject2).__proto__)



// Object literal
/*let obj = {
    name: "Object literal",
    greet() {
        console.log(`Hello, I'm an object named ${this.name}.`)
    }
}*/

// Object constructor
/*const obj = new Object({name: "Object created w/ constructor"})
obj.greet = function() {
    console.log(`Hello, I'm an object names ${this.name}.`)
}*/
