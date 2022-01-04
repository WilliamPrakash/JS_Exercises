// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order

//var nums = [2,11,7,15]
var nums = [2, 7, 11, 15]
var target = 9

// No need to loop back around cause once you've compared a number like 2 
// to everything, you don't ever need to use it again. It's gone through
// all its possible combos. It would be checking summations twice
/*counter = 0
nums.forEach(element => {
    
})*/

// this goes through all different 
for(i = 0; i < nums.length; i++){
    for(j = i + 1; j < nums.length; j++){
        if ( (nums[i] + nums[j]) == target) {
            console.log('Index i: ' + i + ' Index j:' + j)
        }
    }
}