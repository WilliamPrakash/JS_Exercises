
// even with 0 timeout, it doesn't mean it will execute right away
// when you do a setTimeout() it becomes asynchronous, so it has to wait for everything on the stack to finish
setTimeout(function() {
    console.log('a');
}, 0);

console.log('b');
console.log('c');