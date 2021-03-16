// functions are objects
// Capital letters for functions typically denote a class
function Bear(type) {
    // this.type adds a property of 'type' to this object
    this.type = type
}

// Bear.growl won't make growl available to instances of Bear, only Bear itself
// Need to put it on the prototype to make it available to all instances of Bear
Bear.prototype.growl = function() {
    console.log('The ' + this.type + ' bear says grr')
}

function Grizzly() {
    // call this constructor using this instance
    Bear.call(this, 'grizzly')
}
// Everything we have on the Bear prototype we are assigning to the Grizzle prototype
// Need to create a new object based off of the Bear prototype because otherwise it just makes it equal Bear
Grizzly.prototype = Object.create(Bear.prototype)

//var g = new Bear('grizzly')
var g = new Grizzly()
var p = new Bear('polar')

// Terminal won't show growl in the object unless you call it
console.log(g.growl(), p.growl())