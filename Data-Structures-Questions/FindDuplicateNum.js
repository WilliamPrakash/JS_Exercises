// Find a duplicate number in an array of integers

const arr = [1,2,3,4,5,6,7,7,8,6,10];
var observed = {}

for(let i = 0; i < arr.length; i++) {
    if(observed[arr[i]]) {
        console.log('Duplicate is ' + arr[i]);
        return;
    } else {
        observed[i] = arr[i];
    }
    console.log('No duplicates found');
    return;
}
