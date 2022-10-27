
console.log(1)
console.log(2)

//
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }

asyncCall()

/*
setTimeout(() => {
    console.log('callback function triggered')
}, 2000)
*/

console.log(3)
console.log(4)