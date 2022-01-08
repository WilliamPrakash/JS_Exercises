
const items = [
    {name: '', price: 100 },
    {name: '', price: 200 },
    {name: '', price: 290 },
    {name: '', price: 78 },
    {name: '', price: 903 },
    {name: '', price: 61 },
    {name: '', price: 142 }
]
// filter returns all items from an array based on a filter
var filteredItems = items.filter((items) => {
    if (items.price <= 100) {
        return items
    }
})
// map creates a new array populated with the results of 
// calling a provided function on every element in the calling array
var arr = [1, 2, 3, 4]
var map = arr.map(x => x * 2)
// some tests whether at least one element in the array passes the test
// implemented by the callback function
const some = [1,2,3,5,8].some(item => item > 5)
// every is similar to some, but tests whether all the elements pass the test
const every = [2,2,1,2,2].every(val => val == 2)
// reduce basically is a giant sum function
const initialValue = 10
var reduced = [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue, initialValue)
// flat creates a new array with all sub-array elements concatenated into it recursively 
// up to the specified depth. By default, it will flatten 1 level
/*const arr1 = [1, 2, [3, 4]]
console.log(arr1.flat())
const arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat())
const arr3 = [1, 2, [3, 4, [5, 6]]]
console.log(arr3.flat(2))*/

console.log(reduced)