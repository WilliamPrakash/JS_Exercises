/* Classes
-Templates for creating objects.
-Built on prototypes, but also have some syntax and
semantics that are unique to classes.
-Classes are in fact "special functions", meaning
they can be defined via expression or declaration. 
-Can be anonymous or names.
-Class declarations have the same temporal dead zone
restrictions as let or const and behave as if they
are not hoisted.
-A variable declared with let, const, or class is
said to be in a "temporal dead zone" (TDZ) from the
start of the block until code execution reaches the
place where the variable is declared and initialized.
-Body of a class is always executed in strict mode.
-A class element can be characterized by three aspects:
    1. Kind: getter, setter, method, or field
    2. Location: static or instance
    3. Visibility: public or private
-Constructor: a special method for creating and
initializing an object created with a class.
-A constructor can use the super keyword to call
the constructor of the super class.
-Static initializing blocks: allow flexible
initialization of static properties, including the
evaluation of statements during initialization, while
granding access to private scope.
-Methods: defined on the prototype of each class
instance and are shared by all instances.
-Static: defines a static method or field for
a class. Static properties are defined on the class
itself instead of each instance.
-Class fields are similar to object properties, not
variables, so we don't use keywords such as const to
declare them. Don't use modifier keywords either.
-Private: denoted by a "#" in front of a field.
-Extends: used in class declarations/expressions
to create a class as a child of another constructor 
(either a class or a function).
-super: can be used to call the superclass's 
constructor, or corresponding methods of super class. */

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Declaration
class Rectangle {
    height // not needed?
    width // not needed?
    static staticProp = "" // exist on class itself, not instance
    #privateProp = "can't access me" // not available outside the class

    constructor(height, width) {
        this.height = height
        this.width = width
    }

    set updateHeight(ht) {
        return this.height = ht
    }

    set updateWidth(wd) {
        return this.width = wd
    }
}
// Expression (class can be anonymous or named)
const rectangle = class {
    // "You can create instance properties inside the constructor"
    constructor(height, width) {
        this.height = height
        this.width = width
    }
}
