// Find the missing number in a given integer array of 1 to 100

let arr = [1,2,3,4,5,6,7,8,10];

for (i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i+1]) {
        let missingNum = arr[i] + 1;
        console.log('Missing number is ' + missingNum)
        break;
    }
}