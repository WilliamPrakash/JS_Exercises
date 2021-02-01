
// Mixin
let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
      console.log(`Bye ${this.name}`);
    }
};

// Usage:
class User {
    constructor(name) {
        this.name = name;
    }
}

// Copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Will").sayHi();