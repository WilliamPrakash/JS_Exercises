/*
35. Given a sorted array of distinct integers and a 
target value, return the index if the target is found. 
If not, return the index where it would be if it 
were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/


var searchInsert = function(nums, target) {
    try {
        let indx = nums.findIndex(x => x == target)
        if(indx != -1) { // Target is in nums
            if(target > nums[nums.length-1]) { // Target is largest in nums
                return nums.length
            } else {
                return indx
            }
        } else { // Target is not in nums
            nums.push(target)
            //https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
            // By default, the sort method sorts elements alphabetically.
            // To sort numerically, just add a new method to handle number sorts
            nums.sort(function(a,b) {
                return a - b
            })
            let newIndx = nums.findIndex(x => x == target)
            return newIndx
        }
    } catch (ex) {
        console.log('error: ' + ex)
    }
};

//console.log(searchInsert(nums = [1,3,5,6], target = 5))
//Output: 2

//console.log(searchInsert(nums = [1,3,5,6], target = 2))
//Output: 1

//console.log(searchInsert(nums = [1,3,5,6], target = 7))
//Output: 4

console.log(searchInsert(nums =[3,5,7,9,10], target = 8))
//Output: 3
