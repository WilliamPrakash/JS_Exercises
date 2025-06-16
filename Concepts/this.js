/* this keyword
-In JavaScript modules, the behavior of this depends on the module type.
-CommonJS Modules:
    1. In top-level code, this refers to module.exports. This is an empty object initially.
    2. Within functions, this behaves as it normally does in JavaScript, determined by
        how the function is called.
-ES Modules:
    1. In top-level code, this is undefined. It does not refer to the global object or
    module exports.
    2. Within functions, the behavior of this is determined by how the function is
    called, just like in regular JavaScript.
    3. ES Modules runs JavaScript in strict mode by default, hence this being
    undefined.
-If you need access to the global object in ES modules, use globalThis.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
-The this keyword refers to the context where a piece of code, such as a function's body,
is supposed to run. Most typically, it is used in object methods, where this refers to
the object that the method is attached to, thus allowing the same method to be reused on
different objects.
-The value of this in JavaScript depends on how a function is invoked (runtime binding),
not how it is defined.
-When a regular function is invoked as a method of an object (obj.method()), this points
to that object.
-When invoked as a standalone function (not attached to an object: func()), this
typically refers to the global object (in non-strict mode) or undefined (in strict mode).
-Function.prototype.bind() can create a function whose this binding doesn't change.
-Function.prototype.apply() and Function.prototype.call() can also set the this value
for a particular call.
-Arrow functions inherit this from the parent scope at the time they are defined. However,
arrow functions do not have their own this binding. Therefore, their this value cannot
be set by bind(), apply(), or call() methods.
-In non-strict mode, this is always a reference to an object.
-In strict mode (which ES Modules is in by default), it can be any value. */

console.log(this); // undefined
console.log(globalThis);

(function GetParam() {
    console.log(this)
}) ()

const obj = {
    prop: 42,
    getProp() {
        return this.prop
    }
};
console.log(obj.getProp());

/*
-The value of this depends on in which context it appears: function, class, or global.
-Inside a function, the value of this depends on how the function is called.
-For a regular function (not an arrow function, bound function, etc.), the value of this
is the object that the function is accessed on. I.E. if the function call is in the form
of obj.f(), then this refers to obj. */

function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

/*
-The value of this is not the object that has the function as an own property, but the
object that is used to call the function.
-The value of this always changes based on how a function is called, even when the 
function was defined on an object at creation: */

const obj4 = {
    name: "obj4",
    getThis() {
        return getThis;
    }
};

const obj5 = { name: "obj5" };
obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }

/*
-If the function is called without being accessed on anything, this will be undefined —
but only if the function is in strict mode. 
-In non-strict mode, a special process called this substitution ensures that the value
of this is always an object. This means:
    1. If a function is called with this set to undefined or null, this gets substituted
    with globalThis.
    2. If the function is called with this set to a primitive value, this gets substituted
    with the primitive value's wrapper object. */



/* Constructors
-When a function is used as a constructor (with the new keyword), its this is bound to the
new object being constructed, no matter which object the constructor function is accessed
on.
-The value of this becomes the value of the new expression unless the constructor returns
another non-primitive value.
In the second example (C2), because an object was returned during construction, the new
object that this was bound to gets discarded. (This essentially makes the statement
this.a = 37; dead code. It's not exactly dead because it gets executed, but it can be
eliminated with no outside effects.) */

function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38

/* Super
-When a function is invoked in the super.method() form, the this inside the method function
is the same value as the this value around the super.method() call, and is generally not equal
to the object that super refers to. This is because super.method is not an object member access
like the ones aboce - it's a special syntax with different binding rules. */

/* Class context
-A class context can be split into two contexts: static and instance. Constructors, methods, and
instance field initializers (public or private) belong to the instance context. Static methods,
static field initializers, and static initialization blocks belong to the static context. The 
this value is different in each context.
-Class constructors are always called with new, so their behavior is the same as function
constructors: the this value is the new instance being created.
-Class methods behave like methods in object literals - the this value is the object that the
method was accessed on. If the method is not transferred to another object, this is generally an
instance of the class.
-Static methods are not properties of this. They are properties of the class itself. Therefore,
they are generally accessed on the class, and this is the value of the class (or a subclass).
Static initialization blocks are also evaluated with this set to the current class.
-Field initializers are also evaluated in the context of the class. Instance fields are
evaluated with this set to the instance being constructed. Static fields are evaluated with this
set to the current class. This is why arrow functions in field initializers are bound to the
instance for instance fields and to the class for static fields. */

/* Derived class constructors

*/


