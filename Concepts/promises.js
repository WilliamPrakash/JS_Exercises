
// resolve is fulfilling the promise
// reject is the promise has not been fulfilled within given time/constraint
var promise = new Promise(function(resolve, reject) {
    var x = 12
  
    if (x > 10) {
      resolve("X is greater than 10");
    }
    else {
      reject(Error("X is not greater than 10"));
    }
  });
  
  promise.then(function(result) {
    console.log(result); // "Stuff worked!"
  }, function(err) {
    console.log(err); // Error: "It broke"
  });

// Example from video; only uses resolve tho
/*let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('Cleaned the room');
    });
};

let removeGarbage = function(p) {
    return new Promise(function(resolve, reject) {
        resolve('remove garbage');
    });
};

let winIceCream = function(p) {
    return new Promise(function(resolve, reject) {
        resolve('received ice cream');
    });
};
// will only run after promise is finished
cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return winIceCream(result);
}).then(function(result) {
    console.log('finished' + result);
})

// could also write:
Promise.all([cleanRoom(), removeGarbage(),
     winIceCream()]).then(function() {
         console.log('All finished');
     })
// if you want to run something if any one promise is fulfilled
Promise.race([cleanRoom(), removeGarbage(),
    winIceCream()]).then(function() {
         console.log('One of them is finished')
    });*/


/*let promiseToClean = new Promise(function(resolve, reject) {
    // cleaning the room
    let isClean = false;

    if(isClean) {
        resolve('clean');
    } else {
        reject('not clean');
    }

});

// method that gets called when the promise is resolved
promiseToClean.then(function(fromResolve) {
    console.log('the room is ' + fromResolve);
}).catch(function(fromReject) {
    console.log('the room is ' + fromReject);
})*/