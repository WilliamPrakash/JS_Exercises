
// Output?
console.log([] + [])    // it will typecast empty array as empty string, so you get empty string

// Output?
function a() {
    return 'hello';
}
const sentence = a `hi`;    // this is a tagged template, stuff in `` will be considered an argument to this function
console.log(sentence);  // Output would still be just 'hello'





















// Output?
console.log(2 + '2');   // 22
console.log(2 - '2');   // 0

// Remove duplicates in one line
let nums = [1, 2, 2, 3];
var x = new Set(nums);
console.log([...x]);    // [...] is a spread operator to convert it to an array

// Make l available outside the block without changing 'let'
// ES6 has let but ES5 doesn't, so it will be converted to var and will not have block scope anymore
// soluion is to use an immediately invoked function
let func = function() {
    {
        (function() {
            let l = 'let';
            var v = 'var';
        })();
    }
    console.log(v);
    console.log(l);
}
func();

// Output?
console.log(5 < 6 < 7); // true
    // 5 is less than 6 so you get: true < 7
    // true < 7 converts to 1 < 7 which is true
console.log(7 > 6 > 5); // false
    // 7 is greater than 6 so you get true > 5
    // true > 5 converts to 1 > 5 which is false

// Output?
let a = () => arguments;
console.log(a('hi'));   // arguments is not defined

// Prevent the user from adding new properties to the object
// Also allow user to modify already existing properties
// Modify name but not sex?
let profile = {
    name: 'will',
    sex: 'male'
}
// use Object.freeze(profile); for the first question
// use Object.seal(profile); for the second question
// remove sex: 'male' from profile and write the following:
/*  Object.defineProperty(profile, 'age', {
    value: 'male',
    writable: false
})  */
profile.age = 22;
console.log(profile);

// Output?
console.log(Math.max());    // -infinity
    // always starts off comparing the first value to -infinity, so if there is no value, it's just -infinity